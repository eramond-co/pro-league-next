import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Providers } from "@/store/providers";
import Modal from "@/components/modal/modal";

export const metadata: Metadata = {
  title: "Socca Austria",
  openGraph: {
    type: "website",
    title: "Socca Austria",
    siteName: "Socca Austria",
    url: "https://soccaaustria.at/",
    description:
      "Der Puls des modernen Fußballs! Erleben Sie die Spannung unserer neu gegründeten Fußballliga, wo Leidenschaft auf Professionalität trifft.",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "opengraph",
        width: 400,
        height: 400,
        type: "image/jpeg",
      },
      {
        url: "/twitter-image.jpg",
        alt: "opengraph",
        width: 400,
        height: 400,
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <>
            <Modal />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
