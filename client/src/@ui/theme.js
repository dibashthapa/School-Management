const colors = {
    blue: "#2c8ef8",
    indigo: "#727cf5",
    purple: "#6b5eae",
    pink: "#ff679b",
    red: "#fa5c7c",
    orange: "#fd7e14",
    yellow: "#ffbc00",
    green: "#0acf97",
    teal: "#02a8b5",
    cyan: "#39afd1",
    white: "#fff",
    gray: "#98a6ad",
    grayDark: "#343a40",
    primary: "#586FFA",
    secondary: "#6c757d",
  offwhite: '#EAEEFF',
    success: "#0acf97",
    info: "#39afd1",
    warning: "#ffbc00",
    danger: "#fa5c7c",
    light: "#e3eaef",
    dark: "#313a46",
};

const size = {
  mobileS: "320px",
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  desktopL: "1440px",
};

const space = {
  top:40 , 
  bottom:40 , 
  left:25 , 
  right:25, 
  my:'20px',
  mx:'20px',
  small:5
}

const theme = {
  colors,
  space , 
  media: {
    mobileS: `max-width: ${size.mobileS}`,
    mobile: `max-width: ${size.mobile}`,
    tablet: `max-width: ${size.tablet}`,
    desktop: `max-width: ${size.desktop}`,
    desktopL: `max-width: ${size.desktopL}`,
  },
};

export default theme;
