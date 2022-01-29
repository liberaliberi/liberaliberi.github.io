import Image from "next/image";

import styles from "../../../styles/introduction.module.scss";
import { event } from "../../../components/react-ga/handler";

export default function Nav() {
  const onClick = () => {
    event({ action: "signup" });
  };

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
          rel="noopener"
          onClick={onClick}
          href={process.env.NEXT_PUBLIC_GOOGLE_FORM}
          className={styles.nav__link__signup}
          target="_blank"
        >
          가입하기
        </a>
      </nav>
    </div>
  );
}
