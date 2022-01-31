import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9853400986139329"
            crossOrigin="anonymous"
          ></script>
          <script
            async
            type="text/javascript"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_KEY}`}
          />
          <script
            defer
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_KEY}', {
          page_path: window.location.pathname,
        });
      `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <ins
            className="kakao_ad_area"
            style={{ display: "none", marginTop: 30 }}
            data-ad-unit={process.env.NEXT_PUBLIC_ADD_FIT} //AdFit에서 발급 받은 광고단위코드 값
            data-ad-width="320"
            data-ad-height="50" 
            // data-ad-onfail="callBackFunc"
          ></ins>
          <script
            type="text/javascript"
            src="//t1.daumcdn.net/kas/static/ba.min.js"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
