"use client"

import Image1 from './images/image.png'
import Image2 from './images/imagem1.png'
import Image3 from './images/imagem2.png'
import Image4 from './images/imagem3.png'
import Image5 from './images/imagem4.png'
import Image6 from './images/imagem5.png'
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
    organUnitys: []
  })

  return (
    <main>
      {openModal && (
        <Modal setOpenModal={setOpenModal} modalData={modalData}/>
      )}
      <section id='home' className="flex py-12 justify-between gap-12">
        <div className={`2xl:w-[60vw] xl:w-[55vw] bg-primary p-8 rounded-tr-xl rounded-br-xl flex flex-col justify-center items-center`}>
          <p className={`${notoSans.variable} text-2xl text-secondary font-bold`}>CONHEÇA SEUS DIREITOS</p>
          <h1 className="text-8xl text-white font-extrabold scale-x-70 text-center mb-10 mt-3">REDES DE APOIO EM FORTALEZA</h1>
          <div className="flex gap-3">
            <Button onClick={() => scrollToSection("sobre")} className="bg-secondary text-white">SAIBA MAIS</Button>
            <Button onClick={() => scrollToSection("emergencias")} className="bg-secondary text-white">EMERGÊNCIA</Button>
          </div>
        </div>
        <div className="mr-24">
          <Image
            src={Image1}
            alt="Imagem representando redes de apoio"
            className="rounded-xl w-[500px]"
            height={200}
          />
        </div>
      </section>
      <section id='sobre' className="z-10 relative bg-primary p-16 px-60 flex gap-12 items-center">
        <div>
          <Image
            src={Image2}
            alt="Imagem 2"
            className='rounded-xl'
            height={1000}
          />
        </div>
        <div className="flex flex-col gap-10 text-white itens-center justify-center">
          <div>
            <ArrowDownRight size={60} strokeWidth={3} className="text-secondary" />
            <h2 className="mt-4 font-semibold text-5xl scale-x-75 origin-left">SOBRE O PROJETO</h2>
          </div>
          <p className="font-semibold text-2xl">O Pontes de Cuidado nasceu da vontade de aproximar as pessoas dos serviços que podem transformar vidas.</p>
          <p className="font-semibold text-2xl">Muitas vezes, quem precisa de ajuda não sabe por onde começar. Nosso objetivo é tornar o acesso à informação mais simples e humano, reunindo em um só lugar as principais redes de apoio disponíveis em Fortaleza - Ce.</p>
          <p className="text-secondary font-semibold text-2xl">Acreditamos que informação também é cuidado. E que cuidar é um ato coletivo.</p>
        </div>

      </section>
      <section id='orgaos' className="max-w-[100vw] overflow-hidden flex flex-col items-center relative py-12">
        <Image
          src={Image4}
          alt="Espiral"
          width={250}
          className='absolute left-[-100px] top-[-150px] z-0 transform rotate-45'
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
          className='absolute -bottom-20 right-[-100px] z-0'
        />

      </section>
      <section id='emergencias' className='relative z-10 bg-primary flex justify-between py-12 px-24 items-center'>
        <div className='ml-12 w-[30vw]'>
          <div className='w-[70%] h-full'>
            <Image
              src={Image3}
              alt="Imagem 3"
              className='rounded-xl'
              height={500}
            />
          </div>
        </div>
        <div className='w-[55vw] bg-tertiary rounded-2xl p-12 flex flex-col'>
          <h2 className='font-extrabold scale-x-75 origin-left text-4xl mb-4'>EMERGÊNCIAS</h2>
          <p className='mb-6 text-lg'>Situações de crise acontecem de forma inesperada e nesses momentos é essencial saber a quem recorrer rapidamente. Aqui reunimos canais de emergência e
            atendimento imediato para casos de violência, risco à vida, crises emocionais e outros tipos de urgência.</p>
          <p className='mb-6 text-lg'>Guarde esses números e compartilhe com pessoas próximas. Eles podem <strong>salvar vidas!</strong></p>
          <h3 className='text-lg font-bold mb-2'>NÚMEROS IMPORTANTES</h3>
          <ul className='ml-5 list-disc'>
            <li className='font-normal'>CVV (apoio emocional): <strong>188</strong></li>
            <li className='font-normal'>Central de Atendimento à Mulher: <strong>180</strong></li>
            <li className='font-normal'>Disque Direitos Humanos / Criança, Idoso e LGBTQIA+: <strong>100</strong></li>
            <li className='font-normal'>Polícia Militar: <strong>190</strong></li>
            <li className='font-normal'>SAMU (urgências médicas): <strong>192</strong></li>
            <li className='font-normal'>Corpo de Bombeiros: <strong>193</strong></li>
            <li className='font-normal'>Casa da Mulher Brasileira – Fortaleza: <strong>(85) 3108-2999</strong></li>
          </ul>
        </div>
      </section>
      <section id='saibamais' className='flex py-12 items-center gap-24'>
        <div>
          <Image
            src={Image5}
            alt="Pessoa"
            width={300}
            className='opacity-20'
          />
        </div>
        <div className='w-[70%]'>
          <p className='text-2xl mb-8'>Este site foi desenvolvido pelos discentes integrantes do Projeto de Extensão em Responsabilidade Social do Centro Universitário Farias Brito (FB Uni), como parte das atividades voltadas à integração entre ensino, pesquisa e compromisso social.</p>
          <p className='text-2xl'><strong>Integrantes</strong>: <br />Ana Clara Figueiredo Freire • Francisco Luiz Aguiar da Silva • Júlio César Mesquita Barreto • Lara Louise dos Santos Sales • Riann Carvalho Mota</p>
        </div>
      </section>
      <footer id='footer' className='bg-tertiary py-12 flex justify-center items-center'>
        <div className='flex justify-around items-center w-[80vw]'>
          <div>
            <Image
              src={Image6}
              alt="Logo"
              width={220}
            />
          </div>
          <div>
            <h1 className='text-7xl font-extrabold scale-x-75 text-center'>ACESSE TAMBÉM A CARTILHA DIGITAL</h1>
          </div>
          <div className='flex flex-col gap-4'>
            <Button className='bg-quartiary font-semibold py-4 w-72'>ABRIR A CARTILHA DIGITAL</Button>
            <Button className='bg-quartiary font-semibold py-4 w-72'>AVALIE O SITE</Button>
          </div>
        </div>
      </footer>
    </main>
  );
}