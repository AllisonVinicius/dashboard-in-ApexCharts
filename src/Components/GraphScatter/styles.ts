import styled from "styled-components";

export const Container = styled.div`
  width: 635px;
  height: 345px;
  left: 685px;
  top: 228px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0 px 20px rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  justify-content: center;

  @media (max-width: 1024px) {
    display: flex;
    width: 90%;
    margin: 15px;
  }

  @media (max-width: 768px) {
    display: flex;
    margin: 10px;
    width: 85%;
  }

  @media (max-width: 375px) {
    display: flex;
    margin: 10px;
    width: 75%;
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
