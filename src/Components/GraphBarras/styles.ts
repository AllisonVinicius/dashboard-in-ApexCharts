import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0 px 20px rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  justify-content: space-around;

  @media (max-width: 1280px) {
    display: flex;
    width: 600px;
    margin: 15px;
  }

  @media (max-width: 1024px) {
    display: flex;
    width: 800px;
    margin: 15px;
  }

  @media (max-width: 411px) {
    display: flex;
    width: 75%;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 650px;
    margin: 10px;
  }

  @media (max-width: 375px) {
    display: flex;
    margin: 10px;
    width: 75%;
  }
`;
export const Header = styled.header`
  display: flex;

  background-color: #000;
  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Text = styled.h2`
  width: 15px;
  color: #5d405c;
  font-size: 16px;
  line-height: normal;
  font-family: "Montserrat";
  @media (max-width: 768px) {
    font-size: 15px;
    margin: 50px 0;
  }
`;
