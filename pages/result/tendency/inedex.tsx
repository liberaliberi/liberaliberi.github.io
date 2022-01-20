import styles from "../../../styles/result.module.scss";
import { H2 } from "../components/header";

import Card from "./card";

interface TendencyProps {
  userGardenTendency: string;
  fitGardenImgUrl: string;
  badGardenImgUrl: string;
}

export default function Tendency({
  badGardenImgUrl,
  fitGardenImgUrl,
  userGardenTendency,
}: TendencyProps) {
  return (
    <>
      <H2>이런 당신을 닮은 정원 유형</H2>
      <p className={styles.userTendency}>{userGardenTendency}</p>
      <div className={styles.comparisonGarden}>
        <Card title="환상의 성향" imgUrl={fitGardenImgUrl}></Card>
        <Card title="환장의 성향" imgUrl={badGardenImgUrl}></Card>
      </div>
    </>
  );
}
