import { styled, Heading, Text } from "@ignite-ui/react";

export const Container = styled("div", {
  maxWidth: "calc(100vw - (100vw - 1160px) / 2)",
  height: "100vh",
  width: "100%",
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  gap: "$20",

  overflow: "hidden",

  "@media(max-width: 720px)": {
    flexDirection: "column",
    maxwidth: "1260px",
    margin: "0 auto",
    justifyContent: "center",
    gap: "$12",
    padding: "0 $4",
  },
});

export const Hero = styled("div", {
  maxWidth: 480,
  padding: "0 $10",
  position: "relative",

  [`${Heading}`]: {},

  [`${Text}`]: {
    marginTop: "$2",
    color: "$gray200",
    width: "100%",
  },

  "@media(max-width: 720px)": {
    padding: 0,
    textAlign: "center",

    [`${Heading}`]: {
      fontSize: "$6xl",
    },

    [`${Text}`]: {
      margin: "0 auto",
      marginTop: "$2",
      fontSize: "$lg",
      maxWidth: "90%",
    },
  },

  "@media(max-width: 480px)": {
    padding: 0,
    textAlign: "center",

    [`${Heading}`]: {
      fontSize: "$5xl",
    },
  },
});

export const HeroBg = styled("div", {
  position: "absolute",
  overflow: "hidden",
  top: -150,
  zIndex: 0,

  "@media(max-width: 720px)": {
    left: -150,
  },
});

export const Preview = styled("div", {
  img: {
    position: "relative",
    zIndex: 1,
  },

  paddingRight: "$8",
  overflow: "hidden",

  "@media(max-width: 720px)": {
    img: {
      objectFit: "contain",
      width: "100%",
      height: "auto",
    },

    paddingRight: "0",
  },
});
