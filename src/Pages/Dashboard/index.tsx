import React from "react";
import Content from "../../Components/Content";
import Header from "../../Components/Header";
//import Layout from "../../Components/Layout";
import { Container } from "./styles";

const Dashboard = () => (
  <Container>
    <Header title="Dashboard" subtitle="Desafio Técnico Frontend" />
    <Content>graficos aqui</Content>
  </Container>
);

export default Dashboard;
