"use client";

import { useState } from "react";

export default function ForceRerenderButton() {
  const [, setState] = useState({});

  const forceRerender = () => {
    setState({});
  };

  return (
    <button
      className="bg-slate-200 w-8 h-8 text-white rounded-full text-sm font-normal text-slate-800"
      onClick={forceRerender}
    >
      💣
    </button>
  );
}
