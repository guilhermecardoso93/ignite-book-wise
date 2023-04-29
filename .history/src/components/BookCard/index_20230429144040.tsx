import { Book } from "@prisma/client";
import { BookImage, BookName, Container } from "./styles";

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
        src="https://avatars.githubusercontent.com/u/79944203?v=4"
        css={{
          midWidth: currentSize.width
        }}
      />
      <BookName size='xs'>
        {book.name}
      </BookName>
    </Container>
  );
}
