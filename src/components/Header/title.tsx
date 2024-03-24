interface TitleProps {
  title: string
  titleGreenPart: string
}

const Title: React.FC<TitleProps> = ({ title, titleGreenPart }) => {
  return (
    <h1 className="font-bold text-center text-4xl sm:text-5xl sm:text-left">
      {title} <span className="text-primary font-extrabold text-nowrap">{titleGreenPart}</span>
    </h1>
  )
}

export { Title }
