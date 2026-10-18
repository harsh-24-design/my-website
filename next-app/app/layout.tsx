import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CppMastery - Interactive C++ & DSA Learning Platform",
  description: "Learn C++ from beginner to advanced DSA with interactive lessons in Hinglish, live C++ online compiler, progressive hints, and step-by-step dry runs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#090d16] text-[#f8fafc] font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
