import React from "react";
import { Container, StyleIcon, TitleGraph } from "./styles";

interface ITextGraphProps {
  title?: string;
}

const TextHeader = ({ title }: ITextGraphProps) => (
  <Container>
    <TitleGraph>
      {title}
      <StyleIcon />
    </TitleGraph>
  </Container>
);

export default TextHeader;
