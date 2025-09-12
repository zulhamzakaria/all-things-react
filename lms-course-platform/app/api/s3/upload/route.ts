import { env } from "@/lib/env";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import z from "zod";
import { v4 as uuidv4 } from "uuid";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3 } from "@/lib/s3-client";

export const fileUploadSchema = z.object({
  fileName: z.string().min(1, { message: "Filename is required" }),
  contentType: z.string().min(1, { message: "Content type is required" }),
  size: z.number().min(1, { message: "Size is required" }),
  isImage: z.boolean(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = fileUploadSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }
    const { fileName, contentType, size } = validation.data;

    const uniqueKey = `${uuidv4()}-${fileName}`;

    const putCommand = new PutObjectCommand({
      Bucket: env.NEXT_PUBLIC_S3_BUCKET,
      ContentType: contentType,
      ContentLength: size,
      Key: uniqueKey,
    });

    const preSignedUrl = await getSignedUrl(S3, putCommand, {
      expiresIn: 360, //in seconds or 6 mins
    });

    const response = {
      preSignedUrl,
      key: uniqueKey,
    };

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return NextResponse.json(
      {
        error: "Failed to generate presigned Url",
      },
      { status: 500 }
    );
  }
}
