import prismaDb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { companionId: string } }
) {
  try {
    const body = await req.json();
    const user = await currentUser();
    const { src, name, description, instructions, seed, categoryId } = body;

    if (!params.companionId) {
      return new NextResponse("Missing Companion Id", { status: 400 });
    }

    if (!user || !user.id || !user.firstName) {
      return new NextResponse("Halt", { status: 401 });
    }

    if (
      !src ||
      !name ||
      !description ||
      !instructions ||
      !seed ||
      !categoryId
    ) {
      return new NextResponse("Incomplete data", { status: 400 });
    }

    const companion = await prismaDb.companion.update({
      where: {
        id: params.companionId,
        userId: user.id,
      },
      data: {
        categoryId,
        userId: user.id,
        userName: user.firstName,
        src,
        name,
        description,
        instructions,
        seed,
      },
    });

    return NextResponse.json(companion);
  } catch (error) {
    console.error("companion patch", error);
    return new NextResponse("Internal Error.", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { companionId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Halt", { status: 401 });
    }

    const companion = await prismaDb.companion.delete({
      where: { userId, id: params.companionId },
    });

    return NextResponse.json(companion);
  } catch (error) {
    console.error("comapnion delete", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
