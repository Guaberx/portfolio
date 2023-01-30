import React from "react";
import styles from "./TextField.module.css";

import { Title } from "./Title";
import { TextField } from "./TextField";

type HtmlDivnProps = React.HTMLAttributes<HTMLDivElement>;

interface PropsTextTitleField extends HtmlDivnProps {
  readonly children: [string, string];
}

// Component needs to be reloaded if window resized
export const TextTitleField: React.FunctionComponent<PropsTextTitleField> = ({
  style,
  className,
  children,
  ...props
}: PropsTextTitleField) => {
  return (
    <div
      className={`${styles.textTitleField} ${className}`}
      style={style}
      {...props}
    >
      <Title>{children[0]}</Title>
      <TextField>{children[1]}</TextField>
    </div>
  );
};
