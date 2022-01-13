import Script from "next/script";
import { ReactNode, useEffect } from "react";

interface FBHeaderHocProps {
  children: ReactNode;
}

export default function FBHeaderHoc({ children }: FBHeaderHocProps) {
  useEffect(() => {
    const fb = (window as any).FB;

    if (fb) {
      fb.init({
        appId: process.env.NEXT_PUBLIC_FB_APP_KEY,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v12.0",
      });
    }
  }, []);
  return (
    <>
      <Script
        async
        defer
        crossOrigin="anonymous"
        strategy="beforeInteractive"
        src="https://connect.facebook.net/en_US/sdk.js"
      ></Script>
      {children}
    </>
  );
}
