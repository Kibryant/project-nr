interface ContentProps {
  children: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="flex flex-col justify-center items-center gap-y-6 sm:flex-row sm:gap-x-4">{children}</div>
}

export { Content }
