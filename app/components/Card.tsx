import { Noto_Sans } from "next/font/google"

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});

interface CardProps {
    src: string
    organ: string
    description: string
}

const Card = ({ src, organ, description }: CardProps) => {
    return (
        <div className="w-72 rounded-2xl overflow-hidden">
            {/* Imagem ocupa toda a largura do card */}
            <div className="w-full h-44">
                <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Conteúdo abaixo da imagem */}
            <div className="bg-primary p-3">
                <h2 className={`text-white font-extrabold text-xl ${notoSans.variable}`}>{organ}</h2>
            </div>
            <div className="bg-tertiary p-3">
                <p className="text-secondary">{description}</p>
                <a href="#" className="underline">Entre em contato</a>
            </div>
        </div>
    )
}

export default Card