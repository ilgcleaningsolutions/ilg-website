"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/* Tailwind class names, grouped by the element they style. */
const styles = {
  shell: "min-h-screen flex flex-col bg-background",
  main: "flex-1",
} as const;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
