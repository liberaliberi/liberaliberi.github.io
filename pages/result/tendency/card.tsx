import styles from "../../../styles/result.module.scss";

interface TendencyCardProps {
  title: string;
  imgUrl: string | null;
}

export default function TendencyCard({ imgUrl, title }: TendencyCardProps) {
  return (
    <>
      <h3 className={styles.gardenTendency__title}>{title}</h3>
      {imgUrl ? (
        <div className={styles.gardenTendency__img}>
          <picture>
            {/* <source srcSet={`${imgUrl}.avif`} type="image/avif" /> */}
            <source srcSet={`${imgUrl}.webp`} type="image/webp" />
            <img width="100%" height="100%" alt="" src={`${imgUrl}.png`} />
          </picture>
        </div>
      ) : (
        <div className={styles.title__description}>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "17rem",
              height: "17rem",
              margin: "0 auto",
            }}
          >
            모두와 잘 어울려요!
          </p>
        </div>
      )}
    </>
  );
}
