import React, { ReactNode } from "react";
import styles from "./Container.module.css";

type HtmlDivProps = React.HTMLAttributes<HTMLDivElement>;
interface PropsContainerNavbarContentFooter extends HtmlDivProps {
  readonly src?: string;
  readonly alt?: string;
  readonly children: [navbar:ReactNode, content:ReactNode, footer:ReactNode]
}

// Component needs to be reloaded if window resized
export const ContainerNavbarContentFooter: React.FunctionComponent<PropsContainerNavbarContentFooter> = ({
  style,
  className,
  children,
  ...props
}: PropsContainerNavbarContentFooter) => {
  return (
    <div className={`${styles.navbarContentFooter} ${className}`} style={style} {...props}>
      {children}
    </div>
  )
};
