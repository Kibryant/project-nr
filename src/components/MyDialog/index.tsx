'use client'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../ui/dialog'
import { PhoneIcon } from 'lucide-react'

const MyDialog = () => {
  return (
    // <a target="_blank" href="https://icons8.com/icon/16712/whatsapp">WhatsApp</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    <Dialog>
      <DialogTrigger className="flex justify-center items-center">
        <Image
          src="/svgs/whatsapp.svg"
          alt="WhatsApp"
          width={24}
          height={24}
          quality={100}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Whatsapp da NR Representações</DialogTitle>
          <DialogDescription className="group flex justify-center sm:justify-start">
            <a
              href="https://wa.me/5573999625449"
              className="text-zinc-300 underline flex gap-x-1 items-center group-hover:text-primary"
            >
              <PhoneIcon className="text-zinc-300 w-4 h-4 group-hover:text-primary" />
              (73) 99962-5449
            </a>
          </DialogDescription>
          <DialogFooter className="text-muted-foreground text-xs">
            <a target="_blank" href="https://icons8.com/icon/16712/whatsapp">
              WhatsApp
            </a>{' '}
            icon by{' '}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export { MyDialog }
