import { WarningOctagonIcon } from "@phosphor-icons/react";
import styled from "styled-components";

const ErrorContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: min(100% - 32px, 760px);
  margin: 24px auto;
  padding: 24px;
  border: 1px solid #f3d9d5;
  border-radius: 16px;
  background: #fff9f8;

  @media screen and (max-width: 520px) {
    align-items: flex-start;
    padding: 20px 16px;
  }
`;

const ErrorIcon = styled.div`
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #c94f43;
  background: #fbe9e6;
`;

const ErrorText = styled.div`
  min-width: 0;
`;

const ErrorTitle = styled.h2`
  margin-bottom: 4px;
  color: var(--color-black-100);
  font-size: var(--text-lg-size);
  font-weight: var(--font-weight-semibold);
  line-height: var(--text-lg-line-height);
`;

const ErrorMessage = styled.p`
  color: var(--color-black-50);
  font-size: var(--text-base-size);
  line-height: 1.5;
  overflow-wrap: anywhere;
`;

function SectionError({ errorMessage = "Please try again later." }) {
  return (
    <ErrorContent role="alert" aria-live="assertive">
      <ErrorIcon aria-hidden="true">
        <WarningOctagonIcon size={26} weight="duotone" />
      </ErrorIcon>
      <ErrorText>
        <ErrorTitle>We couldn’t load this section</ErrorTitle>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ErrorText>
    </ErrorContent>
  );
}

export default SectionError;
