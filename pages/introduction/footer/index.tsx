import styles from "../../../styles/introduction.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <p className={styles.footer__paragraph}>조경을 위한 모든 과정이</p>
        <p className={styles.footer__paragraph}>빠르고 쉬워지는 새로운 경험</p>
      </div>
      <div>
        <button className={styles.serviceButton}>지금 확인하세요</button>
      </div>
    </div>
  );
}
