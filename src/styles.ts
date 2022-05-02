import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--gray900);
  }

 
  :root {

    /* FontSizes */
    --large: 2rem; // 32px
    --bigger: 1.5rem; // 24px
    --big: 1.125rem; // 18px
    --default: 1rem; // 16px
    --medium: 0.875rem; // 14px
    --small: 0.75rem; // 12px
    --smaller: 0.6875rem; // 11px
    --tiny: 0.625rem; // 10px

    /* Colors */
   --gray900: #181B23;
   --gray800: #1F2029;
   --gray700: #353646;
   --gray600: #4B4D63;
   --gray500: #616480;
   --gray400: #797D9A;
   --gray300: #9699B0;
   --gray200: #B3B5C6;
   --gray100: #D1D2D6;
   --gray50: #EEEEF2;
   --buttonSecondary: #707076;
   --blue900: #1A365D;
   --blue800: #2A4365;
   --blue700: #2C5282;
   --blue600: #2B6CB0;
   --blue500: #3182CE;
   --blue400: #4299E1;
   --blue300: #63B3ED;
   --blue200: #90CDF4;
   --blue100: #BEE3F8;
   --blue50: #EBF8FF;
  }
  
`;

export default Global;
