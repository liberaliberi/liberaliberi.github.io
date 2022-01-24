import { useEffect, useState } from "react";
import Image from "next/image";
import { basename } from "path";

import KaKaoHeaderHoc from "./header";
import KakaoShareButton from "./button";

const redirectUri = process.env.NEXT_PUBLIC_DOMAIN;

interface KaKaoShareButtonProps {
  url: string;
}

export default function KakaoShare({ url }: KaKaoShareButtonProps) {
  const [kakao, setKakao] = useState<any>();

  const callback = (kakaoObj: any) => {
    setKakao(kakaoObj);
  };

  return (
    <>
      <KaKaoHeaderHoc setKakao={callback} />
      {kakao?.Link !== undefined && <KakaoShareButton url={url} kakaoLink={kakao?.Link} />}
    </>
  );
}
