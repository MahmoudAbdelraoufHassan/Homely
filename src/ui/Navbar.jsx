import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Container } from "./Container";
import { ListIcon, PhoneIcon, XIcon } from "@phosphor-icons/react";
import Button from "../ui/Button";
import { useLocation  , NavLink} from "react-router-dom";
const Seperator = styled.div`
  background-color: var(--color-white-40);
  height: 20px;
  width: 1px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
const PhoneLink = styled.a`
  color: var(--color-white-100);
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;

  &:hover span {
    cursor: pointer;
    text-decoration: underline;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const MenuBtn = styled.button`
  outline: none;
  border: none;
  background-color: var(--color-white-100);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 30px;
  transition: background-color 0.3s;
  cursor: pointer;
  & span {
    font-size: var(--text-base-size);
    font-weight: bold;
  }
  &:hover {
    background-color: #e7e7e7;
  }
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  & span {
    font-size: 25px;
    color : var(--color-white-100);
    font-weight: var(--font-weight-semibold);
  }
`;

const LogoImg = styled.img`
  width: 40px;
`;

const Header = styled.header`
  padding: 40px 0;
  position: fixed;
  width: 100%;
  z-index: 60;
  transition: 0.3s;
  color: var(--color-white-100);
  ${({ $isScrolled}) =>
    $isScrolled &&
    css`
      background-color: var(--color-white-100);
      padding: 20px 0;
      color: var(--color-black-100);

      & ${PhoneLink} {
        color: var(--color-black-100);
      }
      & ${Seperator} {
        background-color: var(--color-black-50);
      }
      & ${MenuBtn} {
        background-color: var(--color-black-100);
        color: var(--color-white-100);
        &:hover {
          background-color: #172023c9;
        }
      }
      & ${Logo}{
      & span {
        color: var(--color-black-100);
        }
      }
    `};
  ${({$Location}) =>
    $Location &&
    css`
      background-color: var(--color-white-100);
      padding: 20px 0;
      color: var(--color-black-100);

      & ${PhoneLink} {
        color: var(--color-black-100);
      }
      & ${Seperator} {
        background-color: var(--color-black-50);
      }
      & ${MenuBtn} {
        background-color: var(--color-black-100);
        color: var(--color-white-100);
        &:hover {
          background-color: #172023c9;
        }
      }
      & ${Logo}{
      & span {
        color: var(--color-black-100);
        }
      }
    `};
`;




const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Menu = styled.nav`
  background-color: var(--color-black-100);
  position: absolute;
  height: 100vh;
  width: 40%;
  top: 0;
  right: -50%;
  transition: 0.5s;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      right: 0%;
    `}
  @media screen and (max-width: 992px) {
    width: 60%;
    right: -60%;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        right: 0%;
      `}
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    right: -100%;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        right: 0%;
      `}
  }
`;
const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 74px;
`;
const Link = styled(NavLink)`
  font-size: var(--heading-2-size);
  color: var(--color-white-40);
  cursor: pointer;
  transition: 0.5s;
`;
const Selector = styled.div`
  width: 0px;
  height: 1px;
  background-color: var(--color-primary);
  transition: 0.5s;
  transform-origin: left;
`;

const LinksItem = styled.li`
  display: flex;
  align-items: center;

   ${Link}.active {
    transform: translateX(16px);
    color: var(--color-primary);
  }
  &:has(.active) ${Selector} {
    width: 24px;
  }
`;

const BtnWrapper = styled.div`
  padding: 40px 0px;
  max-width: 520px;
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`;

const MenuInfo = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 0 74px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoTitle = styled.span`
  color: var(--color-white-40);
  font-size: var(--text-base-size);
  font-weight: var(--text-base-weight);
  letter-spacing: var(--text-base-letter-spacing);
  line-height: var(--text-base-line-height);
`;

const InfoLink = styled.a`
  color: var(--color-white-100);
  font-size: var(--text-md-size);
  font-weight: var(--text-md-weight);
  letter-spacing: var(--text-md-letter-spacing);
  line-height: var(--text-md-line-height);
`;
const InfoText = styled.span`
  color: var(--color-white-100);
  font-size: var(--text-md-size);
  font-weight: var(--text-md-weight);
  letter-spacing: var(--text-md-letter-spacing);
  line-height: var(--text-md-line-height);
`;
function Navbar() {
  const [IsScrolled, setScroll] = useState(false);
  const [IsMenuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeMenuButtonRef = useRef(null);
  const wasMenuOpen = useRef(false);
  
  const location = useLocation();
  function handleOpenMenu() {
    setMenuOpen(true);
  }
  function handleCloseMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!IsMenuOpen) {
      if (wasMenuOpen.current) menuButtonRef.current?.focus();
      wasMenuOpen.current = false;
      return;
    }

    wasMenuOpen.current = true;
    closeMenuButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [IsMenuOpen]);


  useEffect(() => {
    let frameId = 0;
    let previousScrolled = false;

    const updateScrollState = () => {
      frameId = 0;
      const isScrolled = window.scrollY > 50;

      if (isScrolled !== previousScrolled) {
        previousScrolled = isScrolled;
        setScroll(isScrolled);
      }
    };

    const handleScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateScrollState);
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);


useEffect(()=> {
  function handleCloseMenuOnNavigation(){
    window.scrollTo({
      top : 0
    });
    if(location.pathname !== location.state?.prevLocation)setMenuOpen(false);
  }
handleCloseMenuOnNavigation();
} , [location])


  return (
    <Header $isScrolled={IsScrolled} $Location={location.pathname !== "/"} >
      <Menu
        id="primary-navigation"
        aria-label="Primary navigation"
        aria-hidden={!IsMenuOpen}
        inert={!IsMenuOpen}
        $isOpen={IsMenuOpen}
      >
        <BtnWrapper>
          <Button
            ref={closeMenuButtonRef}
            type="button"
            variant={"rounded"}
            aria-label="Close navigation menu"
            onClick={handleCloseMenu}
          >
            <XIcon size={24} />
          </Button>
        </BtnWrapper>
        <LinksList>
          <LinksItem>
            <Selector />
            <Link to="/" state={{"prevLocation" : location.pathname}}>Home</Link>
          </LinksItem>
          <LinksItem>
            <Selector />
            <Link to="/properties">Properties</Link>
          </LinksItem>
          <LinksItem>
            <Selector />
            <Link to="/blog">Blog</Link>
          </LinksItem>
          <LinksItem>
            <Selector />
            <Link to="/contact">Contact</Link>
          </LinksItem>
        </LinksList>

        <MenuInfo>
          <InfoSection>
            <InfoTitle>Contact</InfoTitle>

            <InfoLink href="mailto:info@homelu.com">info@homelu.com</InfoLink>
            <InfoLink href="tel:+12124567890">+1-212-456-7890</InfoLink>
          </InfoSection>

          <InfoSection>
            <InfoTitle>Socials</InfoTitle>

            <InfoText>X / Twitter</InfoText>
            <InfoText>Facebook</InfoText>
            <InfoText>Instagram</InfoText>
          </InfoSection>
        </MenuInfo>
      </Menu>
      <Container $type="flex">
        <Logo>
          <LogoImg
            src={IsScrolled || location.pathname !== "/" ? "/DarkLogo.png" : "/WhiteLogo.png"}
            alt="Website Logo"
          />
          <span>Homely</span>
        </Logo>
        <TopBar>
          <PhoneLink href="tel:+12124567890">
            <PhoneIcon size={32} />
            <span>+1-212-456-7890 </span>
          </PhoneLink>
          <Seperator></Seperator>
          <MenuBtn
            ref={menuButtonRef}
            type="button"
            aria-expanded={IsMenuOpen}
            aria-controls="primary-navigation"
            onClick={handleOpenMenu}
          >
            <ListIcon size={24} weight="bold" />
            <span>Menu</span>
          </MenuBtn>
        </TopBar>
      </Container>
    </Header>
  );
}

export default Navbar;
