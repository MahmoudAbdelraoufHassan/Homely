import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Container } from "../../ui/Container";
import Button from "../../ui/Button";
import { ArrowsOutCardinalIcon, BathtubIcon, BedIcon } from "@phosphor-icons/react";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProperties } from "../../features/Properties/useProperties";
import { currencyFormatter } from "../../utils/currencyFormatter";
const Section = styled.section`
  position: relative;
`;
// Hero Wrapper
const HeroWrapper = styled.div`
  padding-top: 241px;
  padding-bottom: 113px;
  position: relative;
  background: ${({ $background }) => $background};
  background-repeat: no-repeat;
  background-position: center;
  height: 100dvh;
  height: 100vh;
  
  ${({ $cover }) =>
    $cover &&
    css`
      background-size: cover;
    `}

  @media screen and (max-width:992px) {
      ${({ $first }) =>{
        $first &&
        css`
          background-position:
            180px bottom,
            center;
        `}
    }
  }
@media screen and (max-width:1050px) {
padding-top : 180px;
}
@media screen and (max-width:768px) {
padding-top : 220px;
}
@media screen and (max-width:392px) {
padding-top : 180px;
}
`;
const HeroUpper = styled.div``;
const HeroContent = styled.div`
  color: var(--color-white-100);
  & h1 {
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: clamp(var(--heading-2-size), 5vw, var(--heading-1-size));
    max-width: 450px;
    word-wrap: break-word;
    line-height: var(--heading-1-line-height);
    letter-spacing: var(--heading-1-letter-spacing);
    font-weight: var(--heading-1-weight);
    @media screen and (max-width: 768px) {
      line-height: var(--heading-2-line-height);
      letter-spacing: var(--heading-2-letter-spacing);
      font-weight: var(--heading-2-weight);
    }
  }
  & span {
    font-size: var(--text-md-size);

    line-height: var(--text-md-line-height);
    /* font--text-md-letter-spacing: -0.1px; */
    letter-spacing: var(--text-md-letter-spacing);
  }
`;
const HeroBtns = styled.div`
  display: flex;
  gap: 16px;
  @media screen and (max-width: 392px) {
    align-items: start;
    flex-direction : column;
  }
`;
const HeroLower = styled.div`
  padding: 46px 247px 46px 64px;
  background-color: var(--color-white-100);
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  gap: 48px;
  align-items: center;
  border-top-left-radius: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 992px) {
    width: 100%;
    border-radius: 0;
    padding: 24px 16px;

    gap: clamp(12px, 5vw, 24px);
  }
`;
const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  align-items: start;
  gap: 12px;

  & p {
    font-size: 32px;
    font-weight: var(--font-weight-semibold);
  }
  &:has(p) {
    align-items: start;
  }
  &:has(p) span {
    font-size: var(--text-base-size);
    line-height: var(--text-base-line-height);
    letter-spacing: var(--text-base-letter-spacing);
    color: var(--color-black-50);
  }
  @media screen and (max-width: 1100px) {
    flex-basis: calc((100% / 2) - 49px);
  }
`;
const Seperator = styled.div`
  background-color: var(--color-black-10);
  height: 56px;
  width: 1px;
  @media screen and (max-width: 1100px) {
    &:nth-child(4) {
      display: none;
    }
  }
`;

const CustomPagination = styled.div`
  display: flex;
  gap: 6px;
  position: absolute;
  bottom: 78.5px;
  z-index: 40;
  left: 15px;
  align-items: center;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
const PaginationBtn = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: var(--color-white-100);
  transition: 0.3s;
  cursor: pointer;
  ${({ $active }) =>
    $active &&
    css`
      width: 56px;
      height: 6px;
    `}
`;
function HeroSection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const { properties } = useProperties();
  const heroProperties = properties
    .filter((property) => !property.featured)
    .slice(0, 3);

  if (heroProperties.length === 0) {
    return (
      <Section>
        <HeroWrapper
          $background={`linear-gradient(90deg, rgba(23, 32, 35, 0.72), rgba(23, 32, 35, 0.12)), url("/Properties/willow-creek-hero.webp")`}
          $cover
        >
        </HeroWrapper>
      </Section>
    );
  }

  return (
    <Section>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        slidesPerView={1}  
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        speed={1000}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {heroProperties.map((property) => (
          <SwiperSlide key={property.id}>
            <HeroWrapper
              $background={`linear-gradient(90deg, rgba(23, 32, 35, 0.72), rgba(23, 32, 35, 0.12)), url("${property.heroImage || property.images[0].medium.src}")`}
              $cover={true}
            >
              <Container>
                <HeroUpper>
                  <HeroContent>
                    <span>{property.city}</span>
                    <h1>{property.name}</h1>
                    <HeroBtns>
                      <Button
                        variant={"primary-light"}
                        onClick={() =>
                          navigate(
                            `/contact?property=${encodeURIComponent(property.name)}`,
                          )
                        }
                      >
Get in touch
                      </Button>
                      <Button
                        variant={"outline"}
                        onClick={() => navigate(`/properties/${property.id}`)}
                      >
                        View details
                      </Button>
                    </HeroBtns>
                  </HeroContent>
                </HeroUpper>
              </Container>
              <HeroLower>
                <InfoItem>
                  <BedIcon size={32} />
                  <span>{property.beds} Bedrooms</span>
                </InfoItem>
                <Seperator />
                <InfoItem>
                  <BathtubIcon size={32} />
                  <span>{property.baths} Bathrooms</span>
                </InfoItem>
                <Seperator />
                <InfoItem>
                  <ArrowsOutCardinalIcon size={32} />
                  <span>{property.area}m²</span>
                </InfoItem>
                <Seperator />
                <InfoItem>
                  <p>{currencyFormatter.format(property.price)}</p>
                  <span>For sale</span>
                </InfoItem>
              </HeroLower>
            </HeroWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container>
      <div style={{position : "relative"}}>
      <CustomPagination className="custom-pagination">
        {heroProperties.map((property, index) => (
          <PaginationBtn
          key={property.id}
          $active={activeIndex === index}
          onClick={() => swiperRef.current.slideToLoop(index)}
          ></PaginationBtn>
        ))}
      </CustomPagination>
        </div>
        </Container>
    </Section>
  );
}

export default HeroSection;
