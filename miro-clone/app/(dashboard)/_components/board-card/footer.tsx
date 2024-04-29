import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavourite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavourite,
  onClick,
  disabled,
}: FooterProps) => {
  return <div>Footer</div>;
};
