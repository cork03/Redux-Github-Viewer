import React, { useState } from "react";
import styled from "styled-components";
import { ButtonGreen, ButtonRed } from "../atoms/Button";
import SerchText from "../atoms/SerchText";
import ModalContant from "../organisms/ModalContant";
import { colors } from "../../styles/Variables";
import Modal from "react-modal";

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
  }
`;

const Issue = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <Container>
      <SerchTop>
        <Title>Issue</Title>
        <SerchText />
        <Buttons>
          <ButtonGreen onClick={() => setOpen(true)}>New</ButtonGreen>
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
            <tr>
              <th>データがありません</th>
            </tr>
          </tbody>
        </Table>
      </Board>
      <Modal isOpen={open} style={customStyles}>
        <ModalContant closeModal={closeModal}></ModalContant>
      </Modal>
    </Container>
  );
};

export default Issue;
