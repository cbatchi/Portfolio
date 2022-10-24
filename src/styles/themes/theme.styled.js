import React from "react"
import { ThemeProvider } from "styled-components"

export const theme = {
  colors: {
    title: "#333333",
    titleDark: "#000000",
    text: "#757575",
    body: "#FAFAFA",
    container: "#ffffff",
  },
  font: {
    family: {
      body: '"Poppins", sans-serif',
    },
    size: {
      big: "3.5rem",
      h1: "2.5rem",
      h2: "1.5rem",
      h3: "1.25rem",
      normal: "1rem",
      small: "0.875rem",
      smaller: ".813rem",
      tiny: ".625rem",
    },
    weight: {
      normal: 400,
      meduim: 500,
      semibold: 600,
      bold: 700,
    },
  },
  block: {
    margin: {
      b0_25: ".25rem", //margin-bottom: 0.25rem
      b0_5: ".5rem", //margin-bottom: 0.5rem
      b0_75: ".75rem", //margin-bottom: 0.75rem
      b1: "1rem", //margin-bottom: 1rem
      b1_5: "1.5rem", //margin-bottom: 1.5rem
      b2: "2rem", //margin-bottom: 2rem
      b2_5: "2.5rem", //margin-bottom: 2.5rem
      b3: "3rem", //margin-bottom: 3rem
    },
    zIndex: {
      tooltip: 10,
      fixed: 100,
      modal: 1000,
    },
    height: {
      header: "3rem"
    }
  },
  medias: {
    lg: "992px", // Size for differents breakpoints lg(large screen) 
    md: "768px", // Size for differents breakpoints md(meduim screen) 
    sm: "576px", // Size for differents breakpoints sm(small screen) 
    xs: "350px" // Size for differents breakpoints  xs(extra small screeen)
  },
}

export const devices = {
  lg: `(max-width: ${theme.medias.lg})`,
  md: `(max-width: ${theme.medias.md})`,
  sm: `(max-width: ${theme.medias.sm})`,
  xs: `(max-width: ${theme.medias.xs})`,
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
