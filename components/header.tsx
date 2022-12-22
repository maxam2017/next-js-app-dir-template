"use client";

import Link from "next/link";
import { useState } from "react";
import ForceRerenderButton from "./force-rerender-button";
import RenderCounter from "./render-counter";

function Logo() {
  return <div className="w-6 h-6 rounded-full bg-slate-400 mr-2" />;
}

function Title() {
  return <h1>This is Header</h1>;
}

export default function Header() {
  const [, setState] = useState({});

  const forceRerender = () => {
    setState({});
  };

  return (
    <header className="fixed top-0 z-10 flex items-center w-full font-semibold h-12 p-4 bg-white shadow-sm">
      <Link className="flex" href="/">
        <Logo />
        <Title />
      </Link>
      <div className="flex-1" />
      <div className="flex gap-4 items-center">
        <button
          className="bg-slate-200 w-8 h-8 text-white rounded-full text-sm font-normal text-slate-800"
          onClick={forceRerender}
        >
          💣
        </button>
        <Link href="/dashboard/1">
          <button className="bg-slate-200 px-4 py-1 text-white text-sm font-normal rounded text-slate-800">
            Dashboard
          </button>
        </Link>
        <div className="w-6 h-6 rounded bg-purple-400 mr-2 relative">
          <div
            className="w-2 h-2 rounded-full bg-green-500 absolute right-0 top-0"
            style={{ transform: "translate(40%, -40%)" }}
          />
        </div>
      </div>
      <RenderCounter />
    </header>
  );
}
