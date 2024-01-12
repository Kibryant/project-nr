interface SubtitleProps {
  subtitle: string
}

const Subtitle = ({ subtitle }: SubtitleProps) => {
  return <p className="text-lg text-center">{subtitle}</p>
}

export { Subtitle }
