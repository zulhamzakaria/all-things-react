"use client";

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavourite: boolean;
}

export const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavourite,
}: BoardCardProps) => {
  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className=" object-fit" />
          <Overlay />
        </div>
      </div>
    </Link>
  );
};
