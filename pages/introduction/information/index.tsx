import styles from "../../../styles/introduction.module.scss";

import Summary from "./summary";
import Video from "./video";

export default function Information() {
  return (
    <>
      <div>
        <h2 className={styles.information__subTitle}>
          필요한 공간 창출을 위한 정보들을 빠르고 쉽게
        </h2>
        <div className={styles.information__video}>
          <Video />
        </div>
        <p className={styles.information__paragraph}>
          조경에 산재된 데이터들을 모아
        </p>
        <p className={styles.information__paragraph}>
          새로운 공간창출을 위한 영감과 빠른 의사결정을 제공합니다.
        </p>
      </div>
      <div className={styles.information__summary}>
        <Summary />
      </div>
    </>
  );
}
