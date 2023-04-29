import { BookCard } from "../BookCard";
import { Text } from "../Typography";
import { Link } from "../ui/Link";
import { Container } from "./styles";

export function PopularBooks() {
  return (
    <Container>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver Todos" />
      </header>
      <section>
        {Array.from({ length: 4 }).map((_, index) => (
          <BookCard
            key={`popular-${index}`}
            book={{
              avgRating: 4,
              author: "GRRM",
              cover_url: "https://github.com/guilhermecardoso93.png",
              id: "nsdlfkghs",
              created_at: new Date(),
              name: "Guilherme",
              summary: "Lorem fdkçgnkdsfngklfsdngkdnsfkgndfskgndskf",
              total_pages: 100,
            }}
            size="md"
          />
        ))}
      </section>
    </Container>
  );
}
