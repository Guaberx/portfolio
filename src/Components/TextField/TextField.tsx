import React from "react";
import styles from "./TextField.module.css";

type HtmlDivProps = React.HTMLAttributes<HTMLDivElement>;
interface PropsTextField extends HtmlDivProps {
  readonly children: string;
}
// Component needs to be reloaded if window resized
export const TextField: React.FunctionComponent<PropsTextField> = ({
  style,
  className,
  children,
  ...props
}: PropsTextField) => {
  return (
    <div
      className={`${styles.textField} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
