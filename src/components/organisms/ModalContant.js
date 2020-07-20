import React, { useState } from "react";
import styled from "styled-components";
import { ButtonGreen } from "../atoms/Button";
import { colors } from "../../styles/Variables";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const Top = styled.h2``;
const Title = styled.div`
  margin-top: 70px;
`;
const Input = styled.input`
  border-radius: 6px;
  border: 1px solid ${colors.border};
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 10px;
`;
const Content = styled.div`
  margin-top: 40px;
`;
const Textarea = styled.textarea`
  border-radius: 6px;
  border: 1px solid ${colors.border};
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  height: 150px;
`;
const Buttons = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: flex-end;
`;
const Close = styled.a`
  min-width: 100px;
  text-align: center;
  color: rgb(3, 102, 214);
  cursor: pointer;
`;

const ModalContent = ({ closeModal, addList, removeList }) => {
  const [text, setText] = useState("");
  const [sentence, setSentence] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
  };
  const changeSentence = (e) => {
    setSentence(e.target.value);
  };
  const createNew = () => {
    if (!text) {
      return;
    }
    if (!sentence) {
      return;
    }
    addList({ title: text });
  };
  return (
    <Container>
      <Top>Issueを追加</Top>
      <Title>
        <label>タイトル</label>
        <Input
          type="input"
          placeholder="タイトルを入力してください"
          value={text}
          onChange={changeText}
        ></Input>
      </Title>
      <Content>
        <label>説明</label>
        <Textarea
          placeholder="説明を入力してください"
          value={sentence}
          onChange={changeSentence}
        ></Textarea>
      </Content>
      <Buttons>
        <ButtonGreen onClick={createNew}>作成</ButtonGreen>
        <Close onClick={closeModal}>閉じる</Close>
      </Buttons>
    </Container>
  );
};

export default ModalContent;
