export default function Video() {
  return (
    <>
      <video preload="metadata" controls={true} autoPlay muted playsInline loop>
        <source src="introduce.webm" type="video/webm" />
        <source src="introduce.mp4" type="video/mp4" />
        비디오를 지원하지 않습니다.
      </video>
    </>
  );
}
