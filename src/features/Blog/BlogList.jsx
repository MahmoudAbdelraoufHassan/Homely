import styled from "styled-components";
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 20px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 32px;
  }
`;
function BlogList({children}) {
  return (
    <List>
     {children}
    </List>
  );
}

export default BlogList;
