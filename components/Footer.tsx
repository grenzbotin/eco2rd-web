import Link from "next/link";
import styles from "../styles/Footer.module.scss";

function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <Link href="/privacy">Privacy</Link>
      <img src="./logo.svg" alt="eco₂rd Logo" width={25} height={25} /> © 2021 -{" "}
      {new Date().getFullYear()} eco₂rd
    </footer>
  );
}

export default Footer;
