import styles from "../../../styles/result.module.scss";

interface TendencyCardProps {
  title: string;
  imgUrl?: string;
}

export default function TendencyCard({ imgUrl, title }: TendencyCardProps) {
  return (
    <>
      <h3 className={styles.gardenTendency__title}>{title}</h3>
      {imgUrl  ? (
        <div className={styles.gardenTendency__img}>
          <picture>
            {/* <source srcSet={`${imgUrl}.avif`} type="image/avif" /> */}
            {/* <source srcSet="/start-image.webp" type="image/webp" /> */}
            <img width="100%" height="100%" alt="" src={`${imgUrl}.webp`} />
          </picture>
        </div>
      ) : (
        <div className={styles.title__description}>없음</div>
      )}
    </>
  );
}
