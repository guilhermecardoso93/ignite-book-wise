import { Book } from "@prisma/client";
import { Container } from "./styles";

export type BookWithAvgRating = Book & {
  avgRating: number
}

type BookCardProps = {
  book: BookWithAvgRating
}

export function BookCard({ book, ...props} : BookCardProps) {
  return (
    <Container>
      Book
    </Container>
  )
}