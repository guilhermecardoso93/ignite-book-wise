import { styled } from "../../../stitches.config";

export const Container = styled('div', {

})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  marginBottom: '$8',

  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '$4'
  }
})