import styled from "styled-components";

export const Container = styled.div``;

export const Barras = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  width: 100%;
`;
