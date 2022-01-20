import styles from "../../../styles/result.module.scss";
import { H2 } from "../components/header";

interface RecommandProps {
  imgName: string;
  imgUrl: string;
}

export default function Recommand({ imgName, imgUrl }: RecommandProps) {
  return (
    <>
      <H2>이런 당신을 취향 저격할 장소를 추천해드려요!</H2>
      <figure>
        <figcaption className={styles.imgTitle}>{imgName}</figcaption>
        {/* img 태그 추가적으로 넣기 */}
      </figure>
    </>
  );
}
