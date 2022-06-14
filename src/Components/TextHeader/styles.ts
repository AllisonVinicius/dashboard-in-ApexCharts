import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/info.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleGraph = styled.h2`
  width: 15px;
  color: #5d405c;
  font-size: 16px;
  padding: 5px;
  line-height: normal;
  font-family: "Montserrat";
  font-style: normal;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    font-size: 15px;
    margin: 50px 0;
  }
`;

export const StyleIcon = styled(Icon)`
  display: flex;
  width: 120px;
  height: 16px;
  margin: 7px;
  align-items: center;
`;
