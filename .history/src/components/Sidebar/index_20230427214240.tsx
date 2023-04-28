import { signOut, useSession } from "next-auth/react";
import { Navigation } from "../Navigation";
import { Container, LoginButton, UserDetails } from "./styles";
import { SignIn, SignOut } from "@phosphor-icons/react";
import { Text } from "../Typography";
import { Avatar } from "../ui/Avatar";
import Image from "next/image";

export function Sidebar() {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <Container>
      <div>
        <Image source="/images/logo.svg" alt="logo" className="logo" />
        <Navigation />
      </div>
      <footer>
        {!user ? (
          <LoginButton href="/login">
            Fazer Login
            <SignIn size={24} />
          </LoginButton>
        ) : (
          <div>
            <UserDetails href="/login">
              <Avatar size="sm" src={user.avatar_url} alt={user.name} />
              <Text size="sm">{user.name}</Text>
              <SignOut size={24} color="#f75a68" onClick={() => signOut()} />
            </UserDetails>
          </div>
        )}
      </footer>
    </Container>
  );
}
