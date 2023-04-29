import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

import { Link } from "../ui/Link";
import { BookCard, BookWithAvgRating } from "../BookCard";

import { Text } from "../Typography";
import { Container } from "./styles";

export function PopularBooks() {
  const { data: popularBooks } = useQuery<BookWithAvgRating[]>(
    ["popular-books"],
    async () => {
      const { data } = await api.get("/books/popular");
      return data?.books ?? [];
    }
  );

  return (
    <Container>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver Todos" />
      </header>
      <section>
        {popularBooks?.map((book) => (
          <BookCard key={`popular-${book.id}`} book={book} />
        ))}
      </section>
    </Container>
  );
}
