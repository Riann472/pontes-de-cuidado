"use client"

import Image1 from './images/image.png'
import Image2 from './images/imagem1.png'
import Image3 from './images/imagem2.png'
import Image4 from './images/imagem3.png'
import Image5 from './images/imagem4.png'
import Image6 from './images/imagem5.png'
import IconIG from './images/instaFBICON.png'
import IconMail from './images/emailICON.png'
import { Noto_Sans } from "next/font/google";
import Button from "./components/Button";
import Card from "./components/Card";
import { ArrowDownRight } from "lucide-react";
import Image from 'next/image';
import organs, { organ } from './data/organs'
import Modal from './components/Modal';
import { scrollToSection } from './utils/functions'
import { useState } from 'react'

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<organ>({
    id: 0,
    description: "",
    image: Image6,
    name: "",
    fullname: "",
    regionals: []
  })

  return (
    <main>
      {openModal && (
        <Modal setOpenModal={setOpenModal} modalData={modalData} />
      )}
      <section id='home' className="min-w-screen flex sm:py-0 flex-col sm:flex-row py-12 sm:mt-12 mt-0 justify-between gap-12 mb-12">
        <div className={`2xl:w-[60vw] lg:w-[55vw] md:w-[55vw] p-4 w-full rounded-none sm:py-8 lg:p-8 md:py-6 bg-primary md:rounded-tr-xl md:rounded-br-xl flex flex-col sm:justify-center sm:items-center`}>
          <p className={`${notoSans.variable} text-xl md:text-2xl text-secondary font-bold`}>CONHEÇA SEUS DIREITOS</p>
          <h1 className="lg:text-8xl md:text-7xl text-[4rem] leading-none text-white font-extrabold scale-x-70 origin-left sm:origin-center text-left sm:text-center mb-10 mt-3">
            REDES DE APOIO EM FORTALEZA
          </h1>
          <div className="flex flex-col items-center sm:flex-row gap-3">
            <Button onClick={() => scrollToSection("sobre")} className="bg-secondary w-[50vw] sm:w-auto text-white">SAIBA MAIS</Button>
            <Button onClick={() => scrollToSection("emergencias")} className="bg-secondary w-[50vw] sm:w-auto text-white">EMERGÊNCIA</Button>
          </div>
        </div>
        <div className="sm:mr-4 lg:mr-12 xl:mr-24">
          <Image
            src={Image1}
            alt="Imagem representando redes de apoio"
            className="rounded-xl w-full p-4 sm:w-[500px] lg:w-[500px]"
          />
        </div>
      </section>
      <section
        id="sobre"
        className="
    z-10 relative bg-primary 
    p-8 md:p-16 
    px-6 md:px-20 lg:px-40 xl:px-60
    flex flex-col lg:flex-row 
    gap-10 lg:gap-12 
    items-center
  "
      >
        <div className="sm:mr-4 lg:mr-12 xl:mr-24">
          <Image
            src={Image2}
            alt="Imagem 2"
            className="rounded-xl w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-6 text-white items-center lg:items-start sm:justify-center">
          <div className="text-center lg:text-left">
            <ArrowDownRight size={50} strokeWidth={3} className="text-secondary mx-auto lg:mx-0" />
            <h2 className="mt-4 font-semibold text-3xl md:text-4xl lg:text-5xl scale-x-100 lg:scale-x-75 origin-left">
              SOBRE O PROJETO
            </h2>
          </div>

          <p className="font-semibold text-lg md:text-xl lg:text-2xl sm:text-center lg:text-left">
            O Pontes de Cuidado nasceu da vontade de aproximar as pessoas dos serviços que podem transformar vidas.
          </p>

          <p className="font-semibold text-lg md:text-xl lg:text-2xl sm:text-center lg:text-left">
            Muitas vezes, quem precisa de ajuda não sabe por onde começar. Nosso objetivo é tornar o acesso à informação mais simples e humano, reunindo em um só lugar as principais redes de apoio disponíveis em Fortaleza - Ce.
          </p>

          <p className="text-secondary font-semibold text-lg md:text-xl lg:text-2xl sm:text-center lg:text-left">
            Acreditamos que informação também é cuidado. E que cuidar é um ato coletivo.
          </p>
        </div>
      </section>
      <section id='orgaos' className="max-w-[100vw] overflow-hidden flex flex-col items-center relative py-12">
        <Image
          src={Image4}
          alt="Espiral"
          width={250}
          className='absolute left-[-100px] top-[-150px] transform rotate-45'
        />
        <h1 className={`${notoSans} font-extrabold text-3xl text-secondary mb-10`}>ORGÃOS</h1>
        <div className="flex gap-18 justify-center flex-wrap">
          {organs?.map(organ => (
            <Card
              key={organ.id}
              organ={organ}
              setOpenModal={setOpenModal}
              setModalData={setModalData}
            />
          ))}
        </div>
        <Image
          src={Image4}
          alt="Espiral"
          width={250}
          className='absolute -bottom-40 right-[-100px] z-0'
        />

      </section>
      <section
        id="emergencias"
        className="
    relative z-10 bg-primary 
    flex flex-col lg:flex-row 
    justify-between 
    items-center
    gap-10
    py-12 
    px-6 md:px-12 lg:px-24
  "
      >
        {/* IMAGEM */}
        <div className="w-full lg:w-[35%] flex justify-center lg:justify-start">
          <div className="w-full max-w-sm lg:max-w-none">
            <Image
              src={Image3}
              alt="Imagem 3"
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div
          className="
      w-full lg:w-[60%]
      bg-tertiary rounded-2xl 
      p-6 md:p-10 lg:p-12
      flex flex-col
    "
        >
          <h2 className="font-extrabold scale-x-100 lg:scale-x-75 origin-left text-3xl md:text-4xl mb-4">
            EMERGÊNCIAS
          </h2>

          <p className="mb-6 text-base md:text-lg">
            Situações de crise acontecem de forma inesperada e nesses momentos é essencial saber a quem recorrer rapidamente. Aqui reunimos canais de emergência e
            atendimento imediato para casos de violência, risco à vida, crises emocionais e outros tipos de urgência.
          </p>

          <p className="mb-6 text-base md:text-lg">
            Guarde esses números e compartilhe com pessoas próximas. Eles podem <strong>salvar vidas!</strong>
          </p>

          <h3 className="text-base md:text-lg font-bold mb-2">NÚMEROS IMPORTANTES</h3>

          <ul className="ml-5 list-disc text-base md:text-lg">
            <li className="">CVV (apoio emocional): <strong>188</strong></li>
            <li className="">Central de Atendimento à Mulher: <strong>180</strong></li>
            <li className="">Disque Direitos Humanos / Criança, Idoso e LGBTQIA+: <strong>100</strong></li>
            <li className="">Polícia Militar: <strong>190</strong></li>
            <li className="">SAMU (urgências médicas): <strong>192</strong></li>
            <li className="">Corpo de Bombeiros: <strong>193</strong></li>
            <li className="">
              Casa da Mulher Brasileira – Fortaleza: <strong>(85) 3108-2999</strong>
            </li>
          </ul>
        </div>
      </section>

      <section id='saibamais' className='flex px-4 sm:px-0 py-12 items-center sm:gap-24 text-center sm:text-left '>
        <div>
          <Image
            src={Image5}
            alt="Pessoa"
            className='hidden sm:inline-block opacity-20 w-[150px] sm:w-[300px]'
          />
        </div>
        <div className='w-full sm:w-[70%]'>
          <p className='md:text-2xl mb-8'>Este site foi desenvolvido pelos discentes integrantes do Projeto de Extensão em Responsabilidade Social do Centro Universitário Farias Brito (FB Uni), como parte das atividades voltadas à integração entre ensino, pesquisa e compromisso social.</p>
          <p className='md:text-2xl'><strong>Integrantes</strong>: <br />Ana Clara Figueiredo Freire • Francisco Luiz Aguiar da Silva • Júlio César Mesquita Barreto • Lara Louise dos Santos Sales • Riann Carvalho Mota</p>
        </div>
      </section>
      <footer
        id="footer"
        className="
    bg-tertiary 
    py-12 
    flex 
    justify-center 
    items-center
  "
      >
        <div
          className="
      flex 
      flex-col lg:flex-row 
      justify-between 
      items-center 
      gap-10 lg:gap-20 
      w-full max-w-7xl 
      px-6
    "
        >
          {/* LOGO */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={Image6}
              alt="Logo"
              width={180}
              className="w-10 md:w-52 lg:w-[220px]"
            />
          </div>

          {/* TEXTO CENTRAL */}
          <div className="text-center lg:text-left">
            <h1 className="font-extrabold scale-x-100 lg:scale-x-75 text-3xl md:text-5xl lg:text-7xl">
              ACESSE TAMBÉM A CARTILHA DIGITAL
            </h1>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col gap-4 w-full max-w-xs lg:w-auto">
            <a href="https://drive.google.com/drive/folders/1WcosUJL31tjpXqo-uJA7AzrC71067X2h" target="_blank" className="bg-quartiary font-semibold py-4 w-full cursor-pointer px-6 rounded-4xl text-center">
              ABRIR A CARTILHA DIGITAL
            </a>
            <a href="https://forms.gle/vW5i4HUVWMVziTu79" target="_blank" className="bg-quartiary font-semibold py-4 w-full cursor-pointer px-6 rounded-4xl text-center">
              AVALIE O SITE
            </a>
            <div className="flex flex-wrap gap-3">
              <h2 className=" font-bold text-center">
                Formas de contato
                :

              </h2>
              <a title="Clique aqui para nos enviar um e-mail" className=" font-semibold text-center" href="mailto:pontesdecuidado@gmail.com" target="_blank" >

                <Image
                  src={IconMail}
                  alt="ícone instagram"
                  height={55}
                  className=''
                />
                E-mail:
                pontesdecuidado@gmail.com


              </a>
              <a title="Clique aqui para acessar nosso Instagram" className=" font-semibold text-center" href="https://www.instagram.com/pontesdecuidado" target="_blank">
                <Image
                  src={IconIG}
                  alt="ícone e-mail"
                  height={35}
                  className='ml-2 mb-2'
                />
                Instagram:
                @pontesdecuidado
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}