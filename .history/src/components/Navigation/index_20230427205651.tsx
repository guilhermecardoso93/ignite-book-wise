import { ChartLineUp, Binoculars } from "@phosphor-icons/react";
import { Container, NavItemContainer } from "./styles";

const NAV_ITEMS = [
  {
    label: "Início",
    href: "/",
    icon: <ChartLineUp size={24} />,
  },
  {
    label: "Explorar",
    href: "/explore",
    icon: <Binoculars size={24} />,
  },
];

export function Navigation() {
  return (
    <Container>
      {NAV_ITEMS.map(({ label, href, icon }) => (
        <NavItemContainer href={href} key={label} active>
          {icon}
          {label}
        </NavItemContainer>
      ))}
    </Container>
  );
}
