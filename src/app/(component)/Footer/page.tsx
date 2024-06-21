import Image from "next/image";
import styles from "./page.module.css";

export default function footer() {
  return (
    <div>
      <img className={styles.footerImg} src="/images/footer.png" />
    </div>
  );
}
