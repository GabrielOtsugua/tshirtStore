import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ContextProvider } from "@/contexts/Context";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tshirt.store",
  description: "Generated by tshirt.store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <Header />
            <main className="w-[80%] m-auto pt-40 lg:pt-32 xl:pt-40">
              {children}
            </main>
          </ThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
