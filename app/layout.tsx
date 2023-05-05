import "./globals.css";
import { Metadata } from "next";
import { ThemeChanger } from "@/components";
import { ThemeProvider, ReduxProvider } from "@/components/providers";

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
        <ReduxProvider>
          <ThemeProvider>
            <div className="overflow-x-hidden select-none">
              <ThemeChanger />
              {children}
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
