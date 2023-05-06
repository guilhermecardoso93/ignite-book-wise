import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode, useState } from "react";
import {
  DialogContent,
  DialogOverlay,
  DialogClose,
  BookDetailsWrapper,
  BookDetailsContainer,
  BookImage,
  BookContent,
  BookInfos,
} from "./styles";
import { BookOpen, BookmarkSimple, X } from "@phosphor-icons/react";
import { Heading, Text } from "../Typography";
import { RatingStars } from "../PopularBooks/RatingStars";
import { BookInfo } from "./BookInfo";
import { BookRatings } from "../BookRatings";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { BookWithAvgRating } from "../BookCard";
import { RatingWithAuthorAndBook } from "../RatingCard";
import { CategoriesOnBooks, Category } from "@prisma/client";

type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthorAndBook[];
  categories: (CategoriesOnBooks & {
    category: Category;
  })[];
};

type RatingsDialogProps = {
  children: ReactNode;
  bookId: string;
};

export function RatingsDialog({ children, bookId }: RatingsDialogProps) {
  const [open, setOpen] = useState(false);

  const { data: book } = useQuery<BookDetails>(
    ["book", bookId],
    async () => {
      const { data } = await api.get(`;books/details/${bookId}`);
      return data?.book ?? {};
    },
    {
      enabled: open,
    }
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <BookDetailsWrapper>
            <BookDetailsContainer>
              <BookImage
                width={171}
                height={242}
                alt="book name"
                src="https://avatars.githubusercontent.com/u/79944203?v=4"
              />
              <BookContent>
                <div>
                  <Heading size="sm">Book Name</Heading>
                  <Text color="gray-300" css={{ marginTop: "$2" }}>
                    Joe Done
                  </Text>
                </div>

                <div>
                  <RatingStars rating={4} size="md" />
                  <Text color="gray-400" size="sm" css={{ marginTop: "$1" }}>
                    4 avaliações{" "}
                  </Text>
                </div>
              </BookContent>
            </BookDetailsContainer>

            <BookInfos>
              <BookInfo
                icon={<BookmarkSimple />}
                title="Categorias"
                info="Ficção, Ação"
              />
              <BookInfo icon={<BookOpen />} title="Páginas" info="90" />
            </BookInfos>
          </BookDetailsWrapper>
          <BookRatings />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
