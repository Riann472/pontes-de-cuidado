import { Noto_Sans } from "next/font/google"
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { organ } from "../data/organs";

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});

interface CardProps {
    organ: organ
    setOpenModal: Dispatch<SetStateAction<boolean>>
    setModalData: Dispatch<SetStateAction<organ>>
}

const Card = ({ organ, setOpenModal, setModalData }: CardProps) => {
    return (
        <div className="w-72 rounded-2xl overflow-hidden cursor-pointer" onClick={() => {
            setOpenModal(true)
            setModalData(organ)
        }}>
            <div className="w-full h-44">
                <Image
                    src={organ.image}
                    alt=""
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="bg-primary p-3">
                <h2 className={`text-white font-extrabold text-xl ${notoSans.variable}`}>{organ.name.toUpperCase()}</h2>
            </div>
            <div className="bg-tertiary p-3 h-52 flex flex-col justify-between">
                <p className="text-secondary">{organ.description.split(".")[0] + "."}</p>
                <a className="underline font-semibold text-sm">MAIS INFORMAÇÕES</a>
            </div>
        </div>
    )
}

export default Card