
const Modal = () => {
  return (

    <div className="h-screen w-screen bg-[#000000bb] fixed z-20 flex  items-center justify-center ">
      <div className="bg-white py-15 pl-10 w-350 h-200 border rounded-4xl flex flex-wrap gap-8">
        <img className="w-125 m-5"
          src="https://santaritadoaraguaia.go.gov.br/wp-content/uploads/2021/05/CRAS.png">
        </img>
        <div className="flex flex-wrap gap-4 flex-1 justify-center">
          <h1 className="text-5xl font-bold w-150">Centro de Referência de Assistência Social (CRAS)</h1>
          <p className="text-3xl">
            O Centro de Referência de Assistência Social do Brasil é uma unidade responsável pela oferta de serviços de proteção básica do Sistema Único de Assistência Social, nas áreas de vulnerabilidade e risco social.
          </p>
        </div>
        {/* Informações */}
        <div className="flex flex-wrap py-10 gap-20">
          <ul className="contato text-2xl">
            <h2 className="font-bold text-3xl">Informações de contato</h2>
            <li>(85) 99999-9999</li>
            <li>(85) 99999-9999</li>
          </ul>
          <ul className="text-2xl">
            <h2 className="font-bold text-3xl">Endereços</h2>
            <li>Rua das Laranjeiras, 25</li>
            <li>Rua das Laranjeiras, 25</li>
          </ul>
        </div>
        {/* Botão */}
        <div className="ml-50 flex items-center justify-center">
          <button className="text-black text-2xl bg-primary w-40 h-35 rounded-2xl 
          shadow-xl shadow-black/60 hover:shadow-2xl active:shadow-md active:translate-y-[3px] duration-150">
            <a href="#">Ver no mapa</a>
          </button>
        </div>
      </div>
    </div >
  )
}
export default Modal