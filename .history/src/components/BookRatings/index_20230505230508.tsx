import { Text } from "../Typography";
import { UserRatingCard } from "../UserRatingCard";
import { Link } from "../ui/Link";
import { Container } from "./styles";

export function BookRatings() {
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
        {Array.from({ length: 10 }).map((_, index) => (
          <UserRatingCard
            key={index}
            rating={{
              rate: 2,
              user: {
                name: "Guilherme Cardoso",
                avatar_url:
                  "https://avatars.githubusercontent.com/u/79944203?v=4",
              },
              created_at: new Date(),
            }}
          />
        ))}
      </section>
    </Container>
  );
}
