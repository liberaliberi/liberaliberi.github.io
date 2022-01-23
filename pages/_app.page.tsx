import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import { pageview } from "../components/react-ga/handler";
import { useEffect } from "react";

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
      </Head>
      <main className="main-layout">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
