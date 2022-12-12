import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/movies"}>NETFLIX</Link>
      </div>
    </header>
  );
}
