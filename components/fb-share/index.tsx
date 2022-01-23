import Image from "next/image";

import FBHeaderHoc from "./header";

// 후에 props로 받아야할 요소들
interface FBShareButtonProps {
  url: string;
}

export default function FBShareButton({ url }: FBShareButtonProps) {
  return (
    <FBHeaderHoc>
      <div
        className="fb-share-button"
        data-href={process.env.NEXT_PUBLIC_DOMAIN}
        data-layout="button"
      >
        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        >
          <Image width={46} height={46} src="/facebook.svg" loading="eager" />
        </a>
      </div>
    </FBHeaderHoc>
  );
}
