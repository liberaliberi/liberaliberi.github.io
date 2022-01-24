import { useEffect } from "react";
import Image from "next/image";
import { basename } from "path";

const redirectUri = process.env.NEXT_PUBLIC_DOMAIN;

interface KaKaoShareButtonProps {
  url: string;
  kakaoLink: any;
}

export default function KakaoShareButton({ url, kakaoLink }: KaKaoShareButtonProps) {
  useEffect(() => {
    if (!kakaoLink) {
      return;
    }

    console.log(kakaoLink);

    const tendency = basename(url);
    kakaoLink.createDefaultButton({
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
      installTalk: true,
    });
  }, [kakaoLink]);

  return (
    <a style={{ cursor: "pointer" }} id="create-kakao-link-btn">
      <Image src="/kakao-talk.svg" alt="kakao share" width={46} height={46} />
    </a>
  );
}
