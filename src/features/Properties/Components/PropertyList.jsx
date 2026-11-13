import styled from "styled-components";

const List = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 2vw, 40px);
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

function PropertyList({ children }) {
  return (
    <List>
      {children}
    </List>
  );
}

export default PropertyList;
