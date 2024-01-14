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
          <DialogDescription>(73) 99962-5449</DialogDescription>
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
