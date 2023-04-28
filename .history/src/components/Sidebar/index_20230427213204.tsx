import { useSession } from "next-auth/react";
import { Navigation } from "../Navigation";
import { Container, LoginButton } from "./styles";
import { SignIn } from "@phosphor-icons/react";

export function Sidebar() {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <Container>
      <div>
        <img src="/images/logo.svg" alt="logo" className="logo" />
        <Navigation />
      </div>
      <footer>
        {!user ? (
          <LoginButton>
            Fazer Login
            <SignIn size={24} />
          </LoginButton>
        ) : (
          <div></div>
        )}
      </footer>
    </Container>
  );
}
