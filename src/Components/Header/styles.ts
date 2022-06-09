import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 25px;

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

      &::after {
        content: "";
        display: block;
        width: 55px;
        border-bottom: 5px solid #000;
      }
    }
  }
`;

export const Subtitle = styled.span`
  span > {
    font-size: 20px;
    display: flex;
    justify-content: start;
  }
`;

export const Controllers = styled.div`
  display: flex;

  @media (max-width: 320px) {
    width: 100%;

    justify-content: space-around;

    margin-top: 20px;
  }
`;
