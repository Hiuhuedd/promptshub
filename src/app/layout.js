import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import ClerkWrapper from "./ClerkWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PromptHub",
  description: "Discover and search high-value AI prompts across multiple categories",
  icons: {
    icon: [
      { url: "/image.png" },
      { url: "/image.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    shortcut: ["/image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>PromptHub</title>
        <meta name="description" content="Discover and search high-value AI prompts across multiple categories" />
        <link rel="icon" href="/image.png" type="image/png" />
        <link rel="apple-touch-icon" href="/image.png" sizes="180x180" type="image/png" />
        <link rel="shortcut icon" href="/image.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          margin: 0,
          minHeight: "100vh",
          position: "relative",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <ClerkWrapper>{children}</ClerkWrapper>
      </body>
    </html>
  );
}