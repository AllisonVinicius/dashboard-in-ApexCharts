import React, { ReactNode } from "react";
import Content from "../Content";
import MainHeader from "../MainHeader";
import { Grid } from "./styles";

interface IlayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: IlayoutProps) => (
  <Grid>
    <MainHeader />
    <Content>{children}</Content>
  </Grid>
);

export default Layout;
