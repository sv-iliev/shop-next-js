"use client";
import React from "react";
import styles from "@/app/styles/NotFoundPage.module.scss";
import { useRouter } from "next/navigation";

export default function NotFoundPage(): React.JSX.Element {
  const router = useRouter();
  const { holder } = styles;

  return (
    <div className={holder}>
      <h1>Page not found!</h1>
      <button
        onClick={() => {
          router.push("/");
        }}
        className={styles.button}
      >
        Go to Home Page
      </button>
    </div>
  );
}
