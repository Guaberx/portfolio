import React, { ReactNode } from "react";
import styles from "./Button.module.css";

type HtmlButtonProps = React.HTMLAttributes<HTMLButtonElement>;

interface PropsButton extends HtmlButtonProps {
  readonly type?: "button" | "submit" | "reset";
  readonly ref?: React.RefObject<HTMLButtonElement>;
}

// Component needs to be reloaded if window resized
export const Button: React.FunctionComponent<PropsButton> = ({
  type,
  ref,
  ...props
}: PropsButton) => {
  return (
    <button
      style={props.style}
      className={`${styles.button} ${props.className}`}
      type={type || "button"}
      onClick={props.onClick}
      ref={ref}
      {...props}
    >
      {props.children}
    </button>
  );
};
