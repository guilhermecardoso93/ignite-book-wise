import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  

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

