/* eslint-disable @next/next/no-img-element */
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { AuthButton, Container } from "./styles";

type AuthButtonsProps = {
  canGuest?: boolean;
  callbackUrl?: string;
};

export function AuthButtons({ canGuest, callbackUrl = "/" }: AuthButtonsProps) {
  const router = useRouter();

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push("/");
      return;
    }

    signIn(provider, {
      callbackUrl,
    });
  };

  return (
    <Container>
      <AuthButton onClick={() => handleSignIn("google")}>
        <img src="/images/icons/google.svg" alt="logo do Google" />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn("github")}>
        <img src="/images/icons/github.svg" alt="logo do GitHub" />
        Entrar com GitHub
      </AuthButton>
      <AuthButton onClick={() => handleSignIn()}>
        <img src="/images/icons/rocket.svg" alt="logo do Rocket" />
        Entrar como visitante
      </AuthButton>
    </Container>
  );
}
