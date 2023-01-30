import React, { ChangeEvent, useState } from "react";
import useIsomorphicLayoutEffect from "../../Hooks/useIsomorphicLayoutEffect";
import styles from "./Form.module.css";

import { TextField } from "../TextField/TextField";
import { Title } from "../TextField/Title";

type HtmlFormProps = React.HTMLAttributes<HTMLFormElement>;

interface PropsForm extends HtmlFormProps {
  title?: string;
  description?: string;
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | readonly React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
      >[];
  onSubmit: ({}) => void;
  dispatchEvent?: (event: any) => void;
}
// Component needs to be reloaded if window resized
export const Form: React.FunctionComponent<PropsForm> = ({
  children,
  title,
  description,
  dispatchEvent,
  ...props
}: PropsForm) => {
  useIsomorphicLayoutEffect(() => {}, []);
  const [values, setValues] = useState({});

  const handleChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.onSubmit(values);
    if (dispatchEvent) {
      dispatchEvent(values);
    }
  };
  return (
    <form
      {...props}
      className={`${styles.form} ${props.className}`}
      style={props.style}
      onSubmit={handleSubmit}
    >
      {title && <Title>{title}</Title>}
      {description && (
        <TextField style={{ textAlign: "center" }}>{description}</TextField>
      )}
      {React.Children.map(children, (child: React.ReactElement<any>) => {
        return React.cloneElement(child, {
          onChange: handleChange,
          key: child.props.name,
        });
      })}
      <button className={`${styles.formButton}`} type="submit">
        Submit
      </button>
    </form>
  );
};
