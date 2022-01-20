import styles from "../../../styles/result.module.scss";

interface DescriptionProps {
  descriptions: string[];
}

export default function Description({ descriptions }: DescriptionProps) {
  return (
    <>
      {descriptions.map((el) => (
        <p key={el} className={styles.description}>
          {el}
        </p>
      ))}
    </>
  );
}
