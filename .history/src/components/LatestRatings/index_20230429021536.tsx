import { ChartLineUp } from "@phosphor-icons/react";
import { PageTitle } from "../ui/PageTitle";
import { Container } from "./style";

export function LatestRatings() {
  return (
    <Container>
        <PageTitle 
          title='Início'
          icon={<ChartLineUp size={32} />}
        />
    </Container>
  )
}