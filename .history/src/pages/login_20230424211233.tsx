import { AuthButtons } from "@/components/AuthButton";
import { Heading, Text } from "@/components/Typography";
import {
  LogoSection,
  LoginContainer,
  WelcomeSection,
} from "@/styles/pages/login";

export default function Login() {
  return (
    <LoginContainer>
      <LogoSection>
        <img src="/images/logo.svg" alt="logo" />
      </LogoSection>
      <WelcomeSection>
        <Heading size="lg" color="gray-100">
          Boas Vindas
        </Heading>
        <Text color="gray-200">Faça seu login ou acesse como visitante</Text>
        <AuthButtons />
      </WelcomeSection>
    </LoginContainer>
  );
}
