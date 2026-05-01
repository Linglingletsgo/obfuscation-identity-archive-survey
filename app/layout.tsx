import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Obfuscation Identity Archive",
  description: "An anonymous bilingual archive for assembling obfuscated identities."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
