import React, { RefObject, useState } from "react";
import styles from "./Card.module.css";

type HtmlDivnProps = React.HTMLAttributes<HTMLDivElement>;
interface PropsCard extends HtmlDivnProps {
  readonly src?: string;
  readonly alt?: string;
  ref?: RefObject<HTMLDivElement>;
}

// Component needs to be reloaded if window resized
export const Card: React.FunctionComponent<PropsCard> = ({
  src,
  alt,
  children,
  ref,
  ...props
}: PropsCard) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const loadState = () => imageIsLoaded;
  return (
    <div
      className={`${styles.Card} ${props.className}`}
      style={props.style}
      ref={ref}
      {...props}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%" }}
          onLoad={(_) => {
            setImageIsLoaded(true);
          }}
        />
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
