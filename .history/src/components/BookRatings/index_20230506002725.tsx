import { RatingWithAuthorAndBook } from "../RatingCard";
import { Text } from "../Typography";
import { UserRatingCard } from "../UserRatingCard";
import { Link } from "../ui/Link";
import { Container } from "./styles";

type BookRatingsProps = {
  ratings: RatingWithAuthorAndBook[]
}

export function BookRatings({ ratings } : BookRatingsProps) {
  function handleRate() {
    console.log("oi");
  }

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link onClick={handleRate} text="Avaliar" withoutIcon />
      </header>

      <section>
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
