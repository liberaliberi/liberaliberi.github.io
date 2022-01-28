import Link from "next/link";

import styles from "../../styles/button.module.scss";

interface LinkButtonProps {
  name: string;
  href: string;
  onClick?: () => void;
}

export const LinkButton = ({ href, name, onClick }: LinkButtonProps) => {
  return (
    <Link href={href}>
      <a onClick={onClick} className={styles.link}>
        {name}
      </a>
    </Link>
  );
};
