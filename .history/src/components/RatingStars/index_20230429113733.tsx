import { Star } from "@phosphor-icons/react";
import { Container } from "./styles";
import { ComponentProps } from "react";

type RatingStartProps = ComponentProps<typeof Container> & {
  rating: number;
  size?: "sm" | "md" | "lg";
};

export function RatingStars({
  rating,
  size = "sm",
  ...props
}: RatingStartProps) {
  return (
    <Container size={size} {...props}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={`start-${index}`} weight="fill" />
      ))}
    </Container>
  );
}
