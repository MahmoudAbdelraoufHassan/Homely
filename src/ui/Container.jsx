import { styled, css } from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin-inline: auto;
  ${(prop) =>
    prop.$type === "flex"
      ? css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `
      : ""}

  @media screen and (max-width : 1500px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media screen and (max-width: 768px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`;
