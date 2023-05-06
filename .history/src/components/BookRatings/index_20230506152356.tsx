import { useState } from "react";
import { RatingWithAuthorAndBook } from "../RatingCard";
import { Text } from "../Typography";
import { UserRatingCard } from "../UserRatingCard";
import { Link } from "../ui/Link";
import { Container } from "./styles";
import { RatingForm } from "../RatingForm";
import { useSession } from "next-auth/react";

type BookRatingsProps = {
  ratings: RatingWithAuthorAndBook[];
  bookId: string;
};

export function BookRatings({ ratings, bookId }: BookRatingsProps) {
  const { status, data: session } = useSession();
  const [showForm, setShowForm] = useState(false)

  const isAuthenticated = status === "authenticated"

  const handleRate = () => {
    if(!isAuthenticated) return;
    setShowForm(true)
  }

  const RatingWrapper = isAuthenticated ? Fragment : LoginDialog

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const canRate = ratings.every(x => x.user_id !== session?.user?.id);

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        {canRate && (
          <RatingWrapper>
            <Link
              withoutIcon
              onClick={handleRate}
              text="Avaliar"
              color="purple"
            />
          </RatingWrapper>
        )}
      </header>

      <section>
        {showForm && (
          <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />
        )}
        {sortedRatingsByDate.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  );
}
