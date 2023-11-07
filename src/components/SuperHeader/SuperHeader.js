import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInputWrapper>
        <SearchInput />
      </SearchInputWrapper>
      <HelpLink href="/help">Help</HelpLink>
      <ShoppingBagIcon>
        <Icon id="shopping-bag" strokeWidth={1} />
      </ShoppingBagIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  @media ${QUERIES.tabletAndDown} {
    height: 4px;
  }
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
  
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const SearchInputWrapper = styled.div`
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const ShoppingBagIcon = styled(UnstyledButton)`
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

export default SuperHeader;
