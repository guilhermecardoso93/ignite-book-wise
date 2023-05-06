import { AuthButtons } from "@/components/AuthButton";
import { Heading, Text } from "@/components/Typography";
import {
  LogoSection,
  LoginContainer,
  WelcomeSection,
} from "@/styles/pages/login";
import Head from "next/head";

export default function Login() {
  return (
    <LoginContainer>
      <Head>
        <title>Login | BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg"></link>
      </Head>
      <LogoSection>
        <img src="/images/logo.svg" alt="logo" />
      </LogoSection>
      <WelcomeSection>
        <Heading size="lg" color="gray-100">
          Boas Vindas
        </Heading>
        <Text color="gray-200">Faça seu login ou acesse como visitante</Text>
        <AuthButtons  canGuest={true}/>
      </WelcomeSection>
    </LoginContainer>
  );
}
