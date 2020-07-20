import React from "react";

const List = ({ list }) => {
  const { title, status, creater } = list;
  return (
    <tr>
      <td>
        <input type="checkbox"></input>
      </td>
      <td>{title}</td>
      <td>{status}</td>
      <td>{creater}</td>
      <td>07-20-2020</td>
      <td>07-20-2020</td>
    </tr>
  );
};

export default List;
