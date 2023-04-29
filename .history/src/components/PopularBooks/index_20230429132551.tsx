import { BookCard } from "../BookCard";
import { Text } from "../Typography";
import { Link } from "../ui/Link";
import { Container } from "./styles";

export function PopularBooks() {
  return (
    <Container>
      <header>
        <Text size='sm'>Livros populares</Text>
        <Link href='/explore' text='Ver Todos' />
      </header>
      <section>
       {Array.from({length: 4}).map((_, index) => (
        <BookCard key={`popular-${index}`} />
       ))}
      </section>
    </Container>
  )
}