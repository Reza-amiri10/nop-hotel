import Header from "@/app/_components/Header";

import { Kavivanar } from "next/font/google";

const kavivanar = Kavivanar({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
export const metadata = {
  title: { template: "%s - Nop Hotel", default: "Welcome to the Nop Hotel" },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kavivanar.className}>
      <body className="bg-primary-950 text-gray-50 min-h-screen flex flex-col relerive">
        <Header />

        <div className="flex-1 px-8 py-12 grid ">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
