import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

type RatingsDialogProps ={
  children: ReactNode
}

export function RatingsDialog({ children } : RatingsDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        
      </Dialog.Portal>
    </Dialog.Root>
  )
}