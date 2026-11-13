import styled from "styled-components";
import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { useSearchParams } from "react-router-dom";


const ContactCard = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1.4fr);
  gap: 48px;
  padding: 16px;
  border: 1px solid var(--color-black-10);
  border-radius: 18px;
  background: var(--color-white-100);
  box-shadow: 0 12px 40px rgba(23, 32, 35, 0.08);
    margin-top : 64px;
  @media screen and (max-width: 900px) {
    grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.1fr);
    gap: 28px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 12px;
  }
`;

const ContactInfo = styled.aside`
  position: relative;
  display: flex;
  min-height: 535px;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 52px 48px;
  border-radius: 10px;
  background:
    linear-gradient(180deg, rgba(23, 32, 35, 0.72), rgba(23, 32, 35, 0.56)),
    url("/contact.webp") center / cover no-repeat;
  color: var(--color-white-100);

  @media screen and (max-width: 900px) {
    min-height: 500px;
    padding: 40px 32px;
  }

  @media screen and (max-width: 700px) {
    min-height: 430px;
    padding: 32px 24px;
  }
`;

const InfoHeading = styled.div`
  h1 {
    font-size: clamp(28px, 3vw, 40px);
    font-weight: var(--font-weight-medium);
    line-height: 1.2;
  }

  p {
    max-width: 420px;
    margin-top: 14px;
    color: rgba(255, 255, 255, 0.8);
    font-size: var(--text-md-size);
    line-height: 1.5;
  }
`;

const ContactMethods = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 40px;
`;

const ContactMethod = styled.li`
  display: flex;
  align-items: center;
  gap: 18px;
  color: var(--color-white-100);
  font-size: var(--text-md-size);
  line-height: 1.4;

  svg {
    flex: none;
  }

  a {
    color: inherit;
    overflow-wrap: anywhere;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-self: center;
  padding: 24px 18px 24px 0;

  @media screen and (max-width: 700px) {
    gap: 18px;
    padding: 12px;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;
const SubmitButton = styled(Button)`
align-self : flex-start;
margin-top : 40px;
`
const Field = styled.input`
  width: 100%;
  min-width: 0;
  height: 58px;
  padding: 0 24px;
  border: 1px solid #e6e2d8;
  border-radius: 30px;
  outline: none;
  background: var(--color-white-100);
  color: var(--color-black-100);
  font: inherit;
  font-size: var(--text-base-size);
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &::placeholder {
    color: var(--color-black-50);
    opacity: 1;
  }

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(7, 190, 138, 0.1);
  }
`;

const MessageField = styled.textarea`
  width: 100%;
  min-height: 228px;
  padding: 18px 20px;
  border: 1px solid #e6e2d8;
  border-radius: 16px;
  outline: none;
  background: var(--color-white-100);
  color: var(--color-black-100);
  font: inherit;
  font-size: var(--text-base-size);
  resize: vertical;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &::placeholder {
    color: var(--color-black-50);
    opacity: 1;
  }

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(7, 190, 138, 0.1);
  }

  @media screen and (max-width: 700px) {
    min-height: 180px;
  }
`;



function ContactPage() {
  const [searchParams] = useSearchParams();
  const propertyName = searchParams.get("property")?.trim();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const property = formData.get("property");
    const subject = `Contact request from ${formData.get("name")}${property ? ` about ${property}` : ""}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Email: ${formData.get("email")}`,
      ...(property ? [`Property: ${property}`] : []),
      "",
      "Message:",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:support@gleamer.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
         <Section $withNavbarOffset>
            <SectionHeader label={"Contact us"} title={"Have questions? ready to help!"} $align="center" desc={"Looking for your dream home or ready to sell? Our expert team offers personalized guidance and market expertise tailored to you. "}/>
      <Container>
        <ContactCard>
          <ContactInfo>
            <InfoHeading>
              <h1>Contact information</h1>
              <p>
                Ready to find your dream home or sell your property? We&apos;re
                here to help!
              </p>
            </InfoHeading>
            <ContactMethods>
              <ContactMethod>
                <PhoneIcon size={28} />
                <a href="tel:+1023903101122">+1 0239 0310 1122</a>
              </ContactMethod>
              <ContactMethod>
                <EnvelopeSimpleIcon size={28} />
                <a href="mailto:support@gleamer.com">
                  support@gleamer.com
                </a>
              </ContactMethod>
              <ContactMethod>
                <MapPinIcon size={30} />
                <span>Blane Street, Manchester</span>
              </ContactMethod>
            </ContactMethods>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            {propertyName && (
              <input type="hidden" name="property" value={propertyName} />
            )}
            <FormRow>
              <Field
                autoComplete="name"
                name="name"
                placeholder="Your name *"
                aria-label="Your name"
                required
              />
              <Field
                autoComplete="tel"
                name="phone"
                type="tel"
                placeholder="Phone number *"
                aria-label="Phone number"
                required
              />
            </FormRow>
            <Field
              autoComplete="email"
              name="email"
              type="email"
              placeholder="Email address *"
              aria-label="Email address"
              required
            />
            <MessageField
              name="message"
              placeholder="Write here your message"
              aria-label="Your message"
              defaultValue={
                propertyName ? `I'm interested in ${propertyName}.` : undefined
              }
              required
            />
            <SubmitButton variant={"primary"}>Send message</SubmitButton>
          </ContactForm>
        </ContactCard>
      </Container>
              </Section>
  );
}

export default ContactPage;
