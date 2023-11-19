import React, {useEffect} from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const ShoppingBagButton = () => (
  <UnstyledButton>
    <Icon id="shopping-bag" strokeWidth={2} size={24} />
    <VisuallyHidden>Open Cart</VisuallyHidden>
  </UnstyledButton>
);

const SearchButton = () => (
  <UnstyledButton>
    <Icon id="search" strokeWidth={2} size={24} />
    <VisuallyHidden>Perform Search</VisuallyHidden>
  </UnstyledButton>
);

const MobileMenuButton = ({ onClick }) => (
  <UnstyledButton onClick={onClick}>
    <Icon id="menu" strokeWidth={2} size={24} />
    <VisuallyHidden>Open Mobile Navigation Menu</VisuallyHidden>
  </UnstyledButton>
);

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  useEffect(() => {
    const checkScreenSize = () => {
      // Extracts the max-width value from your QUERIES object
      const tabletQuery = QUERIES.tabletAndDown;

      // window.matchMedia returns a MediaQueryList object
      const mediaQueryList = window.matchMedia(tabletQuery);

      // If the media query does not match (i.e., the window width is greater than the tablet max width),
      // then we know we are on a screen larger than a tablet and should set the mobile menu to be hidden.
      if (!mediaQueryList.matches) {
        setShowMobileMenu(false);
      }
    };

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Call the function to check on initial load as well
    checkScreenSize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sales</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <HeaderControls>
          <ShoppingBagButton>
            <Icon id="shopping-bag" strokeWidth={2} size={24}/>
          </ShoppingBagButton>
          <SearchButton>
            <Icon id="search" strokeWidth={2} size={24}/>
          </SearchButton>
          <MobileMenuButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} size={24}/>
          </MobileMenuButton>
        </HeaderControls>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        title="Mobile Navigation Menu"
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline; 
  border-bottom: 1px solid var(--color-gray-300);
  position: relative;
  overflow-x: auto;
  padding: 16px 32px; 
  
  @media ${QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    border-top: 4px solid var(--color-gray-900);
  }
  
  @media ${QUERIES.phoneAndDown} {
    padding-left: 0.64rem;
    padding-right: 0.64rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    9.2vw - 4.5rem,
    3.5rem
  );
  
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  
  &:first-of-type {
    min-width: 13.625rem;
  }

  @media ${QUERIES.tabletAndDown} {
    &:first-of-type {
      flex: revert;
    }
    
    &:last-of-type {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const HeaderControls = styled.div`
  --gapSize: 2.125rem;
  display: none;
  
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    align-items: center;
    gap: var(--gapSize);
  }

  @media ${QUERIES.phoneAndDown} {
    --gapSize: 0.64rem; 
  }
`;

export default Header;
