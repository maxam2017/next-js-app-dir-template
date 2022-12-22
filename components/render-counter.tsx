"use client";

import { useRef } from "react";

export default function RenderCounter() {
  const counterRef = useRef(1);

  return (
    <div
      className="text-xs text-gray-500 font-semibold"
      suppressHydrationWarning={true}
    >
      (Rendered {counterRef.current++} times)
    </div>
  );
}
