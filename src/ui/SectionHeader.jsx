import { HouseSimpleIcon } from "@phosphor-icons/react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  color: ${(prop) =>
    prop.$theme === "light"
      ? `var(--color-white-100)`
      : `var(--color-black-100)`};
  flex-direction: column;
  align-items: ${({ $align }) => $align};
  text-align: ${({ $align }) => $align};
`;
const SectionLabel = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 12px;
`;
const SectionTitle = styled.h2`
  font-size: clamp(var(--heading-3-size), 5vw, var(--heading-2-size));
  line-height: var(--heading-2-line-height);
  letter-spacing: var(--heading-2-letter-spacing);
  font-weight: var(--heading-2-weight);
  @media screen and (max-width: 768px) {
    font-weight: 500;
  }
`;
const SectionDesc = styled.p`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: var(--color-black-50);
  font-size: var(--text-md-size);
  line-height: var(--text-md-line-height);
  letter-spacing: var(--text-md-letter-spacing);
`;

function SectionHeader({
  label,
  title,
  desc,
  className,
  theme,
  $align = "start",
  children,
}) {
  return (
    <>
    <Header className={className} $theme={theme} $align={$align}>
      <SectionLabel>
        <HouseSimpleIcon size={20} weight="fill" color="#07be8a" />
        <span>{label}</span>
      </SectionLabel>
      <SectionTitle>{title}</SectionTitle>
      <SectionDesc>{desc}</SectionDesc>
       {children}
    </Header>
    </>
  );
}

export default SectionHeader;
