import { Text } from "../Typography";
import { Link } from "../ui/Link";
import { Container } from "./styles";

export function BookRating() {
  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link text="Avaliar" />
      </header>
    </Container>
  );
}
