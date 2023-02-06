import React from "react";
import styles from "./Container.module.css";

type HtmlDivProps = React.HTMLAttributes<HTMLDivElement>;
interface PropsContainer extends HtmlDivProps {
  readonly contentMaxWidth?: number;
}
export const ContainerMain: React.FunctionComponent<PropsContainer> = ({
  ...props
}: PropsContainer) => {
  return (
    <div
      className={`${styles.containerMain} ${props.className}`}
      style={props.style}
      {...props}
    >
    {/* <div className={`${styles.containerMain} ${props.className}`}> */}
      {props.children}
    </div>
  );
};
