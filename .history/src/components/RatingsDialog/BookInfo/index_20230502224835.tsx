import { ReactNode } from "react";
import { Container } from "./styles";
import { Text, Heading } from "@/components/Typography";

type BookInfoProps = {
  icon: ReactNode
  title: string
  info: string
}

export function BookInfo({ icon, title, info } : BookInfoProps ) {
  return (
    <Container>
      {icon}
      <div>
        <Text size='sm' color='gray-300'>{title}</Text>
        <Heading size='sm' color='gray-300'>{info}</Heading>
      </div>
    </Container>
  )
}