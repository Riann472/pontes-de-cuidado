import { StaticImageData } from "next/image"
import Cras from '../images/organs/cras.png'
import Creas from '../images/organs/creas.png'
import Caps from '../images/organs/caps.png'
import Ubs from '../images/organs/ubs.png'
import Escola from '../images/organs/escola.png'
import Lgbt from '../images/organs/lgbt.png'
import Pop from '../images/organs/pop.png'
import Ong from '../images/organs/ong.png'

export interface organUnity {
    district: string
    coordNumber: string
    organNumber: string
    address: string
    mapLink: string
}

export interface organ {
    id: number
    name: string
    fullname: string
    description: string
    organUnitys: organUnity[]
    image: StaticImageData
}

const organs: organ[] = [
    {
        id: 1,
        name: "CRAS",
        description: "O CRAS (Centro de Referência de Assistência Social) é um serviço público que atende famílias em situação de vulnerabilidade social. Oferece apoio, orientação e acompanhamento para acesso a direitos e benefícios sociais. Promove atividades que fortalecem os vínculos familiares e comunitários. Atua na prevenção de situações de risco social e na inclusão das famílias em programas de proteção e promoção social. É um ponto de referência para orientação e suporte à comunidade local.",
        fullname: "Centro de Referência de Assistência Social",
        organUnitys: [
            {
                address: "Av. Sabino Monte, 4506 - São João do Tauape",
                coordNumber: "(85) 99999-9999",
                organNumber: "(85) 98888-8888",
                district: "Lagamar",
                mapLink: "https://www.google.com/maps"
            },
            {
                address: "Av. João Pessoa, 4474 - Damas",
                coordNumber: "(85) 99999-9999",
                organNumber: "(85) 98888-8888",
                district: "Couto Fernandes",
                mapLink: "https://www.google.com/maps"
            },
            {
                address: "R. Do Avião, s/n - Vila União",
                coordNumber: "(85) 99999-9999",
                organNumber: "(85) 98888-8888",
                district: "Vila União",
                mapLink: "https://www.google.com/maps"
            }
        ],
        image: Cras
    },
    {
        id: 2,
        name: "CREAS",
        description: "Atende pessoas e famílias que vivenciam situações de violação de direitos, como violência doméstica, abuso, abandono ou trabalho infantil, oferecendo acompanhamento.",
        fullname: "Centro de Referência Especializado de Assistência Social",
        organUnitys: [],
        image: Creas
    },
    {
        id: 3,
        name: "CAPS",
        description: "Oferece atendimento gratuito a pessoas com sofrimento mental ou uso abusivo de álcool e outras drogas, com apoio psicológico, psiquiátrico e social.",
        fullname: "Centro de Atenção Psicossocial",
        organUnitys: [],
        image: Caps
    },
    {
        id: 4,
        name: "UBS",
        description: "É a porta de entrada do SUS, onde são realizados atendimentos médicos, vacinação, exames básicos e acompanhamento de gestantes, crianças e idosos.",
        fullname: "Unidades Básicas de Saúde",
        organUnitys: [],
        image: Ubs
    },
    {
        id: 5,
        name: "Clínicas Escola",
        description: "Vinculadas a faculdades, oferecem atendimentos gratuitos ou de baixo custo em áreas como psicologia, fisioterapia, nutrição e outras, com supervisão de professores e profissionais.",
        fullname: "",
        organUnitys: [],
        image: Escola
    },
    {
        id: 6,
        name: "Centros LGBTIQA+",
        description: "Oferecem acolhimento, escuta, orientação jurídica, psicológica e social para pessoas LGBTQIA+, além de promoverem ações de combate à discriminação e inclusão.",
        fullname: "",
        organUnitys: [],
        image: Lgbt
    },
    {
        id: 7,
        name: "Centros POP",
        description: "Atendem pessoas em situação de rua, oferecendo alimentação, higiene, guarda de pertences, encaminhamentos e apoio para reinserção social.",
        fullname: "",
        organUnitys: [],
        image: Pop
    },
    {
        id: 8,
        name: "ONG'S",
        description: "Instituições sem fins lucrativos que atuam em diversas causas sociais e prestam serviços à comunidade, como realização de doações, proteção animal, educação, entre outros auxílios.",
        fullname: "Organizações Não Governamentais",
        organUnitys: [],
        image: Ong
    },
]

export default organs