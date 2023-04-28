import { ContainerMain, Content } from "./styles";

type DefaultLayoutProps = {
  children: boolean;
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
