"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RESUME_DATA } from "@/data/resume-data";
import Image from "next/image";

export function AvatarClient() {
  return (
    <Avatar className="size-28" aria-hidden="true">
      <AvatarImage asChild src={RESUME_DATA.avatarUrl}>
        <Image
          src={RESUME_DATA.avatarUrl}
          alt={`${RESUME_DATA.name}'s profile picture`}
          width={112}
          height={112}
          priority
          unoptimized
        />
      </AvatarImage>
      <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
    </Avatar>
  );
} 