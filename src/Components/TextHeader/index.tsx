import React from "react";
import { Container, StyleIcon, TitleGraph } from "./styles";

interface ITextGraphProps {
  title?: string;
}

const TextHeader = ({ title }: ITextGraphProps) => (
  <Container>
    <TitleGraph>{title}</TitleGraph>
    <StyleIcon />
  </Container>
);

export default TextHeader;
