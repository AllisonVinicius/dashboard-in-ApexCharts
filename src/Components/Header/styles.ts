import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  > h1 {
    color: #5d405c;

    &::after {
      content: "";
      display: block;
      width: 55px;
    }
  }

  @media (max-width: 420px) {
    > h1 {
      font-size: 22px;
    }
  }
`;

export const Subtitle = styled.div`
  > h4 {
    color: #828282;
    font-size: 14px;
    display: flex;
    justify-content: start;
  }
`;
