import React from "react";
import styles from "./TextField.module.css";

type HtmlDivnProps = React.HTMLAttributes<HTMLHeadElement>;

interface PropsTitle extends HtmlDivnProps {
  readonly children: string;
}

// Component needs to be reloaded if window resized
export const Title: React.FunctionComponent<PropsTitle> = ({
  style,
  className,
  children,
  ...props
}: PropsTitle) => {
  return (
    <h1 className={`${styles.title} ${className}`} style={style} {...props}>
      {children}
    </h1>
  );
};
