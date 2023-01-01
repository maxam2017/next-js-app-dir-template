import Content from "../components/content";
import { Footer } from "../components/footer";
import Header from "../components/header";
import "windi.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
