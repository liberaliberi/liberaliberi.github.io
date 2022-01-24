import { useEffect } from "react";
import Image from "next/image";
import { basename } from "path";

import KaKaoHeaderHoc from "./header";

const redirectUri = process.env.NEXT_PUBLIC_DOMAIN;

interface KaKaoShareButtonProps {
  url: string;
}

export default function KakaoShareButton({ url }: KaKaoShareButtonProps) {
  useEffect(() => {
    const tendency = basename(url);
    const kakao = (window as any).Kakao;
    if (kakao) {
      kakao.Link.createDefaultButton({
        container: "#create-kakao-link-btn",
        objectType: "feed",
        content: {
          title: "정원성향 테스트 결과",
          description:
            "저의 정원성향이래요! 당신의 정원 성향도 궁금하지 않으신가요?",
          imageUrl: `${redirectUri}/${tendency}.png`,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: "나도 테스트 하러가기",
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
        <Image src="/kakao-talk.svg" alt="kakao share" width={46} height={46} />
      </a>
    </KaKaoHeaderHoc>
  );
}
