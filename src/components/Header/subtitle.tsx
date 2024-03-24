interface SubtitleProps {
  subtitle: string
  subtitleGreenPart: string
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle, subtitleGreenPart }) => {
  return (
    <h2 className="mt-4 text-center sm:text-lg sm:text-left">
      {subtitle} <br className="hidden sm:block" />
      <span className="text-primary font-semibold">{subtitleGreenPart}</span>
    </h2>
  )
}

export { Subtitle }
