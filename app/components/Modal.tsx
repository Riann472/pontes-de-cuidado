import { Dispatch, SetStateAction } from "react"
import { organ } from "../data/organs"
import Image from "next/image"
import TooltipDemo from "./ui/Tooltip"
import { Info } from "lucide-react"

interface ModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>
  modalData: organ
}

const Modal = ({ setOpenModal, modalData }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-20 bg-[#000000bb] flex items-center justify-center p-2">
      <div className="z-30 bg-white w-[85vw] h-[85vh] rounded-2xl border flex flex-col overflow-auto">

        {/* HEADER */}
        <div className="flex justify-end p-4">
          <button
            className="text-2xl font-bold cursor-pointer"
            onClick={() => setOpenModal(false)}
          >
            ×
          </button>
        </div>

        {/* TOP CONTENT (agora responsivo) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 p-6">

          {/* IMAGE */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image
              src={modalData.image}
              alt={modalData.name}
              className="rounded-xl w-full max-w-xs lg:max-w-full h-auto"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-5 flex-1 text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold">
              {modalData.name}{" "}
              {modalData.fullname.length >= 1 && `(${modalData.fullname})`}
            </h1>

            <p className="text-base lg:text-lg text-justify leading-relaxed">
              {modalData.description}
            </p>
          </div>
        </div>

        {/* INFO SECTION */}
        <div className="p-4 lg:p-6">
          <h2 className="font-bold text-xl lg:text-2xl text-center mb-1">
            Informações de contato e endereços
          </h2>

          <h4 className="font-semibold text-sm lg:text-base text-center mb-6">
            Clique nos botões de endereço para ir ao mapa!
          </h4>

          {modalData.info?.map((info, idx) => (
            <h1 key={idx} className="text-center font-bold text-lg mb-2">
              {info}
            </h1>
          ))}

          {/* REGIONAIS */}
          <div className="flex flex-col gap-12 mt-8">
            {modalData.regionals?.length === 0 && (
              <p className="text-center">Dados indisponíveis.</p>
            )}

            {modalData.regionals?.map((regional) => (
              <div
                key={regional.id}
                className="flex flex-col items-center gap-6 text-center"
              >
                <div>
                  {modalData.regionals.length > 1 && (
                    <h1 className="font-bold text-xl lg:text-2xl mb-2">
                      Regional {regional.id}
                    </h1>
                  )}

                  {regional.districts.length > 0 && (
                    <p className="text-sm lg:text-base">
                      Bairros: (
                      {regional.districts.map((district, idx, arr) =>
                        idx === arr.length - 1 ? district : `${district}, `
                      )}
                      )
                    </p>
                  )}
                </div>

                {/* UNIT CARDS */}
                <div className="flex flex-wrap justify-center gap-6 w-full">
                  {regional.organUnitys?.map((unity, idx) => (
                    <div
                      key={idx}
                      className="relative flex flex-col bg-gray-200 p-5 rounded-2xl shadow-md
                  w-[220px] sm:w-[250px] text-center"
                    >
                      {unity.info && (
                        <div className="absolute top-3 right-3">
                          <TooltipDemo Icon={Info} text={unity.info} />
                        </div>
                      )}

                      <h1 className="font-semibold text-lg">
                        {unity.district}
                      </h1>

                      
                      <a href={unity.mapLink} className="bg-primary text-gray-800 font-bold px-3 py-2 mt-2 rounded-xl">
                        {unity.address}
                      </a>

                      <div className="mt-3 text-sm">
                        <p>
                          <span className="font-semibold">Coord.:</span>{" "}
                          {unity.coordNumber}
                        </p>
                        <p>
                          <span className="font-semibold">Órgão:</span>{" "}
                          {unity.organNumber}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal
