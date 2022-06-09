import React, { ReactNode } from "react";
import { Container } from "./styles";
interface IContentProps {
  children: ReactNode;
}
const Content = ({ children }: IContentProps) => (
  <Container>{children}</Container>
);
export default Content;
