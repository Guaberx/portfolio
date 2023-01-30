import React, { ReactNode, useEffect, useState } from "react";
import styles from "./Container.module.css";


type HtmlDivProps = React.HTMLAttributes<HTMLDivElement>;
interface PropsContainerNavbarContentFooter extends HtmlDivProps {
  columns: number;
  columnMinWidth?: number;
}

// Component needs to be reloaded if window resized
export const ContainerColumns: React.FunctionComponent<PropsContainerNavbarContentFooter> = ({
  columns,
  /** Min width of each column in px */
  columnMinWidth = 100,
  ...props
}: PropsContainerNavbarContentFooter) => {
  //TODO: Make it possible to accept other sizing metrics as: rem, em, %, ...
  const [ColumnsStyleDefinition, setColumnsStyleDefinition] = useState({
    /**
     * User input values.
     */
    "--grid-column-count": columns,
    "--grid-item--min-width": `${columnMinWidth}px`,
  });

  const [
    currentMediaQuery,
    setCurrentMediaQuery,
  ] = useState<MediaQueryList | null>(null);

  const handleMediaChange = () => {
    const mq = window.matchMedia(`(max-width: ${columnMinWidth}px)`);
    setCurrentMediaQuery(mq);
  };

  useEffect(() => {
    handleMediaChange();
    window.addEventListener("resize", handleMediaChange);
    return () => {
      window.removeEventListener("resize", handleMediaChange);
    };
  }, []);

  return (
    <div
      className={`${styles.containerColumns} ${props.className} ${
        currentMediaQuery && currentMediaQuery.matches ? styles.smallScreen : ""
      }`}
      style={{ ...ColumnsStyleDefinition, ...props.style }}
      {...props}
    >
      {props.children}
    </div>
  );
};
