import React from "react";
import Content from "../../Components/Content";
import GraphBarras from "../../Components/GraphBarras";
import GraphScatter from "../../Components/GraphScatter";
import Header from "../../Components/Header";
import Layout from "../../Components/Layout";
import { Col, Row } from "./styles";

const Dashboard = () => (
  <Layout>
    <Header
      title="Dashboard"
      subtitle="Desafio Técnico Frontend"
      isActive={true}
    />
    <Content>
      <Row>
        <Col>
          <GraphBarras />
        </Col>
        <Col>
          <GraphScatter />
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default Dashboard;
