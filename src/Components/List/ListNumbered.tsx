import React from "react";
import styles from "./List.module.css";

type HtmlDivProps = React.HTMLAttributes<HTMLOListElement>;

interface PropsListNumbered extends HtmlDivProps {
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | readonly React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
      >[];
  // readonly type?: "button" | "submit" | "reset";
  // readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
  // readonly ref?: React.RefObject<HTMLButtonElement>;
}

// Component needs to be reloaded if window resized
export const ListNumbered: React.FunctionComponent<PropsListNumbered> = ({
  children,
  className,
  style,
  ...props
}: PropsListNumbered) => {
  return (
    <ol
      style={style}
      className={`${styles["custom-counter"]} ${className}`}
      {...props}
    >
      {React.Children.map(children, (child: React.ReactElement<any>) => {
        return <li>{child}</li>;
      })}
    </ol>
  );
};
