import * as React from "react";

interface IProps {
  textValue: string;
  handleDeleteClick: (id: string) => void;
  id: string;
}

export function ListItemTemplate(props: IProps) {
  function deleteById() {
    props.handleDeleteClick(props.id);
  }
  const { textValue } = props;
  return (
    <li>
      {textValue}{" "}
      <button className="delete" onClick={deleteById}>
        {" "}
        Delete{" "}
      </button>
    </li>
  );
}
