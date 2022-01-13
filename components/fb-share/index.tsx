import { useEffect } from "react";

import FBHeaderHoc from "./header";

// 후에 props로 받아야할 요소들
// interface kaKaoShareButtonProps {
//     title: string;
//     description: string
// }

export default function FBShareButton() {
  return (
    <FBHeaderHoc>
      <div
        className="fb-share-button"
        data-href="https://developers.facebook.com/docs/plugins/"
        data-layout="button"
        data-size="large"
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
          className="fb-xfbml-parse-ignore"
        >
          공유
        </a>
      </div>
    </FBHeaderHoc>
  );
}
