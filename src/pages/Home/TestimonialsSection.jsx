import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HouseSimpleIcon,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getTestimonials } from "../../services/content";
import SectionError from "../../ui/SectionError";
import { getResponsiveImage } from "../../utils/responsiveImage";

const TestSection = styled(Section)`
  position: relative;
  padding-bottom: 80px;
  background-color: var(--color-black-100);
  overflow: hidden;
  perspective: 1000px;
`;
const Arrows = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const ArrowsSmallScreen = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 40px;
`;
const TestimonialHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TestimonialWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 36px;
  align-items: center;
  position: relative;
  z-index: 10;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const TestimonialContent = styled.div`
  display: flex;
  flex: 1;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ReviewIcon = styled.div`
  font-size: 34px;
  @media screen and (max-width: 1200px) {
    font-size: 44px;
  }
`;
const VictorImage = styled.img`
  height: 100%;
  object-fit: contain;
  object-position: bottom;
  position: absolute;
  right: 0;
  top: 40px;
  pointer-events: none;
  max-width: 50%;
  @media screen and (max-width: 700px) {
    width: 1200px;
    top: 0;
    top: 36px;
    max-width: none;
    right: -50%;
    transform: rotateY(180deg);
  }
`;
const TestimonialBody = styled.div`
  margin-left: 40px;
  @media screen and (max-width: 1200px) {
    margin-left: 0px;
  }
`;
const ReviewText = styled.p`
  color: var(--color-white-100);
  font-size: clamp(20px, 5vw, 32px);
  line-height: var(--text-md-line-height);
  letter-spacing: var(--text-md-letter-spacing);
  margin-bottom: 24px;
  padding-right: 88px;
  @media screen and (max-width: 1200px) {
    padding-right: 0px;
  }
`;
const ReviewerInfo = styled.div`
  display: flex;
  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const ReviewerName = styled.span`
  color: var(--color-white-100);
  font-size: var(--text-md-size);
  font-weight: var(--font-weight-semibold);
`;
const ReviewerLocation = styled.span`
  color: var(--color-black-50);
  font-size: var(--text-base-size);
`;
const ClientImage = styled.div`
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  width: 427px;
  height: 434px;
  flex: 0 0 auto;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ClientImageSmallScreen = styled.div`
  overflow: hidden;
  margin-right: 24px;
  border-radius: 16px;
  display: flex;
  width: 80px;
  height: 80px;
  flex: 0 0 80px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
function TestimonialsSection() {
  const swiperRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState("");



  useEffect(() => {
    let active = true;

    getTestimonials()
      .then((data) => {
        if (active) setTestimonials(data);
      })
      .catch((loadError) => {
        if (active) setError(loadError.message);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <TestSection id="Testimonial">
      <VictorImage
        src="/HomeVictorRight.png"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <Container>
        <TestimonialHeader>
          <SectionHeader
            theme="light"
            label={"Testimonials"}
            title={"What our clients says"}
          />
          {!isMobile && (
            <Arrows>
              <Button
                type="button"
                aria-label="Previous testimonial"
                variant={"rounded-white-10"}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ArrowLeftIcon size={24} />
              </Button>
              <Button
                type="button"
                aria-label="Next testimonial"
                variant={"rounded-white-10"}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ArrowRightIcon size={24} />
              </Button>
            </Arrows>
          )}
        </TestimonialHeader>
        {error ? (
          <SectionError errorMessage={`Unable to load testimonials: ${error}`} />
        ) : (
          <Swiper
            allowTouchMove={false}
            speed={1000}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialWrapper>
                  <TestimonialContent>
                    <ReviewIcon>
                      <HouseSimpleIcon color="#07be8a" weight="thin" />
                    </ReviewIcon>

                    <TestimonialBody>
                      <ReviewText>{testimonial.quote}</ReviewText>

                      <ReviewerInfo>
                        {isMobile && (
                          <ClientImageSmallScreen>
                            <img
                              {...getResponsiveImage(testimonial.image, "80px")}
                              alt={testimonial.name}
                              loading="lazy"
                              decoding="async"
                            />
                          </ClientImageSmallScreen>
                        )}
                        <InfoWrapper>
                          <ReviewerName>{testimonial.name}</ReviewerName>
                          <ReviewerLocation>{testimonial.role}</ReviewerLocation>
                        </InfoWrapper>
                      </ReviewerInfo>
                    </TestimonialBody>
                  </TestimonialContent>
                  {!isMobile && (
                    <ClientImage>
                      <img
                        {...getResponsiveImage(
                          testimonial.image,
                          "(min-width: 1201px) 427px, 80px",
                        )}
                        alt={testimonial.name}
                        loading="lazy"
                        decoding="async"
                      />
                    </ClientImage>
                  )}
                </TestimonialWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {isMobile && (
          <ArrowsSmallScreen>
            <Button
              type="button"
              aria-label="Previous testimonial"
              variant={"rounded-white-10"}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeftIcon size={24} />
            </Button>
            <Button
              type="button"
              aria-label="Next testimonial"
              variant={"rounded-white-10"}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRightIcon size={24} />
            </Button>
          </ArrowsSmallScreen>
        )}
      </Container>
    </TestSection>
  );
}

export default TestimonialsSection;
