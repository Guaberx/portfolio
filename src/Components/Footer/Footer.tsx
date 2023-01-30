import React from "react";
import styles from "./Footer.module.css";

type HtmlDivProps = React.HTMLAttributes<HTMLDivElement>;

// Component needs to be reloaded if window resized
export const Footer: React.FunctionComponent<HtmlDivProps> = ({
  style,
  className,
  children,
  ...props
}: HtmlDivProps) => {
  return (
    <div className={`${styles.Navbar} ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};
