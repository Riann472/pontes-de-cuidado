import Image1 from './images/image.png'
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
        <div className={`${notoSans} w-[50vw] bg-primary p-8 rounded-tr-xl rounded-br-xl`}>
          <p className="text-secondary font-bold">CONHEÇA SEUS DIREITOS</p>
          <div className="flex gap-4 items-end">
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
      <section className="bg-primary p-12 px-44 flex gap-8 mb-10">
        <div>
          <div className="bg-secondary w-[25vw] h-full"></div>
        </div>
        <div className="flex flex-col gap-5 text-white">
          <MoveDownRight className="text-secondary" />
          <h2 className="font-bold text-4xl">SOBRE O PROJETO</h2>
          <p className="font-semibold">O Pontes de Cuidado nasceu da vontade de aproximar as pessoas dos serviços que podem transformar vidas.</p>
          <p className="font-semibold">Muitas vezes, quem precisa de ajuda não sabe por onde começar. Nosso objetivo é tornar o acesso à informação mais simples e humano, reunindo em um só lugar as principais redes de apoio disponíveis em Fortaleza - Ce.</p>
          <p className="text-secondary font-semibold">Acreditamos que informação também é cuidado. E que cuidar é um ato coletivo.</p>
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
    </main>
  );
}