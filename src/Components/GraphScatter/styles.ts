import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/info.svg";

export const Container = styled.div`
  width: 570px;
  height: 345px;
  left: 30px;
  top: 228px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;

  @media (max-width: 1024px) {
    display: flex;

    width: 600px;
    margin: 15px;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 600px;
    margin: 10px;
  }
  @media (max-width: 411px) {
    display: flex;
    width: 400px;
  }

  @media (max-width: 375px) {
    display: flex;
    width: 450x;
    margin: 10px;
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

export const StyleIcon = styled(Icon)`
  width: 3%;
  height: 3%;
  top: 40%;
  left: 8.5%;
  text-align: center;
  border: 2px;
  border-radius: 20px;
  z-index: 1;
`;
