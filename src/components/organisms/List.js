import React from "react";

const List = ({ list, onClick }) => {
  const { title, status, creator } = list;
  return (
    <tr onClick={onClick}>
      <td>
        <input type="checkbox"></input>
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
