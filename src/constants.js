const BREAKPOINTS = {
  laptopMax: 81.25,
  tabletMax: 59.375,
  phoneMax: 37.5,
};

export const QUERIES = {
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
};
