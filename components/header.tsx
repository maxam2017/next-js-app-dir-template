"use client";

import Link from "next/link";

function Logo() {
  return <div w="6" h="6" border="rounded-full" bg="slate-400" m="r-2" />;
}

function Title() {
  return <h1 text="black">This is Header</h1>;
}

export default function Header() {
  return (
    <header
      pos="fixed top-0 z-10"
      display="flex"
      align="items-center"
      w="full"
      h="12"
      p="4"
      font="semibold"
      bg="white"
      shadow="sm"
    >
      <Link className="flex no-underline" href="/">
        <Logo />
        <Title />
      </Link>
      <div flex="1" />
      <div display="flex" grid="gap-4" align="items-center">
        <div
          pos="relative"
          w="6"
          h="6"
          border="rounded"
          m="r-2"
          bg="purple-400"
        >
          <div
            w="2"
            h="2"
            border="rounded-full"
            bg="green-500"
            pos="absolute right-0 top-0"
            style={{ transform: "translate(40%, -40%)" }}
          />
        </div>
      </div>
    </header>
  );
}
