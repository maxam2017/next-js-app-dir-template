interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <div className="mt-[48px] flex-1 p-4 flex">{children}</div>;
}
