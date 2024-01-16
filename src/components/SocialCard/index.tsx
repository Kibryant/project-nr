import { ElementType } from 'react'

type SocialCardProps = {
  icon: ElementType
  title: string
  link: string
}

const SocialCard = ({ icon: Icon, link, title }: SocialCardProps) => {
  return (
    <div
      className={`flex flex-col w-full
      items-start shadow-md p-4 max-h-64 rounded-md dark:shadow-none dark:border sm:items-center`}
    >
      <div className="w-full flex sm:flex-col sm:justify-center items-center gap-1 sm:gap-0">
        <Icon className="h-7 w-7 sm:w-11 sm:h-11 text-primary" />
        <h3 className="text-xl sm:text-[22px] font-semibold">{title}</h3>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="ms-8 text-sm sm:text-base sm:ms-0 sm:text-center"
      >
        {link}
      </a>
    </div>
  )
}

export { SocialCard }
