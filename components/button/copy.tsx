import Image from "next/image";

export const CopyButton = ({ url }: { url: string }) => {
  const copyUrl = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert(`클립보드에 복사했습니다.`);
      })
      .catch(() => {
        alert(`클립보드 복사에 실패했습니다.`);
      });
  };

  return (
    <button
      style={{ cursor: "pointer", backgroundColor: "transparent", border: 0, padding: 0 }}
      onClick={copyUrl}
      className=".copyLink"
    >
      <Image
        width={46}
        height={46}
        src="/link.svg"
        alt="copy link"
      />
    </button>
  );
};
