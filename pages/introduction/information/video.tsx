import styles from "../../../public/introduction.module.scss";

export default function Video() {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cBS7d1RY4vg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}
