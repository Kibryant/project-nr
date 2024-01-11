import { ElementType } from 'react'

type CardProps = {
  Icon: ElementType
  title: string
  description: string
}

const Card = ({ Icon, title, description }: CardProps) => {
  return (
    <div
      className="flex flex-col w-full
      items-start shadow-md p-4 rounded-md dark:shadow-none dark:border sm:items-center"
    >
      <div className="w-full flex sm:flex-col sm:justify-center items-center gap-1 sm:gap-0">
        <Icon className="h-9 w-9 sm:w-11 sm:h-11 text-primary" />
        <h3 className="text-xl sm:text-[22px] font-semibold">{title}</h3>
      </div>
      <p className="ms-10 sm:ms-0 sm:text-center">{description}</p>
    </div>
  )
}

export default Card
