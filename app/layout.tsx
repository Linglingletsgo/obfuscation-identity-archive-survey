import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Obfuscation Identity Archive",
  description: "A bilingual SurveyJS questionnaire for the Obfuscation Identity Archive."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
