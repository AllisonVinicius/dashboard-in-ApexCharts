import React from "react";
import { Container, Subtitle, TitleContainer } from "./styles";

interface IContentHeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: IContentHeaderProps) => (
  <Container>
    <TitleContainer>
      <h1>{title}</h1>
    </TitleContainer>
    <Subtitle>
      <h4>{subtitle}</h4>
    </Subtitle>
  </Container>
);

export default Header;
