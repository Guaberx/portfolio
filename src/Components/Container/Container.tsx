import React from "react";
import styles from "./Container.module.css";

type HtmlDivProps = React.HTMLAttributes<HTMLDivElement>;
interface PropsContainer extends HtmlDivProps {
  readonly contentMaxWidth?: number;
}
export const Container: React.FunctionComponent<PropsContainer> = ({
  contentMaxWidth,
  ...props
}: PropsContainer) => {
  return (
    <div
      className={`${styles.container} ${props.className ? props.className : ""}`}
      {...props}>
      {props.children}
    </div>
  );
};
