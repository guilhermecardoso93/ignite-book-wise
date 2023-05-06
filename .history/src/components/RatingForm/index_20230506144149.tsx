import { useSession } from "next-auth/react";
import {
  ActionsContainer,
  Container,
  UserDetails,
  FormContainer,
} from "./styles";
import { Avatar } from "../ui/Avatar";
import { Heading } from "../Typography";
import { RatingStars } from "../PopularBooks/RatingStars";
import { FormEvent, useState } from "react";
import { TextArea } from "../ui/form/TextArea";
import { ActionIcon } from "../ui/ActionIcon";
import { Check, X } from "@phosphor-icons/react";
import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type RatingFormProps = {
  onCancel: () => void;
  bookId: string;
};

export function RatingForm({ bookId, onCancel }: RatingFormProps) {
  const [description, setDescription] = useState("");
  const [currentRate, setCurrentRate] = useState(0);

  const { data: session } = useSession();

  const user = session?.user;

  const queryClient = useQueryClient();

  const { mutateAsync: handleRate } = useMutation(
    async () => {
      await api.post(`/books/${bookId}/rate`, {
        description,
        rate: currentRate,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["book", bookId]);
        queryClient.invalidateQueries(["books"]);
        onCancel();
      },
    }
  );

  const submitDisabled = !description.trim() || !currentRate;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (submitDisabled) return;
    await handleRate();
  };
  
  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} />
            <Heading size="xs">{user.name}</Heading>
          </section>

          <RatingStars size="lg" rating={currentRate} />
        </UserDetails>
      )}

      <FormContainer>
        <TextArea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <ActionsContainer>
          <ActionIcon
            type="button"
            onClick={onCancel}
            iconColor="purple100"
            icon={<X />}
          />
          <ActionIcon
            type="button"
            iconColor="green100"
            icon={<Check />}
            disabled={submitDisabled}
          />
        </ActionsContainer>
      </FormContainer>
    </Container>
  );
}
