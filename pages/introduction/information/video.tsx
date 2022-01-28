export default function Video() {
  return (
    <>
      <video
        controls
        autoPlay
        muted
        playsInline
        loop
      >
        <source src="/introduction.webm" type="video/webm" />
        <source src="/introduction.mp4" type="video/mp4" />
        <div>비디오를 지원하지 않습니다.</div>
      </video>
    </>
  );
}