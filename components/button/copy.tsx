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
    <img
      style={{ cursor: "pointer" }}
      width={46}
      height={46}
      role="button"
      onClick={copyUrl}
      src="/link.svg"
      alt="link"
    />
  );
};
