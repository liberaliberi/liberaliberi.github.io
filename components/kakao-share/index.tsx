import { useEffect } from "react";
import KaKaoHeaderHoc from "./header";

import kaKaoHeaderHoc from "./header";

const redirectUri = "https://liberaliberi.github.io";

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
          title: "custom 하게 변경되어야 함",
          description: "custom하게 변경되어야 함",
          imageUrl:
            "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
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
      <a id="create-kakao-link-btn">
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt="카카오링크 보내기 버튼"
        />
      </a>
    </KaKaoHeaderHoc>
  );
}
