import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100% auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "MH MH"
    "CT CT";

  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;

    grid-template-areas:
      "MH"
      "CT";
  }
`;
