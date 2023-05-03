import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { DialogContent, DialogOverlay } from "./styles";

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
        <DialogOverlay />

        <DialogContent>
          oi
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}