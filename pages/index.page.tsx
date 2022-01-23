import type { NextPage } from "next";

import SEOHead from "../components/seo";
import { Logo } from "../components/logo";
import styles from "../styles/Home.module.scss";
import { LinkButton } from "../components/button/link";

const Home: NextPage = () => {
  return (
    <>
      <SEOHead
        pageName="정원성향 테스트"
        description="나는 어떤 정원이 어울릴까"
        image="/start-image.png"
      />
      <div className={styles.container}>
        <div style={{ margin: "8.1055vh 0" }}></div>
        <Logo />
        <div className={styles.descLayout}>
          <p className={styles.descLayout__description}>나는 어떤</p>
          <p className={styles.descLayout__description}>정원이 어울릴까?</p>
        </div>
        <h1 className={styles.startTitle}>정원 성향 테스트</h1>
        <div className={styles.startImage}>
          <picture>
            <source srcSet="/start-image.avif" type="image/avif" />
            <source srcSet="/start-image.webp" type="image/webp" />
            <img
              className="start-image"
              src="/start-image.png"
              alt=""
              width="100%"
              height="100%"
            />
          </picture>
        </div>
        <div className={styles.startBtn}>
          <LinkButton href="/garden-test" name="테스트 시작하기" />
        </div>
      </div>
    </>
  );
};

export default Home;
