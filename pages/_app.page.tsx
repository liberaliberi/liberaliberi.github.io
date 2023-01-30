import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

import { pageview } from "../components/react-ga/handler";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const agent = navigator.userAgent.toLowerCase();

    if (
      (navigator.appName == "Netscape" && agent.indexOf("trident") != -1) ||
      agent.indexOf("msie") != -1
    ) {
      alert("인터넷 익스플로러는 지원하지 않습니다");
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {process.env.NODE_ENV === "production" && (
          <link rel="shortcut icon" href="/favicon.ico" />
        )}
      </Head>
      <main className="main-layout">
        <Component {...pageProps} />
        {/* <ins
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit={process.env.NEXT_PUBLIC_ADD_FIT} //AdFit에서 발급 받은 광고단위코드 값
          data-ad-width="320"
          data-ad-height="50"
          // data-ad-onfail="callBackFunc"
        ></ins> */}
      </main>
    </>
  );
}

export default MyApp;
