import { StaticImageData } from "next/image"
import Cras from '../images/organs/cras.png'
import Creas from '../images/organs/creas.png'
import Caps from '../images/organs/caps.png'
import Ubs from '../images/organs/ubs.png'
import Escola from '../images/organs/escola.png'
import Lgbt from '../images/organs/lgbt.png'
import Pop from '../images/organs/pop.png'
import Ong from '../images/organs/ong.png'

interface organ {
    id: number
    name: string
    description: string
    image: StaticImageData
}

const organs: organ[] = [
    {
        id: 1,
        name: "CRAS",
        description: "Atende famílias em situação de vulnerabilidade social, oferecendo apoio, orientações, acesso a benefícios e atividades que fortalecem os vínculos familiares e comunitários.",
        image: Cras
    },
    {
        id: 2,
        name: "CREAS",
        description: "Atende pessoas e famílias que vivenciam situações de violação de direitos, como violência doméstica, abuso, abandono ou trabalho infantil, oferecendo acompanhamento.",
        image: Creas
    },
    {
        id: 3,
        name: "CAPS",
        description: "Oferece atendimento gratuito a pessoas com sofrimento mental ou uso abusivo de álcool e outras drogas, com apoio psicológico, psiquiátrico e social.",
        image: Caps
    },
    {
        id: 4,
        name: "UBS",
        description: "É a porta de entrada do SUS, onde são realizados atendimentos médicos, vacinação, exames básicos e acompanhamento de gestantes, crianças e idosos.",
        image: Ubs
    },
    {
        id: 5,
        name: "CLÍNICAS ESCOLA",
        description: "Vinculadas a faculdades, oferecem atendimentos gratuitos ou de baixo custo em áreas como psicologia, fisioterapia, nutrição e outras, com supervisão de professores e profissionais.",
        image: Escola
    },
    {
        id: 6,
        name: "CENTROS LGBTQIA+",
        description: "Oferecem acolhimento, escuta, orientação jurídica, psicológica e social para pessoas LGBTQIA+, além de promoverem ações de combate à discriminação e inclusão.",
        image: Lgbt
    },
    {
        id: 7,
        name: "CENTROS POP",
        description: "Atendem pessoas em situação de rua, oferecendo alimentação, higiene, guarda de pertences, encaminhamentos e apoio para reinserção social.",
        image: Pop
    },
    {
        id: 8,
        name: "ONG'S",
        description: "Instituições sem fins lucrativos que atuam em diversas causas sociais e prestam serviços à comunidade, como realização de doações, proteção animal, educação, entre outros auxílios.",
        image: Ong
    },
]

export default organs