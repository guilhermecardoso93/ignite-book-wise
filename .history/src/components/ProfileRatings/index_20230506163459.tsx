import { PageTitle } from "../ui/PageTitle"
import { Container, RatingsList } from "./styles"
import { MagnifyingGlass, User } from "@phosphor-icons/react"
import { Input } from "../ui/form/Input"
import { Book, CategoriesOnBooks, Category, Rating } from "@prisma/client";
//import { ProfileRatingCard } from "./ProfileRatingCard";
import { useMemo, useState } from "react";
import { Text } from "../Typography";
import { useSession } from "next-auth/react";
import { Link } from "../ui/Link";

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks & {
      category: Category
    }[]
  }
};

type ProfileRatingsProps = {
  ratings: ProfileRating[]
  isOwnProfile?: boolean
}

export function ProfileRating({ ratings} : ProfileRatingsProps){
  return (
    <Container>
      
    </Container>
  )
}