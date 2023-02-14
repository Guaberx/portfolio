import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Container.module.css";

interface HtmlDivProps extends React.HTMLAttributes<HTMLDivElement> {
  sameWidth?: boolean;
}

export const ContainerDynamic: React.FunctionComponent<HtmlDivProps> = ({
  style,
  className,
  children,
  sameWidth,
  ...props
}: HtmlDivProps) => {
  // const childrenRefs: Array<React.MutableRefObject<null>> = [];
  // const selfRef = useRef(null);
  // const [childrenMaxWidth, setChildrenMaxWidth] = useState(0);
  // useEffect(() => {
  //   if (selfRef.current) {
  //     const chs: HTMLCollection = selfRef.current.children;
  //     let tmpMaxWidth = 0;
  //     for (let i = 0; i < chs.length; i++) {
  //       if (chs[i].offsetWidth > tmpMaxWidth) {
  //         tmpMaxWidth = chs[i].offsetWidth;
  //       }
  //     }
  //     setChildrenMaxWidth(_ => tmpMaxWidth);
  //   }
  //   return () => { }
  // }, []);
  return (
    <div
      className={`${styles.containerDynamic} ${className}`}
      style={style}
      // ref={selfRef}
      {...props}
    >
      {children}
    </div>
  );
};
