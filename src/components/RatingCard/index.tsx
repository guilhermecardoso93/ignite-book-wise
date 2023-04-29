import { Rating, User, Book } from "@prisma/client";
import { Avatar } from "../ui/Avatar";
import { Container, UserDetails } from "./styles";
import Link from "next/link";
import { Text } from "../Typography";

export type RatingWithAuthorAndBook = Rating & {
  user: User;
  book: Book;
};

type RatingCardProps = {
  rating: RatingWithAuthorAndBook;
};

export function RatingCard({ rating }: RatingCardProps) {
  return (
    <Container>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
          </Link>
          <div>
            <Text>{rating.user.name}</Text>
            <Text size='sm' color='gray-400'></Text>
          </div>
        </section>
      </UserDetails>
    </Container>
  );
}
