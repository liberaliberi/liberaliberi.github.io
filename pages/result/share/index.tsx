import { CopyButton } from "../../../components/button/copy";
import FBShareButton from "../../../components/fb-share";
import KakaoShareButton from "../../../components/kakao-share";
import styles from "../../../styles/result.module.scss";

interface ShareProps {
  url: string;
}

export default function Share({ url }: ShareProps) {
  return (
    <>
      <h2 className={styles.heading2}>내 결과 공유하기</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 7.5 }}>
        <FBShareButton url={url} />
        <KakaoShareButton url={url} />
        <CopyButton url={url} />
      </div>
    </>
  );
}
