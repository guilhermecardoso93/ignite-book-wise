import { ChartLineUp, Binoculars } from "@phosphor-icons/react";
import { Container, NavItemContainer } from "./styles";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <Container>
      {NAV_ITEMS.map(({ label, href, icon }) => (
        <NavItemContainer
          href={href}
          key={label}
          active={router.asPath === href}
        >
          {icon}
          {label}
        </NavItemContainer>
      ))}
    </Container>
  );
}
