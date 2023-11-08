import React, {useEffect} from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const ShoppingBagButton = () => (
  <UnstyledButton>
    <Icon id="shopping-bag" strokeWidth={2} size={24} />
  </UnstyledButton>
);

const SearchButton = () => (
  <UnstyledButton>
    <Icon id="search" strokeWidth={2} size={24} />
  </UnstyledButton>
);

const MobileMenuButton = ({ onClick }) => (
  <UnstyledButton onClick={onClick}>
    <Icon id="menu" strokeWidth={2} size={24} />
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
        <Logo />
        <Side />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
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
  align-items: center;
  //padding: 25px 0;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  position: relative;
  overflow-x: auto;
  
  @media ${QUERIES.tabletAndDown} {
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1.3rem,
    3.5vw - 1rem,
    3rem
  );
  
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  
  &:first-of-type {
    min-width: 218px;
  }


  @media ${QUERIES.tabletAndDown} {
    &:last-of-type {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;

  &:first-of-type {
    color: ${COLORS.secondary};
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
