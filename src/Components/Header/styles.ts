import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
  }
  @media (max-width: 360px) {
    flex-direction: column;
    width: 60%;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    width: 70%;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    width: 50%;
  }
`;

export const TitleContainer = styled.h2`
  color: #5d405c;
  display: flex;
  flex-direction: column;

  @media (max-width: 420px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.span`
  color: #828282;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;
