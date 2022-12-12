import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
