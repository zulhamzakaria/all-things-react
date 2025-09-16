// app/api/s3/test/route.ts
import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { env } from "@/lib/env";
// adjust import to your env loader

const S3 = new S3Client({
  region: "auto",
  endpoint: env.AWS_ENDPOINT_URL_S3,
  forcePathStyle: false,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function GET() {
  const key = `${uuidv4()}-test.txt`;

  try {
    const putCommand = new PutObjectCommand({
      Bucket: env.NEXT_PUBLIC_S3_BUCKET,
      Key: key,
      Body: "hello world", // simple text payload
    });

    await S3.send(putCommand);

    return NextResponse.json({
      ok: true,
      message: `Successfully uploaded test file to ${key}`,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        ok: false,
        message: error.message,
        name: error.name,
      },
      { status: 500 }
    );
  }
}
