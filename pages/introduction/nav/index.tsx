import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/introduction.module.scss";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Image src="/logo.svg" width={85.31} height={20.94} alt="요즘정원" />
      <nav className={styles.nav__link} style={{ display: "inline" }}>
        <Link href="/introduction">
          <a className={styles.nav__link__introduce}>회사소개</a>
        </Link>
        <Link href="/">
          <a className={styles.nav__link__signup}> 가입하기</a>
        </Link>
      </nav>
    </div>
  );
}
