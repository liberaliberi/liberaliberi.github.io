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
          description: "안녕하세요 리베라리베리 입니다.",
          imageUrl: `${redirectUri}/${tendency}.png`,
          link: {
            mobileWebUrl: url,
            webUrl: url,
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
