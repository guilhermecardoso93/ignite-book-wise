import { ReactNode } from "react";
import { ContainerMain, Content } from "./styles";

type DefaultLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <ContainerMain>
      <aside>sidebar</aside>
      <Content>
        {children}
      </Content>
    </ContainerMain>
  );
}
