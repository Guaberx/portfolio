import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useIsomorphicLayoutEffect from "../../Hooks/useIsomorphicLayoutEffect";
import styles from "./Background.module.css";

// TODO: Check all component and fix

import Props from "../../Interfaces/Props.interface";

// Component needs to be reloaded if window resized
export const Background: React.FunctionComponent<Props> = ({
  children,
  className,
  style,
}: Props) => {
  const selfRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ height: 0, width: 0 });

  let intervalAnimation: NodeJS.Timer | number | undefined = undefined;
  let ctx: CanvasRenderingContext2D | null | undefined = null;
  const [animationState, setAnimationState] = useState(false);
  const animationContext: React.MutableRefObject<{ [key: string]: any }> =
    useRef({});

  function onResize(event: UIEvent) {
    if (selfRef.current) {
      const newSize = {
        height: selfRef.current.clientHeight,
        width: selfRef.current.clientWidth,
      };
      setSize((prev) => newSize);
    }
  }

  function animationSetup() {
    animationContext.current.sqr = [0, 0, 50, 100];
    console.log("Animation Setup");
  }

  function animation() {
    if (!animationState) return;
    if (ctx) {
      ctx.fillStyle = "blue";
      ctx.clearRect(0, 0, size.width, size.height);
      ctx.fillRect(
        animationContext.current.sqr[0],
        animationContext.current.sqr[1],
        animationContext.current.sqr[2],
        animationContext.current.sqr[3]
      );
      animationContext.current.sqr[0] += 1;
      if (animationContext.current.sqr[0] > size.height) {
        animationContext.current.sqr[0] = 0;
      }
    }
  }

  useIsomorphicLayoutEffect(() => {
    console.log(styles);
    window.addEventListener("resize", onResize);
    if (selfRef.current) {
      const newSize = {
        height: selfRef.current.clientHeight,
        width: selfRef.current.clientWidth,
      };
      setSize((prev) => newSize);
      //offsetHeight//offsetWidth
      animationSetup();
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    ctx = canvasRef.current?.getContext("2d");
    intervalAnimation = setInterval(() => {
      animation();
    }, 20);

    return () => {
      clearInterval(intervalAnimation);
    };
  }, [size, animationState]);

  return (
    <div ref={selfRef} className={className} style={style}>
      <canvas
        className={styles.background}
        style={{ height: size.height, width: size.width }}
        ref={canvasRef}
      />
      <button
        onClick={() => {
          setAnimationState((prev) => !prev);
        }}
        style={{ position: "absolute", marginTop: "1em", marginLeft: "1em" }}
      >
        Toggle Animation
      </button>
      {children}
    </div>
  );
};
