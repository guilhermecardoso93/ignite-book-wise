import { ReactNode } from "react";
import { ContainerMain, Content } from "./styles";
import Head from "next/head";

type DefaultLayoutProps = {
  children: ReactNode;
  title: string
};

export function DefaultLayout({ children, title, ...rest }: DefaultLayoutProps) {
  return (
    <ContainerMain>
      <Head>`${title}` | BookWise</Head>
      <aside>sidebar</aside>
      <Content {...rest}>{children}</Content>
    </ContainerMain>
  );
}
