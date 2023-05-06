import "./globals.css";
import { Metadata } from "next";
import { ThemeChanger } from "@/components";
import { ThemeProvider } from "@/components/providers";

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "Arian Nimani Portfolio App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <div className="overflow-x-hidden select-none">
            <ThemeChanger />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
