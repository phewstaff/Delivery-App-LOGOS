import React from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>
        <header className="main text-primary-orange"></header>
        <div className="main:before flex justify-center">{children}</div>
        <footer></footer>
      </body>
    </html>
  );
};

export default layout;
