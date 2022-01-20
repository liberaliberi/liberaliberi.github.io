import styles from "../../styles/question.module.scss";

const lastNumber = 14;

interface QuestionNumberProps {
  currentNumber: number;
}

export const QuestionNumber = ({ currentNumber }: QuestionNumberProps ) => {
  return (
    <div className={styles.questionNumber} >
      Q{currentNumber}/{lastNumber}
    </div>
  );
};
