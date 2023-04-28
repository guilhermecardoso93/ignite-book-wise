import { signOut, useSession } from "next-auth/react";
import { Navigation } from "../Navigation";
import { Container, LoginButton, UserDetails } from "./styles";
import { SignIn, SignOut } from "@phosphor-icons/react";
import { Text } from "../Typography";
import Image from "next/image";
import { Avatar } from "../ui/Avatar";
import { useRouter } from "next/router";

export function Sidebar() {
  const { data: session } = useSession();
  const router = useRouter();

  const user = session?.user;

  function handleOpenProfile(){
    router.push(`/profile/${user?.id}`)
  }

  return (
    <Container>
      <div>
        <Image
          src="/images/logo.svg"
          alt="logo"
          className="logo"
          width={80}
          height={80}
        />
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
              <Avatar
                size="sm"
                src={user?.avatar_url}
                alt={user?.name}
                onClick={handleOpenProfile()}
                css={{ cursor: "pointer" }}
              />
              <Text size="sm">{user.name}</Text>
              <SignOut size={24} color="#f75a68" onClick={() => signOut()} />
            </UserDetails>
          </div>
        )}
      </footer>
    </Container>
  );
}
