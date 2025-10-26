import Image1 from './images/image.png'
import Image2 from './images/imagem1.png'
import Image3 from './images/imagem2.png'
import { Noto_Sans } from "next/font/google";
import Button from "./components/Button";
import Card from "./components/Card";
import { MoveDownRight } from "lucide-react";
import Image from 'next/image';

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <section className="flex my-10 justify-between gap-12">
        <div className={`w-[50vw] bg-primary p-8 rounded-tr-xl rounded-br-xl flex flex-col justify-center`}>
          <p className={`text-secondary font-bold text-base`}>CONHEÇA SEUS DIREITOS</p>
          <div className="flex items-end">
            <h1 className="text-8xl text-white font-extrabold scale-x-75 origin-left">REDES DE APOIO EM FORTALEZA</h1>
            <div className="flex flex-col gap-3">
              <Button className="bg-secondary text-white">SAIBA MAIS</Button>
              <Button className="bg-secondary text-white">EMERGÊNCIA</Button>
            </div>
          </div>
        </div>
        <div className="mr-10">
          <Image
            src={Image1}
            alt="Imagem representando redes de apoio"
            className="rounded-xl"
            width={320}
            height={200}
          />

        </div>
      </section>
      <section className="bg-primary p-16 px-60 flex gap-8 mb-10">
        <div>
          <Image
            src={Image2}
            alt="Imagem 2"
            className='rounded-xl'
            height={550}
          />
        </div>
        <div className="flex flex-col gap-5 text-white itens-center justify-center">
          <MoveDownRight className="text-secondary" />
          <h2 className="font-semibold text-5xl scale-x-75 origin-left">SOBRE O PROJETO</h2>
          <p className="font-semibold text-xl">O Pontes de Cuidado nasceu da vontade de aproximar as pessoas dos serviços que podem transformar vidas.</p>
          <p className="font-semibold text-xl">Muitas vezes, quem precisa de ajuda não sabe por onde começar. Nosso objetivo é tornar o acesso à informação mais simples e humano, reunindo em um só lugar as principais redes de apoio disponíveis em Fortaleza - Ce.</p>
          <p className="text-secondary font-semibold text-xl">Acreditamos que informação também é cuidado. E que cuidar é um ato coletivo.</p>
        </div>

      </section>
      <section className="flex flex-col items-center relative">
        <h1 className={`${notoSans} font-extrabold text-3xl text-secondary mb-10`}>ORGÃOS</h1>
        <div className="flex gap-18 justify-center flex-wrap">
          <Card
            src="https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image_large"
            organ="CRAS"
            description="Atende famílias em situação de vulnerabilidade social, oferecendo apoio, orientações, acesso a benefícios e atividades que fortalecem os vínculos familiares e comunitários."
          />
          <Card
            src="https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image_large"
            organ="CRAS"
            description="Atende famílias em situação de vulnerabilidade social, oferecendo apoio, orientações, acesso a benefícios e atividades que fortalecem os vínculos familiares e comunitários."
          />
          <Card
            src="https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image_large"
            organ="CRAS"
            description="Atende famílias em situação de vulnerabilidade social, oferecendo apoio, orientações, acesso a benefícios e atividades que fortalecem os vínculos familiares e comunitários."
          />
          <Card
            src="https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image_large"
            organ="CRAS"
            description="Atende famílias em situação de vulnerabilidade social, oferecendo apoio, orientações, acesso a benefícios e atividades que fortalecem os vínculos familiares e comunitários."
          />
          <Card
            src="https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image_large"
            organ="CRAS"
            description="Atende famílias em situação de vulnerabilidade social, oferecendo apoio, orientações, acesso a benefícios e atividades que fortalecem os vínculos familiares e comunitários."
          />
          <Card
            src="https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image_large"
            organ="CRAS"
            description="Atende famílias em situação de vulnerabilidade social, oferecendo apoio, orientações, acesso a benefícios e atividades que fortalecem os vínculos familiares e comunitários."
          />
          <Card
            src="https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image_large"
            organ="CRAS"
            description="Atende famílias em situação de vulnerabilidade social, oferecendo apoio, orientações, acesso a benefícios e atividades que fortalecem os vínculos familiares e comunitários."
          />
          <Card
            src="https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image_large"
            organ="CRAS"
            description="Atende famílias em situação de vulnerabilidade social, oferecendo apoio, orientações, acesso a benefícios e atividades que fortalecem os vínculos familiares e comunitários."
          />
        </div>
      </section>

      <section className='bg-primary flex justify-between py-12 px-24 items-center'>
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
    </main>
  );
}