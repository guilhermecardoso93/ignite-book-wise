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
        {Array.from({length:20}).map((_, i) => (
          <RatingCard  key={i} rating={{
            id: 'aa',
            rate: 4,
            user: {
              name: 'Guilherme',
              avatar_url: 'github.com/guilhermecardoso93.png',
              email:'guilhermecardosogui@hotmail.com',
              id: 'idsbnfklsbfk',
              created_at: new Date(),
            },
            book: {
              author: 'GRRM',
              cover_url: 'github.com/guilhermecardoso93.png',
              id: 'nsdlfkghs',
              name: 'Guilherme',
              summary: 'dskfgsdf',
              total_pages: 899,
              created_at: new Date()
            },
            created_at: new Date(),
          }}/>
        ))}
      </section>
    </Container>
  );
}
