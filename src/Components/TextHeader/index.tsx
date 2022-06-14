import React from "react";
import { Container, Space, StyleIcon, TitleGraph } from "./styles";

interface ITextGraphProps {
  title?: string;
}

const TextHeader = ({ title }: ITextGraphProps) => (
  <Container>
    <TitleGraph>{title}</TitleGraph>
    <Space>
      <StyleIcon />
    </Space>
  </Container>
);

export default TextHeader;
