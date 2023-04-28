import { AuthButton, Container } from "./styles";

export function AuthButtons() {
  return (
    <Container>
      <AuthButton>
        <img src="/images/icons/google.svg" alt="logo do Google" />
        Entrar com Google
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/github.svg" alt="logo do GitHub" />
        Entrar com GitHub
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/rocket.svg" alt="logo do Rocket" />
        Entrar como visitante
      </AuthButton>
    </Container>
  );
}
