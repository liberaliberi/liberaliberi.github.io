import Link from "next/link";

import styles from "../../styles/button.module.scss";

interface LinkButtonProps {
  name: string;
  href: string;
}

export const LinkButton = ({ href, name }: LinkButtonProps) => {
  return (
    <Link href={href}>
      <a className={styles.link}>{name}</a>
    </Link>
  );
};
