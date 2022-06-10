import React from "react";
import Button from "../ButtonFilter/index";
import { Container, Subtitle, TitleContainer } from "./styles";

interface IContentHeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: IContentHeaderProps) => (
  <Container>
    <TitleContainer>{title}</TitleContainer>
    <Subtitle>
      {subtitle}
      <Button text="Filtrar" />
    </Subtitle>
  </Container>
);

export default Header;
