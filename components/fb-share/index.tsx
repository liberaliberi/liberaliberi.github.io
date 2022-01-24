import Image from "next/image";

interface FBShareButtonProps {
  url: string;
}

export default function FBShareButton({ url }: FBShareButtonProps) {
  return (
      <div
        className="fb-share-button"
        data-href={url}
        data-layout="button"
      >
        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(url)}`}
        >
          <Image alt="facebook share" width={46} height={46} src="/facebook.svg" loading="eager" />
        </a>
      </div>
  );
}
