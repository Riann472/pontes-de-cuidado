import { Dispatch, SetStateAction } from "react"
import { organ } from "../data/organs"
import Image from "next/image"
import { Tooltip } from "radix-ui";
import TooltipDemo from "./ui/Tooltip";
import { Info } from "lucide-react";

interface ModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>
  modalData: organ
}


const Modal = ({ setOpenModal, modalData }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-20 bg-[#000000bb] flex items-center justify-center">
      <div className="z-30 bg-white w-[85vw] h-[85vh] border rounded-4xl flex flex-col overflow-auto">
        <div className="flex justify-between items-start">
          <h1 className="text-xl cursor-pointer" onClick={() => setOpenModal(false)}>X</h1>
        </div>

        <div className="flex gap-20 mt-4 p-8">
          <div className="w-[40%]">
            <Image src={modalData.image} alt={modalData.name} />
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <h1 className="text-3xl font-bold">
              {modalData.name} {modalData.fullname.length >= 1 && `(${modalData.fullname})`}
            </h1>
            <p className="text-xl text-justify">{modalData.description}</p>
          </div>
        </div>

        <div className="mt-10 p-2">
          <h2 className="font-bold text-2xl text-center mb-1">Informações de contato e endereços</h2>
          <h4 className="font-semibold text-base text-center mb-6">Clique nos botoes de endereço para ir ao mapa!</h4>
          {modalData.info && modalData.info.map(info => (
            <h1 className="mb-2 text-center font-bold text-xl">{info}</h1>
          ))}
          <div className="flex flex-col gap-12">
            {modalData.regionals?.length == 0 && (
              <p>Dados indisponiveis.</p>
            )}
            {modalData.regionals?.map((regional) => (
              <div key={regional.id} className="flex flex-col items-center gap-6 text-center">
                <div>
                  {modalData.regionals?.length > 1 && <h1 className="mb-2 font-bold text-2xl">Regional {regional.id}</h1>}
                  {regional.districts.length > 0 && (
                    <>
                      <p>Bairros: ({regional.districts?.map((district, idx, arr) => {
                        return idx == arr.length - 1 ? `${district}` : `${district}, `
                      })})</p>
                    </>
                  )}
                </div>
                <div className="flex flex-wrap justify-center gap-10 w-full max-w-full">
                  {regional.organUnitys?.map((unity, idx) => (
                    <a
                      key={idx}
                      className="relative flex flex-col justify-center items-center cursor-pointer bg-gray-200 p-5 rounded-2xl shadow-md w-[250px] text-center"
                      href={unity.mapLink}
                    >
                      {unity.info && (
                        <div className="w-full flex justify-end mb top-3 right-3 absolute">
                          <TooltipDemo Icon={Info} text={unity.info} />
                        </div>
                      )}
                      <h1 className="font-semibold text-lg">{unity.district}</h1>
                      <button
                        className="bg-primary text-gray-800 font-bold px-3 py-2 cursor-pointer rounded-xl mt-2 hover:opacity-90"
                      >
                        {unity.address}
                      </button>
                      <div className="mt-3 text-sm">
                        <p><span className="font-semibold">Coord.:</span> {unity.coordNumber}</p>
                        <p><span className="font-semibold">Órgão:</span> {unity.organNumber}</p>
                      </div>
                    </a>
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