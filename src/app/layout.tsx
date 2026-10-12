import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Agentic AI Engineering Lab", template: "%s · Agentic AI Lab" },
  description: "Learn Agentic AI through stories, simulations, experiments, and real engineering challenges.",
};

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#070b12" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
