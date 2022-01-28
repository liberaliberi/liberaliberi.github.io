import { ReactNode } from "react";

import styles from "../../styles/introduction.module.scss";
import Nav from "./nav";

interface IntroductionProps {
  children: ReactNode;
}

export default function Layout({ children }: IntroductionProps) {
  return (
    <div className={styles.page}>
      <Nav />
      {children}
      <footer className={styles.copyright}>
        ©2022. sooyeonkwon all rights reserved
      </footer>
    </div>
  );
}
