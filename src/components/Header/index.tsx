import Link from "next/link"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Heart } from "lucide-react"

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
        <header className="flex flex-col items-center justify-start min-h-screen w-full gap-y-4 sm:gap-6 sm:py-4 px-2">
            <div>
                <div className="mx-auto max-w-2xl">
                    <Badge variant="outline">
                        <span>Paixão e Qualidade que Combinam.</span>
                        <Heart className="ml-2 text-primary" size={16} />
                    </Badge>
                    <h1 className="font-bold text-4xl text-center">
                        {title} <span className="text-primary">{titleGreenPart}</span>
                    </h1>
                    <p className="mt-4 text-center">
                        {subTitle} <span className="text-primary font-semibold">{subtitleGreenPart}</span>
                    </p>
                </div>
            </div>
            {showButtons && (
                <div className="flex items-center gap-x-2">
                    <Button className="mt-4">
                        <Link href="/produtos">
                            Conheça nossos parceiros
                        </Link>
                    </Button>
                    <Button  className="mt-4" variant="secondary">
                        <Link href="/contatos">
                            Entre em contato
                        </Link>
                    </Button>
                </div>
            )}
        </header>
    )
}

export  {Header}