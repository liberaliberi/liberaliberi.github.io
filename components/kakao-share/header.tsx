import Script from "next/script";
import { ReactNode, useEffect } from "react";

interface KaKaoHeaderHocProps {
  children: ReactNode;
}

export default function KaKaoHeaderHoc({ children }: KaKaoHeaderHocProps) {
  useEffect(() => {
    const kakao = (window as any).Kakao;

    if (kakao && !kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
    }
  }, []);
  return (
    <>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
