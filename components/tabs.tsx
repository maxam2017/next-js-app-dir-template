"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import RenderCounter from "./render-counter";

interface TabsProps {
  children: React.ReactNode;
}

interface TabProps {
  isActive?: boolean;
  href?: string;
  children: React.ReactNode;
}

export function Tab({ children, href }: TabProps) {
  const pathname = usePathname();
  const isActive = href ? pathname === href : false;

  const el = (
    <div
      className={`px-6 pt-2 pb-1 text-sm cursor-pointer ${
        isActive
          ? "text-purple-600 font-bold border-b-2 border-purple-600 mb-[-1px]"
          : "text-gray-400"
      }`}
    >
      {children}
    </div>
  );

  return href ? <Link href={href}>{el}</Link> : el;
}

export default function Tabs({ children }: TabsProps) {
  return (
    <div className="pt-2 flex border-b-[1px] border-gray-300 items-center">
      {children}
    </div>
  );
}
