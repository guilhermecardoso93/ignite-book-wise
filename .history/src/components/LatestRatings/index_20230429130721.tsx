import { ChartLineUp } from "@phosphor-icons/react";
import { PageTitle } from "../ui/PageTitle";
import { Container } from "./style";
import { Text } from "../Typography";
import { RatingCard } from "../RatingCard";

export function LatestRatings() {
  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />
      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard
            key={i}
            rating={{
              id: "aa",
              rate: 4,
              user: {
                id: "idsbnfklsbfk",
                name: "Guilherme",
                avatar_url: "https://github.com/guilhermecardoso93.png",
                email: "guilhermecardosogui@hotmail.com",
                created_at: new Date(),
              },
              book: {
                id: "nsdlfkghs",
                name: "Guilherme",
                author: "GRRM",
                summary: "",
                cover_url: "https://github.com/guilhermecardoso93.png",
                total_pages: 100,
                created_at: new Date(),
              },
              created_at: new Date(),
              description: 'ndklfgnsdkfns',
              book_id: 'sdbfilsdfi',
              user_id: 'fnsdkjflnskjdfn'
            }}
          />
        ))}
      </section>
    </Container>
  );
}
