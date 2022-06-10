import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  min-height: 260px;

  margin: 10px 0;

  background-color: #fff;
  border-radius: 10px;

  display: flex;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;
  }
`;
export const Header = styled.header`
  display: flex;

  background-color: #000;
  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
