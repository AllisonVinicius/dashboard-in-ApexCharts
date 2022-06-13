import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/info.svg";

export const TitleGraph = styled.span`
  width: 60px;

  color: #5d405c;
  font-size: 16px;
  padding: 10px;
  line-height: normal;
  font-family: "Montserrat";
  @media (max-width: 768px) {
    font-size: 15px;
    margin: 50px 0;
  }
`;

export const StyleIcon = styled(Icon)`
  width: 15px;
  height: 15px;
  left: 10.94%;
  right: 15%;
  top: 10.94%;
  bottom: 10.94%;
  align-items: center;

  color: #ffffff;

  @media (max-width: 768px) {
    height: 10px;
    width: 10px;
    align-items: center;
  }
`;
