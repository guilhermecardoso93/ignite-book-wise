import { ChartLineUp, Binoculars } from "@phosphor-icons/react";
import { Container } from "./styles";

const NAV_ITEMS = [
  {
    label: 'Início',
    href: '/',
    icon: <ChartLineUp size={24} />
  },
  {
    label: 'Explorar',
    href: '/explore',
    icon: <Binoculars size={24} />
  },
]

export function Navegation() {
  return (
    <Container>

    </Container>
  )
}