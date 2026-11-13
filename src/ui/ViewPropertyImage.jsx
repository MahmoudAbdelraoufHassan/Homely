import styled, { css } from "styled-components"
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Container } from "./Container"
import { getResponsiveImage } from "../utils/responsiveImage";

const PropertyImageGallery = styled(Swiper)`
  width: 100%;
  height: min(72vh, 760px);
  min-height: 260px;
  margin-left: auto;
  margin-right: auto;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    background: #111;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    height: 62vh;
    min-height: 220px;
  }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 199;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 24px;
  background-color: #000000c7;
`
const CloseButton = styled.button`
  position: absolute;
  top: -25px;
  right: -10px;
  z-index: 80;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  background: #fff;
  color: #111;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
`

const GalleryPegination = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    overflow-x: auto;
    padding: 4px;
`
const GalleryPeginationImg = styled.div`
        display: block;
        flex: 0 0 80px;
        height: 80px;
        overflow: hidden;
        box-sizing: border-box;
        padding: 0;
        background: transparent;
        opacity: 0.8;
        border : 2px solid transparent;
        cursor: pointer;
        transition: opacity 0.3s;
        @media screen and (max-width:452px) {
           flex: 0 0 60px;
            height: 60px;
        }
        & img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
 ${({$active})=> {
   return $active ? css`   opacity: 1;
        border-color: white;` : css``
}}

`

const GalleryContainer = styled(Container)`
  width: 100%;
  position: relative;
  @media (max-width: 600px) {
    margin-left: 12px;
    margin-right: 12px;
  }
`
 
function ViewPropertyImage({ properyImages, imageAlts, onClose }) {
const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const appRoot = document.getElementById("root");
    const previousInert = appRoot?.inert;
    document.body.style.overflow = "hidden";
    if (appRoot) appRoot.inert = true;
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = overlayRef.current?.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements?.length) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (appRoot) appRoot.inert = previousInert;
      previousFocus?.focus?.();
    };
  }, [onClose]);

    return (
        <Overlay
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Property image gallery"
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
            
            <GalleryContainer>
              <CloseButton ref={closeButtonRef} type="button" aria-label="Close image gallery" onClick={onClose}>
              &times;
            </CloseButton>
   <PropertyImageGallery
        loop={true}
        spaceBetween={10}
         onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper)=> {
            setActiveIndex(swiper.realIndex)
        }}
      >
        
        {properyImages.map((Pimage, index)=> {
            return (
                <SwiperSlide key={Pimage.medium.src}>
                    <img
                      {...getResponsiveImage(Pimage)}
                      alt={imageAlts?.[index] || ""}
                    />
        </SwiperSlide>
        ) 
        })}
        
      </PropertyImageGallery>
      <div style={{marginTop : "12px"}}>

        <GalleryPegination  >
           {properyImages.map((imgSrc , index)=> {
               return <GalleryPeginationImg
               as="button"
               type="button"
               aria-label={`Show image ${index + 1}${imageAlts?.[index] ? `: ${imageAlts[index]}` : ""}`}
               aria-pressed={index === activeIndex}
               $active={index === activeIndex}
               key={index + 1}
               onClick={() => swiperRef.current.slideToLoop(index)}>
                    <img {...getResponsiveImage(imgSrc, "80px")} alt="" />
                </GalleryPeginationImg>
                })}
        </GalleryPegination>
          </div>
            </GalleryContainer>
        </Overlay>   
    )
}

export default ViewPropertyImage
