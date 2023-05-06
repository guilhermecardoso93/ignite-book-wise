import { useSession } from "next-auth/react";
import { Container, UserDetails } from "./styles";
import { Avatar } from "../ui/Avatar";
import { Heading } from "../Typography";
import { RatingStars } from "../PopularBooks/RatingStars";
import { useState } from "react";

type RatingFormProps = {
  onCancel: () => void;
  bookId: string;
};

export function RatingForm({ bookId, onCancel }: RatingFormProps) {
  const [ currentSize, setCurrentSize ] = useState(0)
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} />
            <Heading size="xs">{user.name}</Heading>
          </section>

          <RatingStars size='lg' rating={currentSize} />
        </UserDetails>
      )}
    </Container>
  );
}
