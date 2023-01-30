import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

// Component needs to be reloaded if window resized
enum NavbarState {
  closed,
  expanded,
  hovered,
}

type HtmlDivProps = React.HTMLAttributes<HTMLDivElement>;

interface PropsNavbar extends HtmlDivProps {}
export const Navbar: React.FunctionComponent<PropsNavbar> = ({
  style,
  className,
  children,
  ...props
}: PropsNavbar) => {
  const [state, setState] = useState<NavbarState | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   setScrollPosition(window.pageYOffset);
  //   if (window.pageYOffset > 0) {
  //     setState((_) => {
  //       return NavbarState.closed;
  //     });
  //   }else{
  //     setState((_) => {
  //       return NavbarState.expanded;
  //     });
  //   }
  // };

  return (
    <div
      className={`${styles.Navbar} ${state === NavbarState.closed &&
        styles.small} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
