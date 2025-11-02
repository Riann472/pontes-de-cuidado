import { Dispatch, SetStateAction } from "react"
import { organ } from "../data/organs"
import Image from "next/image"

interface ModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>
  modalData: organ
}


const Modal = ({ setOpenModal, modalData }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-20 bg-[#000000bb] flex items-center justify-center">
      <div className="z-30 bg-white w-[85vw] h-[85vh] border rounded-4xl flex flex-col overflow-auto p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-xl cursor-pointer" onClick={() => setOpenModal(false)}>X</h1>
        </div>

        <div className="flex gap-20 mt-4">
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

        <div className="mt-10">
          <h2 className="font-bold text-2xl text-center mb-1">Informações de contato e endereços</h2>
          <h4 className="font-semibold text-base text-center mb-6">Clique nos botoes de endereço para ir ao mapa!</h4>
          <div className="flex flex-wrap gap-8 justify-center">
            {modalData.organUnitys?.length == 0 && (
              <p>Dados indisponiveis.</p>
            )}
            {modalData.organUnitys?.map((unity, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <h1 className="font-semibold text-xl">{unity.district}</h1>
                <button className="text-black font-bold bg-primary px-3 py-5 rounded-2xl cursor-pointer">
                  <p>{unity.address}</p>
                </button>
                <div className="w-full flex flex-col items-center gap-1">
                  <p><span className="font-semibold">Número do coordenador:</span> {unity.coordNumber}</p>
                  <p><span className="font-semibold">Número do orgão:</span> {unity.organNumber}</p>
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