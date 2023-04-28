import { ReactNode } from "react";
import { ContainerMain, Content } from "./styles";
import Head from "next/head";

type DefaultLayoutProps = {
  children: ReactNode;
  title: string;
};

export function DefaultLayout({
  children,
  title,
  ...rest
}: DefaultLayoutProps) {
  return (
    <ContainerMain>
      <Head>
        <title>{title} | BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg"></link>
      </Head>
      <aside>sidebar</aside>
      <Content {...rest}>{children}</Content>
    </ContainerMain>
  );
}
