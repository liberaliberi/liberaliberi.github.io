import { ServiceButton } from "../../../components/button/servive";
import styles from "../../../styles/introduction.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <p className={styles.footer__paragraph}>조경을 위한 모든 과정이</p>
        <p className={styles.footer__paragraph}>빠르고 쉬워지는 새로운 경험</p>
      </div>
      <div className={styles.footer__button}>
        <ServiceButton
          href={process.env.NEXT_PUBLIC_GOOGLE_FORM!}
          name="지금 확인하세요"
        />
      </div>
    </div>
  );
}
