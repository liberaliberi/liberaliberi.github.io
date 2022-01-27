import { useRouter } from "next/router";

import styles from "../../../styles/introduction.module.scss";

export default function Header() {
  const { push } = useRouter();
  return (
    <>
      <h1 className={styles.header__title}>
        쉽고 가까운 정원을 위한
        <br /> 변화의 시작
      </h1>
      <button onClick={() => push("/email")} className={styles.serviceButton}>
        서비스 이용하기
      </button>
    </>
  );
}
