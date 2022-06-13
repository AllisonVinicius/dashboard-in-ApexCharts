import styled from "styled-components";

export const Container = styled.div``;

export const Barras = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  line-height: normal;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
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
