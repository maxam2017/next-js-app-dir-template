import RenderCounter from "../../components/render-counter";
import Tabs, { Tab } from "../../components/tabs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white flex-1 p-2">
      <Tabs>
        <Tab href="/dashboard/1">Tab 1</Tab>
        <Tab href="/dashboard/2">Tab 2</Tab>
        <div className="flex-1" />
        <RenderCounter />
      </Tabs>
      <div className="p-4">{children}</div>
    </div>
  );
}
