import { useState } from "react";
import styled from "styled-components";
import { ChevronDownIcon } from "lucide-react";

const AccordionContent = styled.div`
  width: 100%;
  margin-top: 32px;
`;
const Item = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const Button = styled.button`
  width: 100%;
  min-height: 64px;

  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--color-black-5);

  border-radius: 14px;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #e9ebeb;
  }

  svg {
    transition: transform 0.3s ease;
  }

  svg.open {
    transform: rotate(180deg);
  }
`;

const Question = styled.h3`
  display: flex;
  align-items: center;

  gap: 10px;

  color: var(--color-black-100);

  font-size: var(--text-lg-size);
  font-weight: var(--text-lg-weight);
  letter-spacing: var(--text-lg-letter-spacing);
`;

const Content = styled.div`
  display: grid;

  grid-template-rows: ${(props) => (props.$isOpen ? "1fr" : "0fr")};

  transition: grid-template-rows 0.3s ease;
`;

const ContentInner = styled.div`
  overflow: hidden;
`;

const Answer = styled.p`
  padding: 16px 20px;

  color: var(--color-black-50);

  font-size: var(--text-base-size);
  line-height: 1.6;
`;

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContent>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <Item key={index}>
            <Button
              type="button"
              onClick={() => toggleItem(index)}
              $isOpen={isOpen}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <Question>
                {index + 1}. {item.question}
              </Question>

              <ChevronDownIcon size={18} className={isOpen ? "open" : ""} />
            </Button>

            <Content
              id={`faq-answer-${index}`}
              $isOpen={isOpen}
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              <ContentInner>
                <Answer>{item.answer}</Answer>
              </ContentInner>
            </Content>
          </Item>
        );
      })}
    </AccordionContent>
  );
}
