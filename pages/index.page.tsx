import type { NextPage } from "next";
import Link from "next/link";

import SEOHead from "../components/seo";
import { Logo } from "../components/logo";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <SEOHead
        pageName="나는 어떤 정원이 어울릴까?"
        description="정원성향 테스트"
        image="/start-image.png"
      />
      <div className={styles.container}>
        <Logo />
        <div className={styles.descLayout}>
          <p className={styles.descLayout__description}>나는 어떤</p>
          <p className={styles.descLayout__description}>정원이 어울릴까?</p>
        </div>
        <h1 className={styles.startTitle}>정원 성향 테스트</h1>
        <div className={styles.startImage}>
          <picture>
            <source srcSet="/start-image.avif" />
            <source srcSet="/start-image.webp" />
            <img
              className="start-image"
              src="/start-image.png"
              alt=""
              width="100%"
              height="100%"
            />
          </picture>
        </div>
        <Link href="/garden-test">
          <button className={styles.startButton}>
            <a>테스트 시작하기</a>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
