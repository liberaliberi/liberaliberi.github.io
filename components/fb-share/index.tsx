import Image from "next/image";

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
        data-href="https://liberaliberi.github.io"
        data-layout="button"
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https://liberaliberi.github.io"
        >
          <Image width={46} height={46} src="/facebook.svg" loading="eager" />
        </a>
      </div>
    </FBHeaderHoc>
  );
}
