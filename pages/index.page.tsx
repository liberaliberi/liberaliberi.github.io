import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import KakakoBtn from "../components/kakao-share";
import FBBtn from "../components/fb-share";
import SEOHead from "../components/seo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SEOHead>
          <KakakoBtn />
          <FBBtn />
          <Link href="/question">
            <a>정원성향 테스트 하러가기</a>
          </Link>
        </SEOHead>
      </main>
    </div>
  );
};

export default Home;
