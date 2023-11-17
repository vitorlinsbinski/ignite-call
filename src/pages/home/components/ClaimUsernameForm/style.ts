import { Box, styled, Text } from "@ignite-ui/react";

export const Form = styled(Box, {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "$2",
  marginTop: "$4",
  padding: "$4",

  "@media(max-width: 720px)": {
    gridTemplateColumns: "1fr",
  },
});

export const FormAnnotation = styled("div", {
  marginTop: "$4",

  [`> ${Text}`]: {
    color: "$gray400",
  },
});

export const FormError = styled(Text, {
  color: "#f75a68",
});
