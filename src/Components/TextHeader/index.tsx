import React from "react";
import { StyleIcon, TitleGraph } from "./styles";

interface ITextGraphProps {
  title?: string;
}

const TextHeader = ({ title }: ITextGraphProps) => (
  <TitleGraph>
    {title}
    <StyleIcon />
  </TitleGraph>
);

export default TextHeader;
