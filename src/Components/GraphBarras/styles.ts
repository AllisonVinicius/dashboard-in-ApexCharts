import styled from "styled-components";

export const Container = styled.div`
  min-height: 290px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  box-shadow: 0px 0 px 20px rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    width: 400px;
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
