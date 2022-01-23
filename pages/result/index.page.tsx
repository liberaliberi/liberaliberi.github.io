import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";

import { Logo } from "../../components/logo";
import { LinkButton } from "../../components/button/link";
import styles from "../../styles/result.module.scss";

import { checkGardenType } from "./result";
import FBShareButton from "../../components/fb-share";
import KakaoShareButton from "../../components/kakao-share";
import { CopyButton } from "../../components/button/copy";

export default function Result() {
  const { query, push } = useRouter();
  const { tendency } = query;
  const result = checkGardenType(tendency);

  useEffect(() => {
    if (!result) {
      alert("잘못 된 접근입니다.");
      push("/");
    }
  }, [push, result]);

  return (
    <div className={styles.result}>
      <div className={styles.title}>정원 성향 테스트 결과</div>
      <div className={styles.tendencyImg}>
        <img src={`/${tendency}.webp`} alt={result?.name} />
      </div>
      <section className={styles.section}>
        <div className={styles.title}>당신의 성향과 어울리는</div>
        <h1 className={styles.title__name}>{result?.name}</h1>
        <div>
          {result?.description.map((el) => (
            <p className={styles.title__description} key={el}>
              {el}
            </p>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading2}>이런 당신을 닮은 정원 유형</h2>
        <div className={styles.title__description}>
          {result?.userGardenType}
        </div>
        <div className={styles.gardenTendency}>
          <span>
            <h3 className={styles.gardenTendency__title}>환상의 성향</h3>
            <div className={styles.gardenTendency__img}>
              <picture>
                {/* <source
                  srcSet={`/${result?.fitGarden}.avif`}
                  type="image/avif"
                /> */}
                {/* <source srcSet="/start-image.webp" type="image/webp" /> */}
                <img
                  width="100%"
                  height="100%"
                  alt={result?.fitGarden}
                  src={`/${result?.fitGarden}.webp`}
                />
              </picture>
            </div>
          </span>
          <span>
            <h3 className={styles.gardenTendency__title}>환장의 성향</h3>
            <div className={styles.gardenTendency__img}>
              <picture>
                {/* <source
                  srcSet={`/${result?.badGarden}.avif`}
                  type="image/avif"
                /> */}
                {/* <source srcSet="/start-image.webp" type="image/webp" /> */}
                <img
                  width="100%"
                  height="100%"
                  alt={result?.badGarden}
                  src={`/${result?.badGarden}.webp`}
                />
              </picture>
            </div>
          </span>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading2}>
          이런 당신을 취향 저격할 장소를 추천해드려요!
        </h2>
        <div>현재 준비중입니다!</div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading2}>내 결과 공유하기</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 7.5 }}>
          <FBShareButton />
          <KakaoShareButton />
          <CopyButton />
        </div>
      </section>
      <footer className={styles.footer}>
        <LinkButton href="/" name="나만의 쉽고 가까운 정원, 더 알아보러 가기" />
      </footer>
      <div style={{ marginTop: "3.4rem" }}>
        <Logo />
      </div>
    </div>
  );
}
