import { ButtonHTMLAttributes, Children, ReactNode } from "react";

import styles from "../../styles/button.module.scss";

interface ButtonProps {
  children: ReactNode;
}

export const ChoiceButton = ({
  children,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.choice} {...props}>
      {children}
    </button>
  );
};
