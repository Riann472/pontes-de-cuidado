import caps from "../images/CRAS_teste.png"
import Image from "next/image"

const Modal = () => {
  return (
    <div className="h-screen w-screen bg-[#000000bb] fixed z-20 flex items-center justify-center">
      <div className="bg-white py-15 pl-10 w-200 h-200 border rounded-xl flex flex-wrap gap-13">
        <h1 className="text-5xl ">
          CRAS
        </h1>
        <Image
          src={caps}
          alt="cras"
          width={350}
        />
        <p className="main-text">
          O Centro de Referência de Assistência Social do Brasil é uma unidade responsável pela oferta de serviços de proteção básica do Sistema Único de Assistência Social, nas áreas de vulnerabilidade e risco social.
        </p>
        <ul className="contato">
          <h2 className="strong">Informações de contato</h2>
          <li>(85) 99999-9999</li>
          <li>(85) 99999-9999</li>
        </ul>
        <ul className="endeeco">
          <li>Rua das Laranjeiras, 25</li>
          <li>Rua das Laranjeiras, 25</li>
        </ul>
        <button className="py-15 text-white bg-black w-35 mt-10"><a href="#">Ver no mapa</a></button>
      </div>
    </div >
  )
}
export default Modal