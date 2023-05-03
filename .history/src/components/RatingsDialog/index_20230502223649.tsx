import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { DialogContent, DialogOverlay, DialogClose } from "./styles";
import { X } from "@phosphor-icons/react";

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
          <DialogClose>
            <X />
          </DialogClose>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}