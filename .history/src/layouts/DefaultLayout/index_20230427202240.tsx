import { ReactNode } from "react";
import { ContainerMain, Content } from "./styles";

type DefaultLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout({ children, ...rest }: DefaultLayoutProps) {
  return (
    <ContainerMain>
      <aside>sidebar</aside>
      <Content
        {...rest}
      >
        {children}
      </Content>
    </ContainerMain>
  );
}
