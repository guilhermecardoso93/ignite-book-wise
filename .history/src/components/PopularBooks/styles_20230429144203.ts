import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "130%",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginTop: 40,

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  "> section": {
    display: "flex",
    flexDirection: "column",
    gap: "$3",
  }
})

