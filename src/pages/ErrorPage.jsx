import {ArrowRightIcon, HouseSimpleIcon , WarningOctagonIcon } from "@phosphor-icons/react";
import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";
import { Section } from "../ui/Section";

const ErrorSection = styled(Section)`
  min-height: 75vh;
  display: grid;
  place-items: center;
  padding-inline: 24px;
`;

const ErrorContent = styled.div`
  width: min(100%, 620px);
  text-align: center;
`;

const ErrorIcon = styled.div`
  width: 88px;
  height: 88px;
  display: grid;
  place-items: center;
  margin: 0 auto 28px;
  border-radius: 50%;
  color: var(--color-primary);
  background: #e8f8f3;
`;

const ErrorCode = styled.p`
  margin-bottom: 12px;
  color: var(--color-primary);
  font-size: var(--text-sm-size);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const ErrorTitle = styled.h1`
  color: var(--color-black-100);
  font-size: clamp(32px, 6vw, 52px);
  line-height: 1.15;
  letter-spacing: -0.02em;
`;

const ErrorDescription = styled.p`
  max-width: 480px;
  margin: 16px auto 32px;
  color: var(--color-black-50);
  font-size: var(--text-md-size);
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const ActionLink = styled(Link)`
  min-height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 0 24px;
  border: 1px solid
    ${({ $primary }) =>
      $primary ? "var(--color-primary)" : "var(--color-black-10)"};
  border-radius: 30px;
  background: ${({ $primary }) =>
    $primary ? "var(--color-primary)" : "var(--color-white-100)"};
  color: ${({ $primary }) =>
    $primary ? "var(--color-white-100)" : "var(--color-black-100)"};
  font-weight: var(--font-weight-semibold);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ $primary }) => ($primary ? "#079c72" : "#f3f4f4")};
    border-color: ${({ $primary }) =>
      $primary ? "#079c72" : "var(--color-black-20)"};
  }

  &:focus-visible {
    outline: 3px solid #07be8a66;
    outline-offset: 3px;
  }
`;
function ErrorPage() {
    const error = useRouteError();
  return (
    <ErrorSection $withNavbarOffset>
      <ErrorContent>
        <ErrorIcon aria-hidden="true">
            <WarningOctagonIcon size={48} weight="duotone"/>
        </ErrorIcon>
        <ErrorCode>Something went wrong</ErrorCode>
        <ErrorTitle>{error.message || "We hit a small snag."}</ErrorTitle>
        <ErrorDescription>
          We couldn’t load this page right now. Please try again later, or
          continue exploring homes you might love.
        </ErrorDescription>
        <Actions>
          <ActionLink to="/" $primary>
            <HouseSimpleIcon size={20} weight="bold" />
            Back to home
          </ActionLink>
          <ActionLink to="/properties">
            Explore properties
            <ArrowRightIcon size={18} />
          </ActionLink>
        </Actions>
      </ErrorContent>
    </ErrorSection>
  );
}

export default ErrorPage;
