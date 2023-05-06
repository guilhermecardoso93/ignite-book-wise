import { ChartLineUp } from "@phosphor-icons/react";
import { PageTitle } from "../ui/PageTitle";
import { Container } from "./style";
import { Text } from "../Typography";
import { RatingCard, RatingWithAuthorAndBook } from "../RatingCard";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

export function LatestRatings() {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>(["latest-ratings"], async () => {
    const { data } = await api.get("/ratings/latest");
    return data?.ratings ?? [];
  });
  
  const { data: latestUserRating } = useQuery<RatingWithAuthorAndBook>(["latest-user-rating", userId], async () => {
    const { data } = await api.get("/ratings/user-latest")
    return data?.rating ?? null
  }, {
    enabled: !!userId
  })

  return (
    <Container>
      <PageTitle title="Início" icon={<ChartLineUp size={32} />} css={{
        marginBottom: 40
      }} />

      {latestUserRating && (
        <LatestContainer>
          <header>
            <Text size="sm">Sua última leitura</Text>

            <Link text="Ver todas" href={`/profile/${userId}`} />
          </header>

          <RatingCard variant="compact" rating={latestUserRating} />
        </LatestContainer>
      )}

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {ratings?.map(rating => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  );
}
