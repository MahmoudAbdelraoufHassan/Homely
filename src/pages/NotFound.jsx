import SectionHeader from "../ui/SectionHeader";
import { Section } from "../ui/Section";
import styled from "styled-components";

const NotFoundImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  & img {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
function NotFound() {
  return (
    <Section $withNavbarOffset>
      <SectionHeader
        label={"Error 404"}
        $align="center"
        title={"Lost? let’s help you find home."}
        desc={
          "Looks like you’ve hit a dead end — but don’t worry, we’ll help you get back on track."
        }
      />
      <NotFoundImageWrapper>
        <img src="./Error.png" alt="" srcset="" />
      </NotFoundImageWrapper>
    </Section>
  );
}

export default NotFound;
