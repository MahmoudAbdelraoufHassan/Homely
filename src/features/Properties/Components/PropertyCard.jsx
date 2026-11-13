import {
  BedIcon,
  BathtubIcon,
  ArrowsOutCardinalIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { getResponsiveImage } from "../../../utils/responsiveImage";

const OverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  display: flex;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  & a {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }
`;

const Property = styled.div`
  border-radius: 16px;
  overflow: hidden;
  flex-basis: calc((100% / 3) - 40px);
  border: 1px solid var(--color-black-10);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  &:hover {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-10px);
  }
  &:hover ${OverLay} {
    opacity: 1;
    pointer-events: all;
  }
  @media screen and (max-width: 1400px) {
    flex-basis: auto;
  }
  @media screen and (max-width: 950px) {
    flex-basis: auto;
  }
`;
const PropertyImage = styled.div`
  position: relative;
  max-height: 300px;

  & img {
    /* max-width: 100%; */
    min-height: 300px;
    max-height: 300px;
    /* width: 100%; */
    object-fit: cover;
    width: 100%;
  }
`;

const PropertyContent = styled.div`
  background-color: var(--color-white-100);
  padding: 24px;
`;
const PropertyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  & h3 {
    font-size: var(--text-lg-size);
    font-weight: var(--text-lg-weight);
    letter-spacing: var(--text-lg-letter-spacing);
    line-height: var(--text-lg-line-height);
  }
  & p {
    color: var(--color-black-50);
    font-size: var(--text-base-size);
    letter-spacing: var(--text-base-letter-spacing);
    line-height: var(--text-base-line-height);
    font-weight: var(--text-base-weight);
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
`;
const Price = styled.span`
  background-color: rgba(7, 190, 138, 0.1);
  padding: 8px 20px;
  border-radius: 30px;
  color: var(--color-primary);
  white-space: nowrap;
`;

const DetailsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--color-white-100);
  color: var(--color-black-100);
`;
const PropertyInfo = styled.div`
  display: flex;
  gap: clamp(16px, 5vw, 32px);
`;
const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & span {
    font-size: var(--text-base-size);
    letter-spacing: var(--text-base-letter-spacing);
    line-height: var(--text-base-line-height);
    font-weight: var(--text-base-weight);
  }
`;
const Seperator = styled.div`
  background-color: var(--color-black-10);
  height: 44px;
  width: 1px;
`;


function PropertyCard({ property }) {
  const { id, name, address, city, price, beds, baths, area, images } =
    property;

  return (
    <Property>
      <PropertyImage>
        <img
          {...getResponsiveImage(
            images[0],
            "(min-width: 1100px) 33vw, (min-width: 650px) 50vw, 100vw",
          )}
          alt={name}
          loading="lazy"
        />
        <OverLay>
          <DetailsLink to={`/properties/${id}`} aria-label={`View ${name}`}>
            <ArrowRightIcon size={24} />
          </DetailsLink>
        </OverLay>
      </PropertyImage>
      <PropertyContent>
        <PropertyHeader>
          <div>
            <h3>{name}</h3>
            <p>{address}, {city}</p>
          </div>
          <Price>{currencyFormatter.format(price)}</Price>
        </PropertyHeader>
        <PropertyInfo>
          <InfoItem>
            <BedIcon size={20} />
            <span>{beds} Bedrooms</span>
          </InfoItem>
          <Seperator></Seperator>
          <InfoItem>
            <BathtubIcon size={20} />
            <span>{baths} Bathrooms</span>
          </InfoItem>
          <Seperator></Seperator>
          <InfoItem>
            <ArrowsOutCardinalIcon size={20} />
            <span>{area}m²</span>
          </InfoItem>
        </PropertyInfo>
      </PropertyContent>
    </Property>
  );
}

export default PropertyCard;
