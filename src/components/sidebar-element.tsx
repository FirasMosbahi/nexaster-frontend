"use client";

import React from "react";
import Link from "next/link";

export default function SidebarElement({
  icon,
  text,
  route,
}: {
  icon: React.ReactElement;
  text: string;
  route: string;
}) {
  return (
    <Link
      href={route}
      className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
    >
      <div className="pr-4">{icon}</div>
      {text}
    </Link>
  );
}
