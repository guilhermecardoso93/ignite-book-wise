import { useSession } from "next-auth/react";
import { Navigation } from "../Navigation";
import { Container } from "./styles";

export function Sidebar() {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <Container>
      <div>
        <img src='/images/logo.svg' alt='logo' className='logo' />
        <Navigation />
      </div>
      <footer>
        {
          !user ? (
            <div>

            </div>
          ) : (
            <div>
              
            </div>
          )
        }
      </footer>
    </Container>
  )
}