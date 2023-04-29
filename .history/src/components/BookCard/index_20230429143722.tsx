import { Book } from "@prisma/client";
import { BookImage, Container } from "./styles";

export type BookWithAvgRating = Book & {
  avgRating: number;
};

type BookCardProps = {
  book: BookWithAvgRating;
  size: "md" | "lg";
};

export function BookCard({ book, size = "md", ...props }: BookCardProps) {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 151,
    },
  };

  const currentSize = IMAGE_SIZES[size]
  return (
    <Container>
      <BookImage
        width={IMAGE_SIZES[size].width}
        height={IMAGE_SIZES[size].height}
        alt={book.name}
        src={book.cover_url}
        css={{
          midWidth: currentSize.width
        }}
      />
    </Container>
  );
}
