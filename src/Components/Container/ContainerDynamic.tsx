import React, { ReactNode } from "react";
import styles from "./Container.module.css";

type HtmlDivProps = React.HTMLAttributes<HTMLDivElement>;

export const ContainerDynamic: React.FunctionComponent<HtmlDivProps> = ({
  style,
  className,
  children,
  ...props
}: HtmlDivProps) => {
  return (
    <div
      className={`${styles.containerDynamic} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
