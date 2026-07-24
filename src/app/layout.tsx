import type { Metadata } from "next";
import { libreCaslonDisplay, newsreader, ibmPlexMono } from "@/lib/fonts";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikita Furletov",
  description: "Data engineer and meteorology researcher — portfolio and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreCaslonDisplay.variable} ${newsreader.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
