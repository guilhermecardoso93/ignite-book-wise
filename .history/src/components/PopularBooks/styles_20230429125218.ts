import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "19%",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
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