//import { useToggleShowMore } from "@/hooks/useToggleShowMore"
import { getRelativeTimeString } from "@/utils/getRelativeTimeString"
import { Book, Rating, User } from "@prisma/client"
import Link from "next/link"
//import { RatingStars } from "../PopularBooks/RatingStars"
import { Heading, Text } from "../Typography"
import { Avatar } from "../ui/Avatar"
import { BookContent, BookDetails, BookImage, CompactDetails, Container, ToggleShowMoreButton, UserDetails } from "./styles"

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingWithAuthorAndBook
  //variant?: "default" | "compact"
}


export function RatingCard({ rating }: RatingCardProps) {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  return (
    <Container>
      <UserDetails>
      <section>
            <Link href={`/profile/${rating.user_id}`}>
              <Avatar src={`${rating.user.avatar_url}`} alt={rating.user.name}  />
            </Link>
            <div>
              <Text>{rating.user.name}</Text>
              <Text size="sm" color="gray-400">{distance}</Text>
            </div>
          </section>
      </UserDetails>
    </Container>
  );
}
