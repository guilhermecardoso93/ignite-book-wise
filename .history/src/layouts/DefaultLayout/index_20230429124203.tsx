import { ReactNode } from "react";
import { Container, Content } from "./styles";
import Head from "next/head";
import { Sidebar } from "@/components/Sidebar";

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
    <Container>
      <Head>
        <title>{`${title} | BookWise`}</title>
        <link rel="shortcut icon" href="/favicon.svg"></link>
      </Head>
      <Sidebar />
      <Content {...rest}>{children}</Content>
    </Container>
  );
}
