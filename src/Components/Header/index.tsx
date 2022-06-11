import React from "react";
import Button from "../ButtonFilter/index";
import { Container, Subtitle, TitleContainer } from "./styles";

interface IContentHeaderProps {
  title?: string;
  subtitle?: string;
  isActive?: boolean;
}

const Header = ({ title, subtitle, isActive }: IContentHeaderProps) => (
  <Container>
    <TitleContainer>{title}</TitleContainer>
    <Subtitle>
      {subtitle}
      {isActive ? <Button text="Filtrar" /> : ""}
    </Subtitle>
  </Container>
);

export default Header;
