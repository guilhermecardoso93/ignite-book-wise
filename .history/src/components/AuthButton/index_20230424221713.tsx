/* eslint-disable @next/next/no-img-element */
import { signIn } from "next-auth/react";
import { AuthButton, Container } from "./styles";
import { useRouter } from "next/router";

type AuthButtonProps = {
  callbackUrl?: string;
}

export function AuthButtons({callbackUrl = '/'}: AuthButtonProps) {
  const route = useRouter()

  function handleSignIn(provider: string){
    if(!provider) {
      route.push(callbackUrl)
      return 
    }
    
    signIn(provider, {
      callbackUrl
    })
  }


  return (
    <Container>
      <AuthButton onClick={() => handleSignIn('google')}>
        <img src="/images/icons/google.svg" alt="logo do Google" />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn('github')}>
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
