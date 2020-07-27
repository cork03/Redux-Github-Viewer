import React from "react";

const List = ({ list, onClick, check, onCheck }) => {
  const { title, status, creator } = list;
  const _onClick = (list) => {
    onClick && onClick(list);
  };
  const _onCheck = (e) => {
    e.stopPropagation();
    onCheck && onCheck(list.id);
  };
  return (
    <tr onClick={_onClick}>
      <td>
        <input checked={check} onClick={_onCheck} type="checkbox"></input>
      </td>
      <td>{title}</td>
      <td>{status}</td>
      <td>{creator}</td>
      <td>07-20-2020</td>
      <td>07-20-2020</td>
    </tr>
  );
};

export default List;
