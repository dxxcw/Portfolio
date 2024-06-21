import Image from "next/image";
import styles from "./page.module.css";

export default function main() {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrap}>
        <img className={styles.IconGit} src="/images/github.png" />
        <img className={styles.IconProfile} src="/images/profile.png" />
        <img className={styles.IconPaint} src="/images/그림판.png" />
        <img className={styles.IconPort} src="/images/포트폴리오.png" />
        <img className={styles.IconBin} src="/images/휴지통.png" />
        <img className={styles.IconGame} src="/images/게임.png" />
        <img className={styles.IconTerminal} src="/images/터미널.png" />
      </div>

      <div className={styles.contanct}>
        <img src="/images/연락하기.png" />
      </div>
    </div>
  );
}
