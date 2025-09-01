import MainPage from "@/components/MainPage";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portifólio Ana Phols",
  description: "Portfólio Profissional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="pt-16"> {/* padding-top p/ não ficar atrás da navbar */}
        <MainPage />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
