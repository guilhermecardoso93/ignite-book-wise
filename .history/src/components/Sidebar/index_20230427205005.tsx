import { Navigation } from "../Navigation";
import { Container } from "./styles";

export function Sidebar() {
  return (
    <Container>
      <div>
        <img src='/images/logo.svg' alt='logo' className='logo' />
        <Navigation />
      </div>
    </Container>
  )
}