import Script from "next/script";
import { ReactNode, useEffect, useState } from "react";

interface KaKaoHeaderHocProps {
  setKakao: (kakao: any) => void;
}

export default function KaKaoHeaderHoc({ setKakao }: KaKaoHeaderHocProps) {
  return (
    <>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={() => {
          const kakao = (window as any).Kakao;
          kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
          setKakao(kakao);
        }}
      />
    </>
  );
}
