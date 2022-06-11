import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/info.svg";

export const TitleGraph = styled.span`
  color: #000;
  display: flex;
  flex-direction: row;
  font-size: 15px;
  margin: 10px;
  @media (max-width: 420px) {
    font-size: 22px;
  }
`;

export const StyleIcon = styled(Icon)`
  height: 13px;
  width: 12px;
  fill: #000;
  @media (max-width: 768px) {
    height: 10px;
    width: 10px;
    align-items: center;
  }
`;
