import Link from "next/link";

import styles from "./back_link.module.css";

export function BackLink() {
  return (
    <Link href="/" className={styles.backLink}>
      <span aria-hidden="true">←</span>
      Back to home
    </Link>
  );
}
