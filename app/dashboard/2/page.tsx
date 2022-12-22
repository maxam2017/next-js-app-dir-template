import { setTimeout } from "timers/promises";

export default async function Page() {
  await setTimeout(1000);

  return <div className="text-sm">This is dashboard 2.</div>;
}
