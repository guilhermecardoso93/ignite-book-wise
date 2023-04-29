import { Book } from "@prisma/client";
import { BookImage, Container } from "./styles";

export type BookWithAvgRating = Book & {
  avgRating: number
}

type BookCardProps = {
  book: BookWithAvgRating,
  size: 'md' | 'lg'
}

export function BookCard({ book, size= 'md', ...props} : BookCardProps) {
  const IMAGE_SIZES = {
    
  }
  return (
    <Container>
      <BookImage />
    </Container>
  )
}