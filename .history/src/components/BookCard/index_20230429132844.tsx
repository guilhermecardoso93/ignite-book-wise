import { Book } from "@prisma/client";
import { Container } from "./styles";

export type BookWithAvgRating = Book & {
  avgRating: number
}

type BookCardProps = {
  book: BookWithAvgRating,
  size: 'md' | 'lg'
}

export function BookCard({ book, ...props} : BookCardProps) {
  return (
    <Container>
      Book
    </Container>
  )
}