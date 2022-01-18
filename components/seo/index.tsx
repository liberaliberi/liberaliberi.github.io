import React, { Component } from "react";
import Head from "next/head";

// import seo from "constants/seo";

// const {
//   DESCRIPTION,
//   AUTHOR,
//   GOOGLE_SITE_VERIFICATION,
//   NAVER_SITE_VERIFICATION,
// } = seo;

const APP_NAME = "liberaliberi";
const DESCRIPTION =
  "나는 어떤 가든성향일까? 가든성향테스트 시작하기. 리베라리베리가 제공하는 나의 가든성향테스트 알아보기";
const AUTHOR = "liberaliberi";

interface SEOHeadProps {
  pageName?: string;
  description?: string;
  image?: string;
  fullUrl?: string;
  children?: Array<Component>;
}

/**
 * 검색엔진 최적화를 위한 헤더
 * page 폴더에 있는 컴포넌트에 모두 추가해줘야 한다.
 *
 * * full url은 req 객체에서 가져오기 때문에 document.js에서 일괄적으로 추가하고 있다.F
 * @param {*} param0
 */
const SEOHead = ({
  pageName, // * 페이지 이름
  // title = APP_NAME // pageName이 없을 때 사용할 페이지 타이틀
  description = DESCRIPTION, // * 페이지 설명
  // image = seo.MAIN_IMAGE, // * 페이지 대표 이미지
  // fullUrl, // window.location.href
  children, // 별도로 추가 태그
}: SEOHeadProps) => {
  const pageTitle = pageName ? `${pageName} - ${APP_NAME}}` : APP_NAME;
  return (
    <Head>
      <title key="title">{pageTitle}</title>
      <meta key="meta-description" name="description" content={description} />
      <meta key="meta-author" name="author" content={AUTHOR} />
      <meta key="meta-title" name="title" content={pageTitle} />

      <meta key="itemprop-name" itemProp="name" content={pageTitle} />
      <meta
        key="itemprop-description"
        itemProp="description"
        content={description}
      />
      <meta key="itemprop-image" itemProp="image" content="" />

      {/* 쿼리스트링에 따라 다른 페이지가 표시되므로 현재 페이지의 full URL을 넣어준다 */}
      {/* {fullUrl && <link key="canonical" rel="canonical" href={fullUrl} />} */}

      {/* google search console */}
      <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_KEY}
      />
      {/* naver 웹마스터 도구 */}
      <meta
        name="naver-site-verification"
        content={process.env.NEXT_PUBLIC_NAVER_SEARCH_KEY}
      />

      {/* opengraph Meta Tags */}
      {/* {fullUrl && <meta key="og:url" property="og:url" content={fullUrl} />} */}
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={pageTitle} />
      {/* <meta key="og:image" property="og:image" content="" /> */}
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:site_name" property="og:site_name" content={APP_NAME} />
      <meta key="og:locale" property="og:locale" content="ko_KR" />

      {/* 페이지에서 사용할 헤더 추가 */}
      {children}
    </Head>
  );
};

export default SEOHead;
