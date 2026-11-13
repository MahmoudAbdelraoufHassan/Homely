import styled from "styled-components";
import { Container } from "./Container";
import Button from "./Button";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const FooterWrapper = styled.footer`
  background-color: var(--color-black-100);
`;

const Wrapper = styled.div`
  padding: 100px 0;
  @media screen and (max-width: 1200px) {
    padding: 48px 0;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: start;
  padding-bottom: 56px;
  border-bottom: 1px solid var(--color-white-10);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    padding-bottom: 24px;
    align-items: start;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    flex-direction: column;
    gap: 24px;
    padding-bottom: 24px;
    align-items: center;
  }
`;

const NewsletterText = styled.p`
  color: var(--color-white-100);
  font-size: var(--text-md-size);
  font-weight: var(--text-md-weight);
  letter-spacing: var(--text-md-letter-spacing);
  line-height: var(--text-md-line-height);
  max-width: 300px;
`;
const SubscribeForm = styled.form`
  display: flex;
  gap: 8px;
  margin-left: 56px;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    margin: 0;
  }
`;

const EmailInput = styled.input`
  background-color: var(--color-white-10);
  font-family: var(--font-family);

  border: none;
  border-radius: 30px;
  padding: 17px 24px;
  color: #ffffff;
  font-size: 14px;
  width: 310px;
  transition: 0.3s;
  &::placeholder {
    color: var(--color-white-100);
    font-family: var(--font-family);
  }

  &:focus {
    outline: 2px solid var(--color-primary);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const SubscribeDisclaimer = styled.p`
  color: var(--color-white-40);
  font-size: var(--text-base-size);
  font-weight: var(--text-base-weight);
  letter-spacing: var(--text-base-letter-spacing);
  line-height: var(--text-base-line-height);
  max-width: 308px;
`;
const IconCircle = styled.a``;
const SocialIcons = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-left: auto;
  align-self: flex-end;
  @media screen and (max-width: 768px) {
    align-self: flex-start;
    margin: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    align-self: center;
    margin: 0;
  }
`;

const MiddleRow = styled.div`
  display: flex;
  align-items: start;
  margin-top: 64px;
  gap: 185px;
  @media screen and (max-width: 1200px) {
    gap: 24px;
    flex-direction: column;
  }
`;

const CtaBlock = styled.div`
  padding-right: 67px;
`;

const CtaHeading = styled.h2`
  font-size: clamp(var(--heading-3-size), 5vw, var(--heading-2-size));
  line-height: var(--heading-2-line-height);
  font-weight: var(--heading-2-weight);
  letter-spacing: var(--heading-2-letter-spacing);
  color: var(--color-white-100);
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
    line-height: var(--heading-3-line-height);
    letter-spacing: var(--heading-3-letter-spacing);
  }
`;

const LinkColumns = styled.div`
  display: flex;
  gap: 138px;
  @media screen and (max-width: 768px) {
    gap: 50px;
    justify-content: space-between;
  }
`;

const LinkColumn = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LinkItem = styled.li`
  a {
    color: ${({ $active }) => ($active ? "#ffffff" : "#8a8f98")};
    font-weight: ${({ $active }) => ($active ? 600 : 400)};
    text-decoration: none;
    font-size: var(--text-md-size);
    font-weight: var(--text-md-weight);
    letter-spacing: var(--text-md-letter-spacing);
    line-height: var(--text-md-line-height);
    &:hover {
      color: #ffffff;
    }
  }
`;
// bottom bar
const BottomBar = styled.div`
  display: flex;
  border-top: 1px solid var(--color-white-10);
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  flex-wrap: wrap;
  gap: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: var(--text-sm-size);
  line-height: var(--text-sm-line-height);
  font-weight: var(--text-sm-weight);
  letter-spacing: var(--text-sm-letter-spacing);
  color: var(--color-white-40);
  @media (max-width: 768px) {
    order: 2;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 32px;

  a {
    font-size: var(--text-sm-size);
    line-height: var(--text-sm-line-height);
    font-weight: lighter;
    letter-spacing: var(--text-sm-letter-spacing);
    color: var(--color-white-100);
    @media (max-width: 768px) {
      order: 1;
    }
  }
`;
function Footer() {
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "Properties", href: "/properties" },
    { label: "Featured property", href: "/featured-property" },
  ];

  const resourceLinks = [
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "404 page", href: "/404" },
  ];

  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <TopRow>
            <NewsletterText>
              Stay updated with the latest news, promotions, and exclusive
              offers.
            </NewsletterText>
            <SubscribeForm onSubmit={(e) => e.preventDefault()}>
              <EmailInput
                type="email"
                placeholder="Enter your email"
                required
              />
              <Button variant={"primary-light"}>Subscribe</Button>
            </SubscribeForm>
            <SubscribeDisclaimer>
              By subscribing, you agree to receive our promotional emails. You
              can unsubscribe at any time.
            </SubscribeDisclaimer>
            <SocialIcons>
              <IconCircle href="#" aria-label="X (Twitter)">
                <XLogoIcon size={20} color="white" />
              </IconCircle>
              <IconCircle href="#" aria-label="X (Twitter)">
                <FacebookLogoIcon size={20} weight="fill" color="white" />
              </IconCircle>
              <IconCircle href="#" aria-label="X (Twitter)">
                <InstagramLogoIcon size={20} color="white" />
              </IconCircle>
            </SocialIcons>
          </TopRow>
          {/* middle */}
          <MiddleRow>
            <CtaBlock>
              <CtaHeading>
                Begin your path to <br /> success—contact us today.
              </CtaHeading>
              <Button variant={"primary"} onClick={()=> navigate("/contact")}>Get in touch</Button>
            </CtaBlock>

            <LinkColumns>
              <LinkColumn>
                {navLinks.map((link) => (
                  <LinkItem key={link.label} $active={link.active}>
                    <a href={link.href}>{link.label}</a>
                  </LinkItem>
                ))}
              </LinkColumn>

              <LinkColumn>
                {resourceLinks.map((link) => (
                  <LinkItem key={link.label} $active={link.active}>
                    <a href={link.href}>{link.label}</a>
                  </LinkItem>
                ))}
              </LinkColumn>
            </LinkColumns>
          </MiddleRow>
        </Wrapper>
        <BottomBar>
          <Copyright>©2025 Homely</Copyright>
          <LegalLinks>
            <a href="/terms">Terms of service</a>
            <a href="/privacy">Privacy policy</a>
          </LegalLinks>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
