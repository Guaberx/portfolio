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
  const newStyle = contentMaxWidth
    ? { maxWidth: `${contentMaxWidth}px`, ...props.style }
    : props.style;
  return (
    <div
      className={`${styles.container} ${props.className}`}
      style={newStyle}
      {...props}
    >
      {props.children}
    </div>
  );
};
