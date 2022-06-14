import React from "react";
import { TitleGraph } from "./styles";

interface ITextGraphProps {
  title?: string;
}

const TextHeader = ({ title }: ITextGraphProps) => (
  <TitleGraph>{title}</TitleGraph>
);

export default TextHeader;
