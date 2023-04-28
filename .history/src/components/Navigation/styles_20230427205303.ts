import Link from "next/link";
import { styled } from "../../../stitches.config";

export const Container = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$7'
})

export const NavItemContainer = styled(Link, {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  color: '$gray400',
  transition: '0.2s',

  svg: {
    marginRight: '$3'
  },

  "&:hover": {
    color: '$gra1400',
  }
})