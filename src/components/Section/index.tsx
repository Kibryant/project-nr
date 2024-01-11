import { cn } from '@/utils/cn'

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

const Section = ({ children, className, id = '' }: SectionProps) => {
  return (
    <section
      className="w-full px-2 mt-10 flex justify-center items-center"
      id={id}
    >
      <div className={cn('w-full max-w-7xl', className)}>{children}</div>
    </section>
  )
}

export { Section }
