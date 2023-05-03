import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
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

type RatingsDialogProps = {
  children: ReactNode;
};

export function RatingsDialog({ children }: RatingsDialogProps) {
  return (
    <Dialog.Root>
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
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
