import styled from "styled-components";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import Button from "../../ui/Button";
import SectionHeader from "../../ui/SectionHeader";
import { useNavigate } from "react-router-dom";
import { getResponsiveImage } from "../../utils/responsiveImage";

const categoryImages = [
  {
    small: { src: "/Categories/small/Categories-1.webp", width: 341 },
    medium: { src: "/Categories/medium/Categories-1.webp", width: 512 },
    large: { src: "/Categories/Categories-1.webp", width: 683 },
  },
  {
    small: { src: "/Categories/small/Categories-2.webp", width: 480 },
    medium: { src: "/Categories/medium/Categories-2.webp", width: 957 },
    large: { src: "/Categories/Categories-2.webp", width: 1276 },
  },
  {
    small: { src: "/Categories/small/Categories-3.webp", width: 198 },
    medium: { src: "/Categories/medium/Categories-3.webp", width: 297 },
    large: { src: "/Categories/Categories-3.webp", width: 396 },
  },
  {
    small: { src: "/Categories/small/Categories-4.webp", width: 251 },
    medium: { src: "/Categories/medium/Categories-4.webp", width: 376 },
    large: { src: "/Categories/Categories-4.webp", width: 502 },
  },
];

const CategoriesHeader = styled(SectionHeader)`
  grid-column: span 2;
  padding: 24px 0px;
`;
const CategoriesBtn = styled(Button)`
  margin-top: 32px;
`;
const VectorImage = styled.img`
  object-fit: auto;
  position: absolute;
  left: 0;
  top: 50px;
  z-index: -1;
  @media screen and (max-width: 576px) {
    left: 50%;
    transform: translateX(-37%);
  }
`;
const CategoriesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: repeat(2, minmax(100px, 386px));
  gap: 40px;
  grid-auto-flow: row;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    gap: 24px;
  }
`;

const OverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0, 0.8) 100%);
  left: 0;
  top: 0;
  display: flex;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  transition: opacity 0.3s;
  z-index : 1;

  & h4 {
    font-size: var(--heading-4-size);
    line-height: var(--heading-4-line-height);
    font-weight: var(--heading-4-weight);
    letter-spacing: var(--heading-4-letter-spacing);
    color: var(--color-white-100);
    margin-bottom: 8px;
    pointer-events: none;
  }
  & p {
    font-size: var(--text-md-size);
    line-height: var(--text-md-line-height);
    font-weight: var(--text-base-weight);
    color: var(--color-white-80);
    letter-spacing: var(--text-md-letter-spacing);
    pointer-events: none;
  }
  & button {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    z-index : 10;

  }
`;

  // &:hover ${OverLay} {
  //   opacity: 1;
  //   pointer-events: all;
  // }
const CategoriesItem = styled.div`
  grid-column: ${(props) => (!props.$grid ? "span 2" : props.$grid)};
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
  &:last-child img {
    width: auto;
    object-fit: fill;
    object-position: -40px;
    transform: scale(1);
  }

  @media screen and (max-width: 768px) {
    grid-column: span 2;
    height: 320px;
    &:last-child img {
      object-position: 0px;
      width: 100%;
    }
  }
  @media screen and (min-width: 1000px) and (max-width: 1474px) {
    grid-column: span 1;
  }
`;

function CategoriesSection() {
  const navigate = useNavigate();
  return (
    <Section>
      <VectorImage
        src="/HomeVictor.png"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <Container>
        <CategoriesContent>
          <CategoriesHeader
            label={"Categories"}
            title={"Explore best properties with expert services."}
            desc={
              "Discover a diverse range of premium properties, from luxurious apartments to spacious villas, tailored to your needs."
            }
          >
            <CategoriesBtn variant={"primary"} onClick={()=> navigate('/properties')}>View properties</CategoriesBtn>
          </CategoriesHeader>
          <CategoriesItem>
            <img
              {...getResponsiveImage(
                categoryImages[0],
                "(min-width: 1475px) 680px, (min-width: 769px) calc(50vw - 50px), calc(100vw - 32px)",
              )}
              alt=""
              loading="lazy"
              decoding="async"
            />
            {/* <OverLay>
              <h4>Luxury villas</h4>
              <p>
                Experience elegance and comfort with our exclusive luxury
                villas, designed for sophisticated living.
              </p>
              <Button variant={"rounded"}>
                <ArrowRightIcon size={24} />
              </Button>
            </OverLay> */}
          </CategoriesItem>
          <CategoriesItem>
            <img
              {...getResponsiveImage(
                categoryImages[1],
                "(min-width: 1475px) 680px, (min-width: 769px) calc(50vw - 50px), calc(100vw - 32px)",
              )}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <OverLay>
              <h4>Luxury villas</h4>
              <p>
                Experience elegance and comfort with our exclusive luxury
                villas, designed for sophisticated living.
              </p>
              {/* <Button variant={"rounded"}>
                <ArrowRightIcon size={24} />
              </Button> */}
            </OverLay>
          </CategoriesItem>
          <CategoriesItem $grid="span 1">
            <img
              {...getResponsiveImage(
                categoryImages[2],
                "(min-width: 1000px) 25vw, (min-width: 768px) 33vw, 100vw",
              )}
              alt=""
              loading="lazy"
              decoding="async"
            />
            {/* <OverLay>
              <h4>Luxury villas</h4>
              <p>
                Experience elegance and comfort with our exclusive luxury
                villas, designed for sophisticated living.
              </p>
              <Button variant={"rounded"}>
                <ArrowRightIcon size={24} />
              </Button>
            </OverLay> */}
          </CategoriesItem>
          <CategoriesItem $grid="span 1">
            <img
              {...getResponsiveImage(
                categoryImages[3],
                "(min-width: 1000px) 25vw, (min-width: 768px) 33vw, 100vw",
              )}
              alt=""
              loading="lazy"
              decoding="async"
            />
            {/* <OverLay>
              <h4>Luxury villas</h4>
              <p>
                Experience elegance and comfort with our exclusive luxury
                villas, designed for sophisticated living.
              </p>
              <Button variant={"rounded"}>
                <ArrowRightIcon size={24} />
              </Button>
            </OverLay> */}
          </CategoriesItem>
        </CategoriesContent>
      </Container>
    </Section>
  );
}

export default CategoriesSection;
