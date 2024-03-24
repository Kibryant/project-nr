interface ContentProps {
  children: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:gap-y-4 gap-y-6">
      {children}
    </div>
  )
}

export { Content }
