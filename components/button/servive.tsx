import { event } from "../react-ga/handler";
import styles from "../../styles/introduction.module.scss";

interface LinkButtonProps {
  name: string;
  href: string;
}

export const ServiceButton = ({ href, name }: LinkButtonProps) => {
  const onClick = () => {
    event({ action: "signup" });
  };

  return (
    <a
      onClick={onClick}
      className={styles.serviceButton}
      href={href}
      target="_blank"
    >
      {name}
    </a>
  );
};
