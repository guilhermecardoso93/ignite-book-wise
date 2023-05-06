import { PageTitle } from "../ui/PageTitle";
import { Container, RatingsList } from "./styles";
import { MagnifyingGlass, User } from "@phosphor-icons/react";
import { Input } from "../ui/form/Input";
import { Book, CategoriesOnBooks, Category, Rating } from "@prisma/client";
import { useMemo, useState } from "react";
import { Text } from "../Typography";
import { useSession } from "next-auth/react";
import { Link } from "../ui/Link";
import { ProfileRatingCard } from "./ProfileRatingCard";

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category;
      }[];
  };
};

type ProfileRatingsProps = {
  ratings: ProfileRating[];
  isOwnProfile?: boolean;
};

export function ProfileRating({ ratings, isOwnProfile }: ProfileRatingsProps) {
  const [ search, setSearch ] = useState('')

  const filteredRatings = useMemo(() => {
    return ratings.filter(rating => {
      return rating.book.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [ratings, search])

  return (
    <Container>
      {isOwnProfile ? (
        <PageTitle title="Perfil" icon={<User size={25} />} />
      ) : (
        <Link
          href="/"
          text="voltar"
          iconSide="left"
          color="white"
          css={{ alignSelf: "flex-start" }}
        />
      )}
      <Input
        placeholder="Buscar livro avaliado"
        icon={<MagnifyingGlass size={20} />}
        css={{marginTop: 40, marginBottom: 32}}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        />
          <RatingsList>
        {filteredRatings?.map(rating => (
          <ProfileRatingCard key={rating.id} rating={rating} />
        ))}
        {filteredRatings.length <= 0 && (
          <>
            <Text color="gray-400" css={{ textAlign: 'center' }}>
              {search ? "Nenhum resultado encontrado" : "Nenhuma avaliação encontrada"}
            </Text>
          </>
        )}
      </RatingsList>
    </Container>
  );
}
