interface SubtitleProps {
  subtitle: string
}

const Subtitle = ({ subtitle }: SubtitleProps) => {
  return <p className="text-lg">{subtitle}</p>
}

export { Subtitle }
