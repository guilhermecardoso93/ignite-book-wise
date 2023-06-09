import { styled } from "../../../stitches.config";

export const LoginContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',
  padding: 20,
  minHeight: '100vh'
})

export const LogoSection = styled('section', {
  width: '100%',
  height: '100%',
  background:'url(./imagens/logo-section-bg.png) no-repeat center',
  backgroundSize: 'cover',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10
})