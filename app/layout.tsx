import "./globals.css";
import { Metadata } from "next";
import { ThemeProvider, ThemeChanger } from "@/components";

export const metadata: Metadata = {
  title: "Create Night Mode",
  description: "Manually Created",
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
