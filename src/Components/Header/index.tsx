import React from "react";
import { Container, Subtitle, TitleContainer } from "./styles";

interface IContentHeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<IContentHeaderProps> = ({ title, subtitle }) => (
  <Container>
    <TitleContainer>
      <h1>{title}</h1>
    </TitleContainer>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default Header;
