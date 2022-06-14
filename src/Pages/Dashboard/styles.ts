import styled from "styled-components";

export const Container = styled.div``;

export const Barras = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  line-height: 10px;

  @media (max-width: 1024px) {
    display: flex;

    flex-direction: column;
  }
`;
