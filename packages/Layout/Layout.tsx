import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <Html lang="es">
      <Head />
      <body>
        <div className="app-container flex">
          <aside className="app-navigation">
            <NavBar />
          </aside>
          <div className="app-content">
            <Main />
            <NextScript />
          </div>
        </div>
      </body>
    </Html>
  );
};

export default Layout;
