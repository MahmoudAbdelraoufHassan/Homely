import styled, { css } from "styled-components";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionHeader from "../../ui/SectionHeader";
import {
  LightningIcon,
  MapPinIcon,
  SwimmingPoolIcon,
  WifiHighIcon,
} from "@phosphor-icons/react";
import Button from "../../ui/Button";
import { useProperties } from "../../features/Properties/useProperties";
import { Link } from "react-router-dom";

import "swiper/css/effect-fade";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { currencyFormatter } from "../../utils/currencyFormatter";
import SectionError from "../../ui/SectionError";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getResponsiveImage } from "../../utils/responsiveImage";
const FeaturedContainer = styled(Container)`
  display: flex;
  gap: 40px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  pointer-events: none;
  & img {
    width: 100%;
    aspect-ratio: 16 / 15;
    object-fit: cover;
  }
`;
const FeaturedImage = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  min-width: 0;
`;
const featuredAutoplayOptions = {
  delay: 4000,
  disableOnInteraction: false,
};
const FeaturedDescription = styled.div`
  color: var(--color-black-50);
  font-size: var(--text-md-size);
  line-height: var(--text-md-line-height);
  letter-spacing: var(--text-md-letter-spacing);
  margin-top: 24px;
`;
const FeaturedDetails = styled.div`
  margin-left: 40px;
  flex: 1;
  min-width: 0;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const DetailsWrapper = styled.div``;
const FeaturesList = styled.ul`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const FeatureItem = styled.li`
  display: flex;
  gap: 24px;
  align-items: center;
`;
const FeatureIcon = styled.div``;
const FeatureTitle = styled.p`
  color: var(--color-black-100);
  font-size: var(--text-md-size);
  line-height: var(--text-md-line-height);
  letter-spacing: var(--text-md-letter-spacing);
`;
const FeatureDesc = styled.p`
  margin-top: 2px;
  color: var(--color-black-50);
  font-size: var(--text-base-size);
  line-height: var(--text-base-line-height);
  letter-spacing: var(--text-base-letter-spacing);
`;
const FeaturedFooter = styled.div`
  display: flex;
  gap: 40px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 16px;
    & button {
      order: 2;
      width: fit-content;
    }
  }
`;
const PriceBlock = styled.div`
  & h4 {
    color: var(--color-black-100);
    font-size: var(--heading-4-size);
    line-height: var(--heading-4-line-height);
    letter-spacing: var(--heading-4-letter-spacing);
    font-weight: var(--heading-4-weight);
  }
  & p {
    color: var(--color-black-50);
    font-size: var(--text-sm-size);
    line-height: var(--text-sm-line-height);
    letter-spacing: var(--text-sm-letter-spacing);
  }
  @media screen and (max-width: 576px) {
    order: 1;
  }
`;
const DetailsLink = styled(Link)`
  width: fit-content;
  border-radius: 30px;
  background: var(--color-primary);
  color: var(--color-white-100);
  padding: 17px 32px;
  text-decoration: none;
`;
const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 50%;
  left: -20px;
  right: -20px;
  z-index: 40;
  font-size: 24px;
  transform: translateY(-50%);

  & button svg {
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 768px) {
    left: -15px;
    right: -15px;

    & button {
      width: 40px;
      height: 40px;
    }
    & button svg {
      width: 20px;
      height: 20px;
    }
  }
`;
const CustomPagination = styled.div`
  display: flex;
  gap: 6px;
  position: absolute;
  bottom: 13px;
  z-index: 40;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 12px;
  padding: 8px 12px;
`;
const PaginationBtn = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: 0.3s;
  cursor: pointer;
  ${({ $active }) =>
    $active &&
    css`
      background-color: var(--color-white-100);
    `}
`;

const SwiperWrapper = styled.div`
  overflow: hidden;
  position: relative;
  flex: 1;
  border-radius: 16px;
  height: fit-content;
`;
function FeaturedSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSwiperReady, setIsSwiperReady] = useState(false);
  const MainSwiperRef = useRef(null);
  const FeaturedSectionRef = useRef(null);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const { properties, isLoading, error } = useProperties();
  const featuredProperties = properties.filter((property) => property.featured);
  const activeProperty = featuredProperties[activeIndex];

  useEffect(() => {
    const section = FeaturedSectionRef.current;
    const swiper = MainSwiperRef.current;

    if (
      !isSwiperReady ||
      prefersReducedMotion ||
      !section ||
      !swiper ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiper.autoplay?.start();
        } else {
          swiper.autoplay?.stop();
        }
      },
      { rootMargin: "100px" },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      swiper.autoplay?.stop();
    };
  }, [isSwiperReady, prefersReducedMotion]);

  function handleMainSwiperChange(swiper) {
    setActiveIndex(swiper.realIndex);
  }

  if (isLoading) {
    return <Section><p role="status">Loading featured properties...</p></Section>;
  }

  if (error) {
    return <SectionError errorMessage={`Unable to load featured properties: ${error}`} />;
  }

  if (featuredProperties.length === 0) {
    return <SectionError errorMessage={"No featured properties are available right now."} />;
  }

  return (
    <Section ref={FeaturedSectionRef}>
      <FeaturedContainer>
        <FeaturedImage>
          <SwiperWrapper>
            <Swiper
              modules={[Autoplay]}
              loop={featuredProperties.length > 1}
              speed={prefersReducedMotion ? 0 : 800}
              autoplay={prefersReducedMotion ? false : featuredAutoplayOptions}
              allowTouchMove={false}
              onSwiper={(swiper) => {
                MainSwiperRef.current = swiper;
                setIsSwiperReady(true);

                if (typeof IntersectionObserver !== "undefined") {
                  swiper.autoplay.stop();
                }
              }}
              onSlideChange={handleMainSwiperChange}
            >
              {featuredProperties.map((property) => (
                <SwiperSlide key={property.id}>
                  <ImageWrapper>
                    <img
                      {...getResponsiveImage(
                        property.images[0],
                        "(min-width: 1500px) 660px, (min-width: 993px) calc(50vw - 70px), (min-width: 769px) calc(100vw - 60px), calc(100vw - 32px)",
                      )}
                      alt={property.name}
                      loading="lazy"
                    />
                  </ImageWrapper>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperWrapper>
          <Arrows>
            <Button
              type="button"
              aria-label="Previous featured property"
              variant={"rounded-dark"}
              onClick={() => MainSwiperRef.current?.slidePrev()}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              type="button"
              aria-label="Next featured property"
              variant={"rounded-dark"}
              onClick={() => MainSwiperRef.current?.slideNext()}
            >
              <ArrowRightIcon />
            </Button>
          </Arrows>
          <CustomPagination className="custom-pagination">
            {featuredProperties.map((property, index) => (
              <PaginationBtn
                key={property.id}
                $active={activeIndex === index}
                type="button"
                aria-label={`Show featured property ${index + 1}: ${property.name}`}
                aria-pressed={activeIndex === index}
                onClick={() => MainSwiperRef.current.slideToLoop(index)}
              ></PaginationBtn>
            ))}
          </CustomPagination>
        </FeaturedImage>
        <FeaturedDetails>
          <DetailsWrapper>
            <SectionHeader
              label={"Featured property"}
              title={activeProperty.name}
              desc={
                <>
                  <MapPinIcon
                    weight="bold"
                    size={24}
                    style={{ marginRight: "10px" }}
                  />
                  {activeProperty.address}, {activeProperty.city}
                </>
              }
            >
              <FeaturedDescription>
                {activeProperty.description[0]}
              </FeaturedDescription>
            </SectionHeader>
            <FeaturesList>
              {activeProperty.highlights.map(({ icon, title, description }) => {
                const HighlightIcon = {
                  pool: SwimmingPoolIcon,
                  wifi: WifiHighIcon,
                  energy: LightningIcon,
                }[icon] || LightningIcon;

                return (
                  <FeatureItem key={title}>
                    <FeatureIcon><HighlightIcon size={32} /></FeatureIcon>
                    <div>
                      <FeatureTitle>{title}</FeatureTitle>
                      <FeatureDesc>{description}</FeatureDesc>
                    </div>
                  </FeatureItem>
                );
              })}
            </FeaturesList>
            <FeaturedFooter>
              <DetailsLink to={`/properties/${activeProperty.id}`}>View property</DetailsLink>
              <PriceBlock>
                <h4>{currencyFormatter.format(activeProperty.price)}</h4>
                <p>{activeProperty.beds} beds · {activeProperty.baths} baths · {activeProperty.area}m²</p>
              </PriceBlock>
            </FeaturedFooter>
          </DetailsWrapper>
        </FeaturedDetails>
      </FeaturedContainer>
    </Section>
  );
}

export default FeaturedSection;
