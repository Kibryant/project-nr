import { Button } from "../ui/button"

interface HeaderProps {
    title: string
    titleGreenPart: string
    subTitle: string
    subtitleGreenPart: string
    showButtons?: boolean
}

const Header = ({
    title,
    subTitle,
    titleGreenPart,
    subtitleGreenPart,
    showButtons = false
}: HeaderProps) => {
    return (
        <header className="flex flex-col items-center justify-center w-full gap-y-4 sm:gap-6 sm:py-4 px-2">
            <div>
                <div className="mx-auto max-w-2xl">
                    <h1 className="font-bold text-4xl text-center">
                        {title} <span className="text-primary">{titleGreenPart}</span>
                    </h1>
                    <p className="mt-4 text-center">
                        {subTitle} <span className="text-primary font-semibold">{subtitleGreenPart}</span>
                    </p>
                </div>
            </div>
            {showButtons && (
                <div>
                    <Button className="mt-4">
                        Entre em contato
                    </Button>
                    <Button  className="mt-4">
                        Conheça nossos produtos
                    </Button>
                </div>
            )}
        </header>
    )
}

export  {Header}