import { Rating, User, Book } from "@prisma/client";
import { Avatar } from "../ui/Avatar";
import { Container, UserDetails } from "./styles";
import Link from "next/link";
import { Text } from "../Typography";
import { getRelativeTimeString } from "@/utils/getRelativeTimeString";

export type RatingWithAuthorAndBook = Rating & {
  user: User;
  book: Book;
};

type RatingCardProps = {
  rating: RatingWithAuthorAndBook;
};

export function RatingCard({ rating }: RatingCardProps) {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  return (
    <Container>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
          </Link>
          <div>
            <Text>{rating.user.name}</Text>
            <Text size='sm' color='gray-400'>{distance}</Text>
          </div>
        </section>
      </UserDetails>
    </Container>
  );
}
