import React from "react";
import styles from "./Button.module.css";

//TODO: All the component!
import Props from "../../Interfaces/Props.interface";

interface PropsButton extends Props {
  readonly type?: "button" | "submit" | "reset";
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
  readonly ref?: React.RefObject<HTMLButtonElement>;
}

// Component needs to be reloaded if window resized
export const Calendar: React.FunctionComponent<PropsButton> = ({
  children,
  className,
  style,
  type,
  ref,
  onClick,
}: PropsButton) => {
  return (
    <button
      style={style}
      className={`${styles.button} ${className}`}
      type={type || "button"}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
};
