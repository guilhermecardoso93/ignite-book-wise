import { AuthButton, Container } from "./styles";

export function AuthButtons(){
  return (
    <Container>
      <AuthButton>
        Entrar com Google
      </AuthButton>
      <AuthButton>
        Entrar com GitHub
      </AuthButton>
      <AuthButton>
        Entrar como visitante
      </AuthButton>
    </Container>
  )
}