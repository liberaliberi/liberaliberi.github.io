import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { Logo } from "../../components/logo";
import { LinkButton } from "../../components/button/link";
import styles from "../../styles/result.module.scss";

import { result, UserTendency } from "./result";
import Share from "./share";
import Tendency from "./tendency/inedex";
import Description from "./description";
import SEOHead from "../../components/seo";
import { HorizonBar } from "../../components/bar/horizon";

interface ResultProps {
  tendency: UserTendency;
}

export default function Result({ tendency }: ResultProps) {
  const { query } = useRouter();

  return (
    <>
      <SEOHead
        fullUrl={`${process.env.NEXT_PUBLIC_DOMAIN}/result/${query.tendency}`}
        image={`${query.tendency}.png`}
        pageName={tendency.name}
      />
      <div className={styles.result}>
        <div className={styles.title}>정원 성향 테스트 결과</div>
        <div className={styles.tendencyImg}>
          <img src={`/${query.tendency}.webp`} alt={tendency.name} />
        </div>
        <HorizonBar />
        <section className={styles.section}>
          <div className={styles.title} style={{ color: "#1c5843" }}>
            당신의 성향과 어울리는
          </div>
          <h1 className={styles.title__name}>{tendency.name}</h1>
          <Description descriptions={tendency.description} />
        </section>
        <section className={styles.section}>
          <Tendency
            userGardenTendency={tendency.userGardenType}
            badGarden={tendency.badGarden}
            fitGarden={tendency.fitGarden}
          />
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading2}>
            이런 당신을 취향 저격할 장소를 추천해드려요!
          </h2>
          <div>현재 준비중입니다!</div>
        </section>
        <section className={styles.section}>
          <Share
            url={`${process.env.NEXT_PUBLIC_DOMAIN}/result/${query.tendency}`}
          />
        </section>
        <footer className={styles.footer}>
          <LinkButton
            href="/introduction"
            name="나만의 쉽고 가까운 정원, 더 알아보러 가기"
          />
        </footer>
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(result).map((el) => ({ params: { tendency: el } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{
  tendency: UserTendency;
}> = async ({ params }) => {
  const tendency = params?.tendency as string;
  const data = result[tendency];

  return { props: { tendency: data } };
};
