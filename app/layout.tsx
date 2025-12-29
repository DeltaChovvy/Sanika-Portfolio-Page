import type { Metadata } from "next";
import { Poppins, Manrope, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sanika Talavdekar - UX Designer",
  description: "Portfolio of Sanika Talavdekar - Former interior designer turned UX Designer. Blending design thinking with human-centered digital experiences.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: '/taper.png',
    apple: '/taper.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ WebkitFontSmoothing: 'subpixel-antialiased', textRendering: 'optimizeLegibility' }}>
      <body
        className={`${poppins.variable} ${manrope.variable} ${inter.variable} antialiased font-poppins`}
        style={{ WebkitFontSmoothing: 'subpixel-antialiased' }}
      >
        {children}
      </body>
    </html>
  );
}
