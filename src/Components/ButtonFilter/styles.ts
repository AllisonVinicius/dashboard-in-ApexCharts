import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/filter.svg";

export const Container = styled.div``;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  padding: 2px;
  top: 135px;
  left: 1316px;
  border-radius: 10px;
  font-size: 15px;
  color: #fff;
  background-color: #5d405c;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 75px;
  }
`;

export const StyleIcon = styled(Icon)`
  height: 13px;
  width: 12px;
  fill: #fff;
  @media (max-width: 768px) {
    height: 10px;
    width: 10px;
  }
`;
