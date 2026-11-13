import styled, { keyframes } from "styled-components";

const draw = keyframes`
  0%       { stroke-dashoffset: 1; opacity: 1; }
  60%, 88% { stroke-dashoffset: 0; opacity: 1; }
  100%     { stroke-dashoffset: 0; opacity: 0; }
`;

const Svg = styled.svg`
  display: block;
  width: 100px;
  height: 100px;
`;

const HousePath = styled.path`
  fill: none;
  stroke: var(--color-primary, #1fbf8f);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: ${draw} 2.8s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    stroke-dashoffset: 0;
  }
`;

export default function HouseLoader() {
  return (
    <Svg viewBox="0 0 100 100" role="status" aria-label="Loading">
      <HousePath pathLength={1} d="M50 14L14 46V86H86V46L50 14" />
    </Svg>
  );
}