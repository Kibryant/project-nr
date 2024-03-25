interface DescriptionProps {
  children: React.ReactNode
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-6 sm:justify-start sm:items-start sm:gap-y-4">
      {children}
    </div>
  )
}

export { Description }
