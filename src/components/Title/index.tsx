interface TitleProps {
  title: string
  titleGreenPart: string
}

const Title = ({ title, titleGreenPart }: TitleProps) => {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-semibold text-center">
        {title} <span className="text-primary">{titleGreenPart}</span>
      </h2>
    </>
  )
}

export { Title }
