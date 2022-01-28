import Image from "next/image";

import styles from "../../../styles/introduction.module.scss";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Image src="/logo.svg" width={85.31} height={20.94} alt="요즘정원" />
      <nav className={styles.nav__link} style={{ display: "inline" }}>
        <a
          href="https://libera-liberi.notion.site/Libera-Liberi-cee12d5801be428296620055c62e6982"
          target="_blank"
          rel="noreferrer"
          className={styles.nav__link__introduce}
        >
          회사소개
        </a>
        <a
          href="https://forms.gle/HYYME6d6S2NhnoU5A"
          className={styles.nav__link__signup}
          target="_blank"
          rel="noreferrer"
        >
          가입하기
        </a>
      </nav>
    </div>
  );
}
