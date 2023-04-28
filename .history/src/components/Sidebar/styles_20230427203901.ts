import { styled } from "../../../stitches.config";

export const Container = styled('aside', {
  width: 234,
  height: 'calc(100% - 40px)',
  margin: 20,
  background: "$gray700 url('/images/sidebar-bg.png') no-repeat center",
  backgroundSize: 'cover',
  display: 'flex',
  borderRadius: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 40,
  paddingBottom: 40,
})

