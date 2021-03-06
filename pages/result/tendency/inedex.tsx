import styles from "../../../styles/result.module.scss";

import TendencyCard from "./card";

interface TendencyProps {
  userGardenTendency: string;
  fitGarden?: string;
  badGarden: string | null;
}

export default function Tendency({
  badGarden,
  fitGarden,
  userGardenTendency,
}: TendencyProps) {
  return (
    <>
      <h2 className={styles.heading2}>이런 당신을 닮은 정원 유형</h2>
      <div className={styles.title__description}>{userGardenTendency}</div>
      <div className={styles.gardenTendency}>
        <span>
          <TendencyCard imgUrl={`/${fitGarden}`} title="환상의 성향" />
        </span>
        <span>
          <TendencyCard imgUrl={badGarden ? `/${badGarden}`: null} title="환장의 성향" />
        </span>
      </div>
    </>
  );
}
