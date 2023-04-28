import { styled } from "../../../stitches.config";

export const ContainerMain = styled('main', {
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr'
})

export const Content = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: 996,
  margin: '0 auto',
  paddingTop: 72
})