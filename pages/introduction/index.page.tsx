import styles from "../../styles/introduction.module.scss";

import Footer from "./footer";
import Header from "./header.tsx";
import Information from "./information";
import Introduce from "./introduce";
import Nav from "./nav";

export default function Introduction() {
  return (
    <div className={styles.page}>
      <Nav />
      <div></div>
      <section className={styles.header}>
        <picture className={styles.header__img}>
          <source srcSet="/landing1x.webp" type="image/webp" />
          <img src="/landing1x.png" alt="" width="100%" height="100%" />
        </picture>
      </section>
      <section className={styles.header__title}>
        <Header />
      </section>
      <section className={styles.introduction}>
        <Introduce />
      </section>
      <section className={styles.information}>
        <Information />
      </section>
      <section style={{ backgroundColor: "#171D21", width: "100%" }}>
        <Footer />
      </section>
      <footer className={styles.copyright}>
        ©2022. sooyeonkwon all rights reserved
      </footer>
    </div>
  );
}
