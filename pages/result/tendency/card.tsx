import styles from "../../../styles/result.module.scss";

interface TendencyCardProps {
  title: string;
  imgUrl: string;
}

export default function TendencyCard({ imgUrl, title }: TendencyCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__tendency}>{title}</div>
      <div>{/* 이미지 넣기 */}</div>
    </div>
  );
}
