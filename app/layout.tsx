import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from '@/components/ui/toaster';
import '@stream-io/video-react-sdk/dist/css/styles.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexTalk",
  description: "Video Calling App",
  icons:{
    icon : '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <ClerkProvider 
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/logo.png",
            logoPlacement: "inside",
            shimmer: true,
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
            colorTextSecondary: "#9CA3AF",
            colorDanger: "#FF4444",
            colorSuccess: "#00CC88",
          },
          elements: {
            formButtonPrimary: "hover:opacity-80 transition-opacity",
            card: "bg-[#1C1F2E] shadow-xl",
            headerTitle: "text-2xl font-bold",
            socialButtonsIconButton: "hover:scale-105 transition-transform",
          }
        }}>
      <body className={`${inter.className} bg-dark-2`}>
        {children}
        <Toaster/>
        </body>
      </ClerkProvider>
    </html>
  );
}
