import React, { useState } from "react";
import styled from "styled-components";
import { ButtonGreen, ButtonRed } from "../atoms/Button";
import SerchText from "../atoms/SerchText";
import ModalContent from "../organisms/ModalContent";
import EditContent from "../organisms/EditContent";
import { colors } from "../../styles/Variables";
import Modal from "react-modal";
import List from "../organisms/List";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    width: "60%",
    margin: "auto",
  },
};

const Container = styled.div`
  padding: 32px;
`;

const SerchTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
`;
const Title = styled.h2``;

const Board = styled.div``;
const Table = styled.table`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  width: 100%;
  text-align: left;
  th,
  td {
    border-bottom: 1px solid ${colors.border};
    padding: 10px 5px;
    cursor: pointer;
  }
`;

const Issue = ({ data, removeList, addList }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const closeModal = () => setOpen(false);
  const lists = Object.values(data);
  const openNew = () => {
    if (!edit) {
      setOpen(true);
    } else {
      setEdit(false);
      setOpen(true);
    }
  };
  const openEdit = () => {
    if (!edit) {
      setEdit(true);
      setOpen(true);
    } else {
      setOpen(true);
    }
  };
  return (
    <Container>
      <SerchTop>
        <Title>Issue</Title>
        <SerchText />
        <Buttons>
          <ButtonGreen onClick={openNew}>New</ButtonGreen>
          <ButtonRed>Dlete</ButtonRed>
        </Buttons>
      </SerchTop>
      <Board>
        <Table>
          <thead>
            <tr>
              <th>
                <input type="checkbox"></input>
              </th>
              <th></th>
              <th>ステータス</th>
              <th>作成者</th>
              <th>作成日付</th>
              <th>更新日付</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list) => {
              return <List key={list.id} list={list} onClick={openEdit} />;
            })}
          </tbody>
        </Table>
      </Board>
      <Modal isOpen={open} style={customStyles}>
        {edit ? (
          <EditContent closeModal={closeModal} />
        ) : (
          <ModalContent
            closeModal={closeModal}
            addList={addList}
            removeList={removeList}
          />
        )}
      </Modal>
    </Container>
  );
};

export default Issue;
