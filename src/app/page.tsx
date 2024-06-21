"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/main">
        <img className={styles.cover} src="/images/mainCover.jpg" />
      </Link>
    </main>
  );
}
