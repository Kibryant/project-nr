import Image from 'next/image'

interface ImageProps {
  eventPicture: string
}

const ImageHeader: React.FC<ImageProps> = ({ eventPicture }) => {
  return (
    <Image
      src={`/images/gallery/events/${eventPicture}`}
      alt="foto no evento"
      width={400}
      height={400}
      quality={100}
      className="hidden sm:block z-50 rounded-md"
    />
  )
}

export { ImageHeader }
