"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import prisma from "./utils/db";
import { requireUser } from "./utils/requireUser";
import { ArticleSchema, SiteCreationSchema } from "./utils/zodSchemas";
import { stripe } from "./utils/stripe";

export async function CreateSiteAction(previousState: any, formData: FormData) {
  const user = await requireUser();

  //parallel execution of Prisma
  const [subStatus, sites] = await Promise.all([
    prisma.subscription.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        status: true,
      },
    }),
    prisma.site.findMany({
      where: {
        userId: user.id,
      },
    }),
  ]);

  // condition fro Freemium
  // active sub + no of Site created
  if (!subStatus || subStatus.status !== "active") {
    if ((sites.length = 0)) {
      CreateSite();
    } else {
      return redirect("/dashboard/pricing");
    }
  } else if (subStatus.status === "active") {
    CreateSite();
  }

  async function CreateSite() {
    const submission = await parseWithZod(formData, {
      schema: SiteCreationSchema({
        async isSubdirectoryUnique() {
          const existingSubDirectory = await prisma.site.findUnique({
            where: {
              subdirectory: formData.get("subdirectory") as string,
            },
          });
          return !existingSubDirectory;
        },
      }),
      async: true,
    });

    if (submission.status !== "success") {
      return submission.reply();
    }

    const response = await prisma.site.create({
      data: {
        description: submission.value.description,
        name: submission.value.name,
        subdirectory: submission.value.subdirectory,
        userId: user.id,
      },
    });

    return redirect("/dashboard/sites");
  }
}

export async function CreatePostAction(
  previouseState: any,
  formData: FormData
) {
  const user = await requireUser();
  const submission = parseWithZod(formData, {
    schema: ArticleSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.post.create({
    data: {
      title: submission.value.title,
      smallDescription: submission.value.smallDescription,
      slug: submission.value.slug,
      articleContent: JSON.parse(submission.value.articleContent),
      imageUrl: submission.value.imageUrl,
      userId: user.id,
      siteId: formData.get("siteId") as string,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}

export async function EditPostActions(previouseState: any, formData: FormData) {
  const user = await requireUser();
  const submission = parseWithZod(formData, {
    schema: ArticleSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.post.update({
    where: {
      userId: user.id,
      id: formData.get("articleId") as string,
    },
    data: {
      title: submission.value.title,
      smallDescription: submission.value.smallDescription,
      slug: submission.value.slug,
      articleContent: JSON.parse(submission.value.articleContent),
      imageUrl: submission.value.imageUrl,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId") as string}`);
}

export async function DeletePostAction(formData: FormData) {
  const user = await requireUser();
  const data = await prisma.post.delete({
    where: {
      userId: user.id,
      id: formData.get("articleId") as string,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}

export async function UpdateImage(formData: FormData) {
  const user = await requireUser();
  const siteId = formData.get("siteId") as string;

  const data = await prisma.site.update({
    where: {
      userId: user.id,
      id: siteId,
    },
    data: {
      imageUrl: formData.get("imageUrl") as string,
    },
  });

  return redirect(`/dashboard/sites/${siteId}`);
}

export async function DeleteSite(formData: FormData) {
  const user = await requireUser();
  const data = await prisma.site.delete({
    where: {
      userId: user.id,
      id: formData.get("siteId") as string,
    },
  });
  return redirect("/dashboard/sites");
}

export async function CreateSubscription() {
  const user = await requireUser();

  let stripeUserId = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      customerId: true,
      email: true,
      firstName: true,
    },
  });

  if (!stripeUserId?.customerId) {
    const stripeCustomer = await stripe.customers.create({
      email: stripeUserId?.email,
      name: stripeUserId?.firstName,
    });

    // update stripeUserId after saving it into the User table
    stripeUserId = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        customerId: stripeCustomer.id,
      },
    });
  }

  // line_items are from registered products in Stripe
  const session = await stripe.checkout.sessions.create({
    customer: stripeUserId.customerId!,
    mode: "subscription",
    billing_address_collection: "auto",
    payment_method_types: ["card"],
    customer_update: {
      address: "auto",
      name: "auto",
    },
    success_url: "http://localhost:3000/dashboard/payment/success",
    cancel_url: "http://localhost:3000/dashboard/payment/cancelled",
    line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
  });

  return redirect(session.url!);
}
