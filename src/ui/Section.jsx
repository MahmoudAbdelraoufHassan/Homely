import styled from "styled-components";

export const Section = styled.section`
  padding: ${({ $withNavbarOffset }) =>
    $withNavbarOffset ? "180px 0 112px" : "112px 0"};
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: ${({ $withNavbarOffset }) =>
      $withNavbarOffset ? "116px 0 48px" : "48px 0"};
  }
`;
