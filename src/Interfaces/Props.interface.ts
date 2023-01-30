import { ReactNode } from "react";

// TODO: This is deprecated, because the app uses now HTML.*Element type for props

export default interface Props {
  readonly children?: ReactNode[] | ReactNode | string;
  readonly className?: string;
  readonly style?: React.CSSProperties;
  // readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
  // readonly ref?: React.RefObject<T>;
}

/*

interface IntrinsicElements {
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}




interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  callback?: Function
}

export class Wrapper extends React.Component<WrapperProps>{
  render() {
    const { callback, children, ...rest } = this.props;
    return <div {...rest}>
      {children}
    </div>;
  }
}

export const Test = () => {
  return <Wrapper className="test">Hi there</Wrapper> // works now
}
*/
