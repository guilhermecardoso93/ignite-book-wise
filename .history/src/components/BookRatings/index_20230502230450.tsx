import { Text } from "../Typography";
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
        <Link 
          onClick={handleRate} 
          text="Avaliar" 
          withoutIcon 
        />
      </header>

      <section>
        
      </section>
    </Container>
  );
}
