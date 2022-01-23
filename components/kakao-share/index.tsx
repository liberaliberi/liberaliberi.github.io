import { useEffect } from "react";
import Image from "next/image";

import KaKaoHeaderHoc from "./header";

const redirectUri = "https://liberaliberi.github.io";
const imageUrl = `${redirectUri}/start-image.png`;
// 후에 props로 받아야할 요소들
// interface kaKaoShareButtonProps {
//     title: string;
//     description: string
// }

export default function KakaoShareButton() {
  useEffect(() => {
    const kakao = (window as any).Kakao;
    if (kakao) {
      kakao.Link.createDefaultButton({
        container: "#create-kakao-link-btn",
        objectType: "feed",
        content: {
          title: "정원성향 테스트 결과",
          description: "안녕하세요 리베라리베리 입니다.",
          imageUrl,
          link: {
            mobileWebUrl: redirectUri,
            webUrl: redirectUri,
          },
        },
        buttons: [
          {
            title: "내 정원사이트 보러가기",
            link: {
              mobileWebUrl: redirectUri,
              webUrl: redirectUri,
            },
          },
        ],
      });
    }
  }, []);
  return (
    <KaKaoHeaderHoc>
      <a style={{ cursor: "pointer" }} id="create-kakao-link-btn">
        <Image
          src="/kakao-talk.svg"
          alt="카카오링크 보내기 버튼"
          width={46}
          height={46}
        />
      </a>
    </KaKaoHeaderHoc>
  );
}
