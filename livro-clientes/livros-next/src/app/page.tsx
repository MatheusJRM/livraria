import React from "react";
import { Menu } from "@/componentes/Menu";
import styles from "./page.module.css";

export default function Home() {
  return (
    <React.Fragment>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </React.Fragment>
  );
}
