import * as React from "react";

interface IProps {
  clickHandler: () => void;
  changeHandler: () => void;
  value: string;
}

export function FormTemplate({ value, clickHandler, changeHandler }: IProps): JSX.Element {
  return (
    <div>
      <input value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>Add</button>
    </div>
  );
}