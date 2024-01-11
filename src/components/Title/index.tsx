interface TitleProps {
  title: string
  titleGreenPart: string
}

const Title = ({ title, titleGreenPart }: TitleProps) => {
  return (
    <>
      <h2 className="text-4xl font-semibold">
        {title} <span className="text-primary">{titleGreenPart}</span>
      </h2>
    </>
  )
}

export { Title }
