import React from "react";
import "@/styles/globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        a;sldkjf
        <header className="main text-primary-orange">
          dlkfdlkfdlkfdlkfdlkf dlkf
        </header>
        <div className="main:before">{children}</div>
        <footer></footer>
      </body>
    </html>
  );
};

export default layout;
