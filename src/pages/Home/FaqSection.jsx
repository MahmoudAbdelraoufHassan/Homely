import styled from "styled-components";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import Accordion from "../../ui/Accordion";
import SectionHeader from "../../ui/SectionHeader";
const faqItems = [
  {
    question: "Can I personalize my homely?",
    answer:
      "Yes, you can personalize your homely according to your needs and preferences.",
  },

  {
    question: "Where can I find homely?",
    answer:
      "You can explore our available properties directly through our platform.",
  },

  {
    question: "What steps to buy a homely?",
    answer:
      "Browse properties, choose your favorite home, contact our team and complete the buying process.",
  },
];
const FaqContainer = styled(Container)`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }
`;
const Gallery = styled.div`
  flex: 1;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  gap: 40px;
  width: 100%;
  @media screen and (max-width: 992px) {
    gap: 12px;
  }
`;

const LeftImages = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (max-width: 992px) {
    gap: 12px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;

  overflow: hidden;

  border-radius: 16px;
`;

const LargeImageWrapper = styled.div`
  overflow: hidden;

  border-radius: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  display: block;

  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  padding: 0 48px;
  @media screen and (max-width: 992px) {
    padding: 0px;
  }
`;

const BottomText = styled.p`
  color: var(--color-black-50);

  font-size: var(--text-md-size);
  line-height: var(--text-md-line-height);
  padding: 0px 23px;
  max-width: 600px;
  margin-top: 15px;
`;

export default function FAQSection() {
  return (
    <Section>
      <FaqContainer>
        <Gallery>
          <LeftImages>
            <ImageWrapper>
              <Image
                src="/Faq/faq-2.png.webp"
                alt="Modern property"
                loading="lazy"
                decoding="async"
              />
            </ImageWrapper>

            <ImageWrapper>
              <Image
                src="/Faq/faq-3.png.webp"
                alt="Modern living room"
                loading="lazy"
                decoding="async"
              />
            </ImageWrapper>
          </LeftImages>

          <LargeImageWrapper>
            <Image
              src="/Faq/faq-1.png.webp"
              alt="Modern apartment"
              loading="lazy"
              decoding="async"
            />
          </LargeImageWrapper>
        </Gallery>

        <Content>
          <SectionHeader
            label={"FAQs"}
            title={"Everything about homely"}
            desc={
              " We know that buying, selling, or investing in real estate can be overwhelming. Here are some frequently asked questions to help guide you through the process."
            }
          />
          <Accordion items={faqItems} />

          <BottomText>
            Discover a diverse range of premium properties, from luxurious
            apartments to spacious villas, tailored to your needs.
          </BottomText>
        </Content>
      </FaqContainer>
    </Section>
  );
}
