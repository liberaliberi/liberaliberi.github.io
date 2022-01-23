import Image from "next/image";

export const CopyButton = () => {
  const copyUrl = () => {
    const copiedUrl = "https://liberaliberi.github.io";
    navigator.clipboard
      .writeText(copiedUrl)
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
