import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.fontFamily};
  }

  :root {
    background: ${({ theme }) => theme.colors.background};
    font-size: 16px;
  }
  
  #portal {
    position: absolute;
  };
  
  h1, h2, h3, h4, h5, span, p {
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fonts.fontSize.large};
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fonts.fontSize.medium};
  }

  h5 {
    font-size: ${({ theme }) => theme.fonts.fontSize.regular};
  }
    
  h6 {
    font-size: ${({ theme }) => theme.fonts.fontSize.small};
  }

  span, p {
    font-size: ${({ theme }) => theme.fonts.fontSize.regular};
  }
  

`;

export default GlobalStyles;
