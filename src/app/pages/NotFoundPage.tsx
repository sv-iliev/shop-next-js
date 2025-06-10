"use client";
import React from "react";
import styles from "@/app/styles/NotFoundPage.module.scss";
import { useRouter } from "next/navigation";

export default function NotFoundPage(): React.JSX.Element {
  const router = useRouter();

  return (
    <div className={styles.holder}>
      <h1>Page not found!</h1>
      <button
        onClick={() => {
          router.push("/");
        }}
        className={`${styles.button} btn-primary`}
      >
        Go to Home Page
      </button>
    </div>
  );
}
