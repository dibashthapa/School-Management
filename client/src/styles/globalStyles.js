import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 .text--bold {
    font-family: ${p => p.theme.font.primaryBold};
  }
  .text--light {
    font-family: ${p => p.theme.font.primaryLight};
  }
  .text--medium {
    font-family: ${p => p.theme.font.primaryMedium};
  }
  .color--error {
    color: ${p => p.theme.colors.red} !important;
  }
  .text--error {
    font-size: 14px;
    color: ${p => p.theme.colors.red};
  }
  .color--white {
    color: ${p => p.theme.colors.white};
  }
  .color--gray {
    color: ${p => p.theme.colors.gray};
  }
  .color--black {
    color: ${p => p.theme.colors.black};
  }
  .color--brand {
    color: ${p => p.theme.colors.primary};
  }
`
