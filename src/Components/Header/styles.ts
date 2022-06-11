import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const TitleContainer = styled.h3`
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
