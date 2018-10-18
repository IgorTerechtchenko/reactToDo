import * as React from "react";

interface IProps {
  clickHandler: () => void;
  changeHandler: () => string;
  value: string;
}

export function FormTemplate(props: IProps): JSX.Element {
  const { value, clickHandler, changeHandler } = props;
  return (
    <div>
      <input value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>Add</button>
    </div>
  );
}