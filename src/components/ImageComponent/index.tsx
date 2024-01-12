import Image from 'next/image'

interface ImageComponentProps {
  src: string
  alt: string
  width: number
  height: number
}

const ImageComponent = ({ src, alt, width, height }: ImageComponentProps) => {
  return (
    <div className="rounded-lg dark:bg-zinc-200/5 max-w-fit dark:ring-zinc-200/10 bg-zinc-900/5 p-2 ring-1 ring-inset ring-zinc-900/10 lg:rounded-xl">
      <Image
        alt={alt}
        quality={100}
        width={width}
        height={height}
        src={src}
        className="rounded-lg sm:p-8 md:p-10 shadow-2xl dark:shadow-none ring-1 dark:ring-zinc-200/10 ring-zinc-900/10"
      />
    </div>
  )
}

export { ImageComponent }
