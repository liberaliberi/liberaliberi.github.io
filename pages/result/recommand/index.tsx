import styles from "../../../styles/result.module.scss";

interface RecommandProps {
  imgName: string;
  imgUrl: string;
}

export default function Recommand({ imgName, imgUrl }: RecommandProps) {
  return (
    <>
      <h2 className={styles.heading2}>
        이런 당신을 취향 저격할 장소를 추천해드려요!
      </h2>
      <figure>
        <figcaption className={styles.recommand__imgTitle}>
          {imgName}
        </figcaption>
        <div className={styles.recommand__img}>
          <picture>
            <source srcSet={`${imgUrl}.avif`} type="image/avif" />
            <img
              src={`${imgUrl}.webp`}
              alt={imgName}
              width="100%"
              height="100%"
            />
          </picture>
        </div>
      </figure>
    </>
  );
}
