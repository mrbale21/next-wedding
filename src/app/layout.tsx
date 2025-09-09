import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "./AOSProvider";

export const metadata: Metadata = {
  title: "Wedding-Ebot&Nina",
  icons: {
    icon: "data:,",
    shortcut: "data:,",
    apple: "data:,",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
