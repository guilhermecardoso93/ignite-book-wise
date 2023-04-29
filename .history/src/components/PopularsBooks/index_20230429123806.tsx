import { Text } from "../Typography";
import { Link } from "../ui/Link";
import { Container } from "./styles";

export function PopularsBooks() {
  return (
    <Container>
      <header>
        <Text size='sm'>Livros populares</Text>
        <Link href='/explore' text='Ver Todos' />
      </header>
    </Container>
  )
}