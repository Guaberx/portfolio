import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useIsomorphicLayoutEffect from "../../Hooks/useIsomorphicLayoutEffect";
import styles from "./Label.module.css";

type HtmlDivnProps = React.HTMLAttributes<HTMLDivElement>;

// Component needs to be reloaded if window resized
export const Label: React.FunctionComponent<HtmlDivnProps> = ({
  children,
  className,
  style,
  ...props
}: HtmlDivnProps) => {
  return (
    <div className={`${styles.label} ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};
