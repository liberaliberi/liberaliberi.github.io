import styles from "../../../styles/result.module.scss";

interface DescriptionProps {
  descriptions: string[];
}

export default function Description({ descriptions }: DescriptionProps) {
  return (
    <>
      <div>
        {descriptions.map((el) => (
          <p className={styles.title__description} key={el}>
            {el}
          </p>
        ))}
      </div>
    </>
  );
}
