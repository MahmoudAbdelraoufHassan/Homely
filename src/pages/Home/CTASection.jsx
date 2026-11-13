import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import styled, { keyframes } from "styled-components";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
const CTAContainer = styled(Container)`
  border-radius: 16px;
  overflow: hidden;
`;
const CTAImage = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 600px;
  display: flex;
  background: url("/banner.webp");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 992px) {
    background-position: center;
  }
  @media screen and (max-width: 570px) {
    background-position: -750px;
  }
`;

const CTAOverlay = styled.div`
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.2);
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;

  height: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;
const CTATitle = styled.h2`
  color: var(--color-white-100);
  font-size: clamp(var(--heading-3-size), 5vw, var(--heading-2-size));
  line-height: var(--heading-2-line-height);
  max-width: 950px;
  letter-spacing: var(--heading-2-letter-spacing);
  font-weight: var(--text-base-weight);
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    line-height: var(--heading-3-line-height);
    letter-spacing: var(--heading-3-letter-spacing);
  }
`;
const CTABottomBar = styled.div`
  width: 100%;
  background-color: var(--color-primary);
  height: 60px;
  overflow: hidden;
  position: relative;
`;

const move = keyframes`
  from {
    transform: translateX(-100%);
  }
  
  to {
    transform: translateX(80%);
  }
`;

const CTAItem = styled.p`
  color: var(--color-white-100);
  font-size: var(--text-sm-size);
  line-height: var(--text-sm-line-height);
  letter-spacing: var(--text-sm-letter-spacing);
  text-transform: uppercase;
  white-space: nowrap;
`;
const Divider = styled.div`
  width: 72px;
  background-color: var(--color-white-100);
  height: 1px;
  flex-shrink: 0;
`;
const CTATopWrapper = styled.div`
  position: relative;
  padding: 112px 0;
  overflow: hidden;
`;
const CTABottomWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  animation: ${move} 20s linear infinite;
  will-change: transform;
  width: max-content;
  gap: 48px;
  &:hover {
    animation-play-state: paused;
  }
`;
const CTABottomContent = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
`;
function CTASection() {
  const navigate = useNavigate();
  return (
    <Section>
      <CTAContainer>
        <CTATopWrapper>
          <CTAImage></CTAImage>

          <CTAOverlay />
          <CTAContent>
            <CTATitle>
              Enter a realm where exquisite design and timeless luxury come
              together.
            </CTATitle>

            <Button variant="primary-light" onClick={()=> navigate("/contact")}>Get in touch</Button>
          </CTAContent>
        </CTATopWrapper>
        <CTABottomBar>
          <CTABottomWrapper>
            <CTABottomContent>
              <CTAItem>
                Browse thousands of listings in prime locations at great prices!
              </CTAItem>

              <Divider />

              <CTAItem>
                Get a free property valuation—sell your home with confidence!
              </CTAItem>
            </CTABottomContent>

            <CTABottomContent aria-hidden="true">
              <Divider />

              <CTAItem>
                Browse thousands of listings in prime locations at great prices!
              </CTAItem>
              <Divider />
              <CTAItem>
                Get a free property valuation—sell your home with confidence!
              </CTAItem>
            </CTABottomContent>
          </CTABottomWrapper>
        </CTABottomBar>
      </CTAContainer>
    </Section>
  );
}

export default CTASection;
