import { useState } from "react";
import { RatingWithAuthorAndBook } from "../RatingCard";
import { Text } from "../Typography";
import { UserRatingCard } from "../UserRatingCard";
import { Link } from "../ui/Link";
import { Container } from "./styles";
import { RatingForm } from "../RatingForm";

type BookRatingsProps = {
  ratings: RatingWithAuthorAndBook[]
  bookId: string
}

export function BookRatings({ ratings, bookId } : BookRatingsProps) {
  const [ showForm, setShowForm ] = useState(false)
  function handleRate() {
    setShowForm(true)
  }

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link onClick={handleRate} text="Avaliar" withoutIcon />
      </header>

      <section>
        {showForm && (
          <RatingForm bookId={bookId} onCancel={() => setShowForm(false)}/>
        ) }
        {ratings.map((rating) => (
          <UserRatingCard
            key={rating.id}
            rating={rating}
          />
        ))}
      </section>
    </Container>
  );
}
