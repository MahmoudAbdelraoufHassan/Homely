import styled from "styled-components";
import {
  ArrowsOutCardinalIcon,
  BedIcon,
  HouseSimpleIcon,
  LightbulbIcon,
  MapPinIcon,
  WifiHighIcon,
  BathtubIcon,
  SwimmingPoolIcon,
} from "@phosphor-icons/react";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { AsteriskIcon } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ViewPropertyImage from "../ui/ViewPropertyImage";
import {currencyFormatter} from "../utils/currencyFormatter"
import { createPortal } from "react-dom";
import { getResponsiveImage } from "../utils/responsiveImage";



const PropertyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }
`;

const Seperator = styled.div`
  background-color: var(--color-black-10);
  height: 44px;
  width: 1px;
`;

const PropertyStats = styled.ul`
  display: flex;
  gap: clamp(20px, 3vw, 32px);
  flex: none;

  @media screen and (max-width: 420px) {
    width: 100%;
    justify-content: space-between;
    gap: 12px;
  }
`;

const Stat = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--color-black-100);
  font-size: 14px;
  white-space: nowrap;

  svg {
    color: var(--color-black-100);
  }
`;

const PageGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2.1fr) minmax(0, 1fr);
  align-items: start;
  column-gap: 40px;
  grid-template-areas:
    "gallery gallery"
    "details sidebar"
    "offers sidebar";

  @media screen and (max-width: 900px) {
    column-gap: 24px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "gallery"
      "details"
      "sidebar"
      "offers";
    row-gap: 28px;
  }
`;


const Gallery = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2.1fr) minmax(0, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 40px;
  height: clamp(300px, 37vw, 500px);
  margin-bottom: 48px;
  grid-area: gallery;

  @media screen and (max-width: 700px) {
    height: auto;
    grid-template-rows: auto auto;
    gap: 10px;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const GallerySide = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  display: grid;
  grid-template-rows: 1.2fr 0.8fr;
  gap: 40px;
  min-height: 0;

  @media screen and (max-width: 700px) {
    grid-column: 1 / -1;
    grid-row: auto;
    grid-template-rows: 1.2fr 0.8fr;
    gap: 10px;
  }
`;

const GalleryThumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  min-height: 0;

  @media screen and (max-width: 700px) {
    gap: 10px;
  }
`;

const GalleryImage = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 14px;
  background: transparent;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 0;
    border-radius: inherit;
    object-fit: cover;
  }

  &:focus-visible {
    outline: 3px solid var(--color-black-100);
    outline-offset: 3px;
  }

  ${({ $hero }) =>
    $hero &&
    `
    grid-row: 1 / span 2;
  `}

  @media screen and (max-width: 700px) {
    aspect-ratio: 1.5;

    ${({ $hero }) =>
      $hero &&
      `
      grid-column: 1 / -1;
      grid-row: auto;
      aspect-ratio: 1.6;
    `}
  }
`;

const PropertyDetails = styled.section`
  grid-area: details;
  h2 {
    margin-bottom: 40px;
    color: var(--color-black-100);
    font-size: var(--heading-6-size);
    font-weight: var(--font-weight-medium);
  }
`;

const Highlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;
  border-top: 1px solid var(--color-black-10);
  border-bottom: 1px solid var(--color-black-10);
`;

const Highlight = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 24px;

  > svg {
    flex: none;
    color: var(--color-black-100);
  }

  h3 {
    color: var(--color-black-100);
    font-size: 16px;
    font-weight: var(--font-weight-medium);
  }

  p {
    margin-top: 3px;
    color: var(--color-black-50);
    font-size: var(--text-base-size);
    line-height: 1.45;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 40px 0;
  border-bottom: 1px solid var(--color-black-10);
  color: var(--color-black-100);
  font-size: 15px;
  line-height: 1.55;
`;

const Offers = styled.section`
  padding-top: 40px;
  grid-area: offers;

  h2 {
    margin-bottom: 40px;
    color: var(--color-black-100);
    font-size: 20px;
    font-weight: var(--font-weight-medium);
  }
`;

const OfferList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px 24px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Offer = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-black-100);
  font-size: var(--text-base-16);

  svg {
    flex: none;
    width : 40px;
  }
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 40px;
  grid-area: sidebar;
  
  @media screen and (max-width: 700px) {
    gap: 20px;
  }
`;

const PriceCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 32px;
  border-radius: 14px;
  background: #e5f8f3;

  &::after {
       position: absolute;
    right: -44px;
    bottom: -153px;
    width: 265.92px;
    height: 277px;
    border: 1px solid rgba(7, 190, 138, 0.2);
    content: "";
    transform: rotate(45deg);
    border-radius: 25px;
  }

  @media screen and (max-width: 700px) {
    padding: 24px;
  }
`;

const Price = styled.p`
  position: relative;
  z-index: 1;
  color: var(--color-black-100);
  font-size: 28px;
  font-weight: var(--font-weight-semibold);
`;

const PriceNote = styled.p`
  position: relative;
  z-index: 1;
  margin-top: 4px;
  color: var(--color-black-50);
  font-size: var(--text-sm-size);
`;

const ContactButton = styled(Button)`
  position: relative;
  z-index: 1;
  width: 100%;
  margin-top: 32px;
  padding: 17px 32px;
  font-size: var(--text-base-size);
`;

const BuyerCard = styled.div`
  padding: 40px;
  border: 1px solid var(--color-black-10);
  border-radius: 16px;
`;

const BuyerIcon = styled(HouseSimpleIcon)`
  margin-bottom: 18px;
  color: var(--color-primary);
`;

const BuyerMessage = styled.p`
  color: var(--color-black-100);
  font-size: var(--text-md-size);
  letter-spacing : var(--text-md-letter-spacing);
  line-height:var(--text-md-line-height);
  font-weight : var(--font-weight-medium);
  margin : 24px 0;
`;

const Buyer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 22px;
`;

const BuyerAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
`;

const BuyerName = styled.div`
  color: var(--color-black-100);
  font-size: var(--text-md-size);
  font-weight: var(--font-weight-medium);
  margin-bottom : 4px;
  span {
    display: block;
    margin-top: 3px;
    color: var(--color-black-50);
  font-size: var(--text-base-size);
    font-weight: var(--font-weight-regular);
  }
`;

const highlightIcons = {
  pool: SwimmingPoolIcon,
  wifi: WifiHighIcon,
  energy: LightbulbIcon,
};


function PropertyDetailsPage() {
const property = useLoaderData();
const [isImageGalleryOpen, setIsImageGalleryOpen] = useState(false);

  function handleContact() {
    window.location.href =
      `mailto:info@homelu.com?subject=${encodeURIComponent(`${property.name} inquiry`)}`;
  }

  return (
    <>
    {isImageGalleryOpen &&
      createPortal(
        <ViewPropertyImage
          properyImages={property.images}
          imageAlts={property.imageAlts}
          onClose={() => setIsImageGalleryOpen(false)}
        />,
        document.body
      )}
    
    <Section $withNavbarOffset>
      <Container>
        <PropertyHeader>
        <SectionHeader
        label={property.featured ? "Featured property" : property.type}
        title={property.name}
        desc={<>           
         <MapPinIcon size={18}  style={{marginRight : "10px"}}/> 
         {property.address}, {property.city}</>}
       />

         <PropertyStats aria-label="Property specifications">
            <Stat>
              <BedIcon size={20} />
              <span>{property.beds} Bedrooms</span>
            </Stat>
            <Seperator />
            <Stat>
              <BathtubIcon size={20} />
              <span>{property.baths} Bathrooms</span>
            </Stat>
                        <Seperator />
            <Stat>
              <ArrowsOutCardinalIcon size={20} />
              <span>{property.area}m²</span>
            </Stat>
          </PropertyStats> 
       </PropertyHeader>
        <PageGrid>
            <Gallery role="group" aria-label={`${property.name} photos`}>
              <GalleryImage
                type="button"
                $hero
                aria-label={`Open photo: ${property.imageAlts[0]}`}
                onClick={() => setIsImageGalleryOpen(true)}
              >
                <img
                  {...getResponsiveImage(
                    property.images[0],
                    "(min-width: 900px) 67vw, 100vw",
                  )}
                  alt={property.imageAlts[0]}
                />
              </GalleryImage>
              <GallerySide>
                <GalleryImage
                  type="button"
                  aria-label={`Open photo: ${property.imageAlts[1]}`}
                  onClick={() => setIsImageGalleryOpen(true)}
                >
                  <img
                    {...getResponsiveImage(
                      property.images[1],
                      "(min-width: 700px) 33vw, 100vw",
                    )}
                    alt={property.imageAlts[1]}
                  />
                </GalleryImage>
                <GalleryThumbnails>
                  <GalleryImage
                    type="button"
                    aria-label={`Open photo: ${property.imageAlts[2]}`}
                    onClick={() => setIsImageGalleryOpen(true)}
                  >
                    <img
                      {...getResponsiveImage(
                        property.images[2],
                        "(min-width: 700px) 17vw, 50vw",
                      )}
                      alt={property.imageAlts[2]}
                    />
                  </GalleryImage>
                  <GalleryImage
                    type="button"
                    aria-label={`Open photo: ${property.imageAlts[3]}`}
                    onClick={() => setIsImageGalleryOpen(true)}
                  >
                    <img
                      {...getResponsiveImage(
                        property.images[3],
                        "(min-width: 700px) 17vw, 50vw",
                      )}
                      alt={property.imageAlts[3]}
                    />
                  </GalleryImage>
                </GalleryThumbnails>
              </GallerySide>
            </Gallery>

            <PropertyDetails>
              <h2>Property details</h2>
              <Highlights>
                {property.highlights.map(({ icon, title, description }) => {
                  const Icon = highlightIcons[icon] || LightbulbIcon;
                  
                  return (
                  <Highlight key={title}>
                    <Icon size={24} />
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </Highlight>
                  );
                })}
              </Highlights>
              <Description>
                {property.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </Description>
            </PropertyDetails>

            <Offers>
              <h2>What this property offers</h2>
              <OfferList>
                {property.features.map((feature) => (
                  <Offer key={feature}>
                    <AsteriskIcon size={24} />
                    {feature}
                  </Offer>
                ))}
              </OfferList>
            </Offers>

          <Sidebar>
            <PriceCard>
              <Price>{currencyFormatter.format(property.price)}</Price>
              <PriceNote>{property.type} · {property.area}m²</PriceNote>
              <ContactButton variant="primary" onClick={handleContact}>
                Get in touch
              </ContactButton>
            </PriceCard>

            <BuyerCard>
              <BuyerIcon size={44} weight="thin"/>
              <BuyerMessage>
                {property.buyerTestimonial.quote}
              </BuyerMessage>
              <Buyer>
                <BuyerAvatar
                  src={property.buyerTestimonial.image}
                  alt={property.buyerTestimonial.name}
                  loading="lazy"
                  />
                <BuyerName>
                  {property.buyerTestimonial.name}
                  <span>{property.buyerTestimonial.role}</span>
                </BuyerName>
              </Buyer>
            </BuyerCard>
          </Sidebar>
        </PageGrid>
      </Container>
    </Section>
    </>
  );
}

export default PropertyDetailsPage;