import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 75%;
  min-height: 290px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    width: 400px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const Barras = styled.div`
  border: 10px;
`;

export const SofClose = styled.div`
  background-color: red;
  width: 200px;
`;
