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

export interface regional {
    id: number
    districts: string[]
    organUnitys: organUnity[]
}

export interface organ {
    id: number
    name: string
    fullname: string
    description: string
    regionals: regional[]
    image: StaticImageData
}

const organs: organ[] = [
    {
        id: 1,
        name: "CRAS",
        description: "O CRAS (Centro de Referência de Assistência Social) é um serviço público que atende famílias em situação de vulnerabilidade social. Oferece apoio, orientação e acompanhamento para acesso a direitos e benefícios sociais. Promove atividades que fortalecem os vínculos familiares e comunitários. Atua na prevenção de situações de risco social e na inclusão das famílias em programas de proteção e promoção social. É um ponto de referência para orientação e suporte à comunidade local.",
        fullname: "Centro de Referência de Assistência Social",
        regionals: [
            {
                id: 1,
                districts: ["Álvaro Weyne", "Barra do Ceará", "Carlito Pamplona", "Cristo Redentor", "Floresta", "Jacarecanga", "Jardim Guanabara", "Jardim Iracema", "Pirambu", "Vila Velha"],
                organUnitys: [
                    {
                        address: "Rua Cândido Castelo Branco, S/N - Barra do Ceará",
                        coordNumber: "(85) 98439-5885",
                        organNumber: "(85) 3452-7738",
                        district: "Barra do Ceará",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Cândido Castelo Branco, S/N - Barra do Ceará, Fortaleza - CE")}`
                    },
                    {
                        address: "Rua Oto de Alencar, n° 27 - Centro",
                        coordNumber: "(85) 98439-6336",
                        organNumber: "(85) 3481-6089",
                        district: "Jacarecanga",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Oto de Alencar, 27 - Centro, Fortaleza - CE")}`
                    },
                    {
                        address: "Quadra - Q. F, 166 - Pres. Kennedy",
                        coordNumber: "(85) 98657-4435",
                        organNumber: "(85) 3481-3001",
                        district: "Presidente Kennedy",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Quadra - Q. F, 166 - Presidente Kennedy, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 2,
                districts: ["Aldeota", "Cais do Porto", "De Lourdes", "Dionísio Torres", "Joaquim Távora", "Meireles", "Mucuripe", "Papicu", "São João do Tauape", "Varjota", "Vicente Pinzon"],
                organUnitys: [
                    {
                        address: "Av. Sabino Monte, 4506 - São João do Tauape",
                        coordNumber: "(85) 98970-2087",
                        organNumber: "(85) 3452-2442",
                        district: "Lagamar",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Sabino Monte, 4506 - São João do Tauape, Fortaleza - CE")}`
                    },
                    {
                        address: "Rua Professor Luís Costa, 142 - Mucuripe",
                        coordNumber: "(85) 98970-3530",
                        organNumber: "(85) 3263-4508",
                        district: "Mucuripe",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Professor Luís Costa, 142 - Mucuripe, Fortaleza - CE")}`
                    },
                    {
                        address: "Av. Zezé Diogo, 1038 - Cais do Porto",
                        coordNumber: "(85) 98439-4525",
                        organNumber: "(85) 3105-2691",
                        district: "Serviluz",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Zezé Diogo, 1038 - Cais do Porto, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 3,
                districts: ["Amadeu Furtado", "Antônio Bezerra", "Farias Brito", "Monte Castelo", "Olavo Oliveira", "Padre Andrade", "Parque Araxá", "Parquelândia", "Presidente Kennedy", "Quintino Cunha", "Rodolfo Teófilo", "São Gerardo", "Vila Ellery"],
                organUnitys: [
                    {
                        address: "Rua. Cândido Maia, 245 - Antônio Bezerra",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3105-1499",
                        district: "Antônio Bezerra",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Cândido Maia, 245 - Antônio Bezerra, Fortaleza - CE")}`
                    },
                    {
                        address: "Rua Visconde do Cauipe, 200 - João XXIII",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3233-3927",
                        district: "João XXIII",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Visconde do Cauipe, 200 - João XXIII, Fortaleza - CE")}`
                    },
                    {
                        address: "Rua Ilha do Bote, 334 - Quintino Cunha",
                        coordNumber: "Não informado",
                        organNumber: "(85) 2180-7892",
                        district: "Quintino Cunha",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Ilha do Bote, 334 - Quintino Cunha, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 6,
                districts: ["Aerolândia", "Alto da Balança", "Cambeba", "Cidade dos Funcionários", "Coaçu", "Curió", "Guajeru", "Jardim das Oliveiras", "José de Alencar", "Lagoa Redonda", "Messejana", "Parque Iracema", "Parque Manibura", "Paupina", "São Bento"],
                organUnitys: [
                    {
                        district: "Jardim das Oliveiras",
                        address: "Rua Major Otacílio, nº 61 - Jardim das Oliveiras",
                        organNumber: "(85) 2180-7041",
                        coordNumber: "98970-3847",
                        mapLink: "https://www.google.com/maps/search/Rua+Major+Otacílio,+61+-+Jardim+das+Oliveiras,+Fortaleza"
                    },
                    {
                        district: "Messejana",
                        address: "Rua Edmilson Coelho, nº 1720 (ABC Curió) - Lagoa Redonda",
                        organNumber: "(85) 2180-7763",
                        coordNumber: "98970-4058",
                        mapLink: "https://www.google.com/maps/search/Rua+Edmilson+Coelho,+1720+-+Lagoa+Redonda,+Fortaleza"
                    }
                ]
            },
            {
                id: 7,
                districts: ["Cidade 2000", "Cocó", "Edson Queiroz", "Guararapes", "Luciano Cavalcante", "Manuel Dias Branco", "Praia do Futuro I", "Praia do Futuro II", "Sabiaguaba", "Salinas", "Sapiranga/Coité"],
                organUnitys: [
                    {
                        district: "Praia do Futuro II",
                        address: "Praia do Futuro II, Fortaleza - CE, 60714-222",
                        organNumber: "(85) 3265-7367",
                        coordNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/place/CRAS+Praia+do+Futuro+II/@-3.7645787,-38.4452106,17z/data=!3m1!4b1!4m6!3m5!1s0x7c746864cab2fd7:0x353e568771804908!8m2!3d-3.7645787!4d-38.440345!16s%2Fg%2F11fyzcw4tm?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                    },
                    {
                        district: "Dendê",
                        address: "R. Adolfo Moreira de Carvalho, 96 - Edson Queiroz",
                        organNumber: "3276-7476",
                        coordNumber: "98970-4063",
                        mapLink: "https://www.google.com/maps/search/R.+Adolfo+Moreira+de+Carvalho,+96+-+Edson+Queiroz,+Fortaleza"
                    }
                ]
            },
            {
                id: 8,
                districts: ["Boa Vista", "Dendê", "Dias Macedo", "Itaperi", "Parque Dois Irmãos", "Passaré", "Serrinha"],
                organUnitys: [
                    {
                        district: "Castelão",
                        address: "Av. Alberto Craveiro, 1480 - Dias Macedo",
                        organNumber: "(85) 3289-3768",
                        coordNumber: "98970-4355",
                        mapLink: "https://www.google.com/maps/search/Av.+Alberto+Craveiro,+1480+-+Dias+Macedo,+Fortaleza"
                    },
                    {
                        district: "Serrinha",
                        address: "Rua Inácio Parente, 100 - Serrinha",
                        organNumber: "3295-8483",
                        coordNumber: "98439-6357",
                        mapLink: "https://www.google.com/maps/search/Rua+Inácio+Parente,+100+-+Serrinha,+Fortaleza"
                    }
                ]
            },
            {
                id: 9,
                districts: ["Ancuri", "Barroso", "Cajazeiras", "Conjunto Palmeiras", "Jangurussu", "Parque Santa Maria", "Pedras"],
                organUnitys: [
                    {
                        district: "João Paulo II",
                        address: "Rua 10, n° 75 - Conj. J. Paulo II, Barroso",
                        organNumber: "3488-5893",
                        coordNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Rua+10,+75+-+Barroso,+Fortaleza"
                    },
                    {
                        district: "Conjunto Palmeiras",
                        address: "Rua Iracema, nº 1860 - Conjunto Palmeiras",
                        organNumber: "3105-1526",
                        coordNumber: "98970-3847",
                        mapLink: "https://www.google.com/maps/search/Rua+Iracema,+1860+-+Conjunto+Palmeiras,+Fortaleza"
                    }
                ]
            },
            {
                id: 10,
                districts: ["Aracapé", "Canindezinho", "Conjunto Esperança", "Jardim Cearense", "Maraponga", "Mondubim", "Novo Mondubim", "Parque Presidente Vargas", "Parque Santa Rosa", "Parque São José", "Vila Manoel Sátiro"],
                organUnitys: [
                    {
                        district: "Aracapé",
                        address: "Rua Poliana, 106 - Aracapé",
                        organNumber: "(85) 3296-4098",
                        coordNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Rua+Poliana,+106+-+Aracapé,+Fortaleza"
                    },
                    {
                        district: "Conjunto Esperança",
                        address: "Rua 103, 195 - Conj. Esperança",
                        organNumber: "3484-8115",
                        coordNumber: "98439-4694",
                        mapLink: "https://www.google.com/maps/search/Rua+103,+195+-+Conjunto+Esperança,+Fortaleza"
                    },
                    {
                        district: "Mondubim",
                        address: "Av. Waldir Diogo, 840 - Manuel Sátiro",
                        organNumber: "3452-9360",
                        coordNumber: "98970-4057",
                        mapLink: "https://www.google.com/maps/search/Av.+Waldir+Diogo,+840+-+Manuel+Sátiro,+Fortaleza"
                    }
                ]
            },
            {
                id: 11,
                districts: ["Autran Nunes", "Bela Vista", "Conjunto Ceará I", "Conjunto Ceará II", "Couto Fernandes", "Demócrito Rocha", "Dom Lustosa", "Genibaú", "Henrique Jorge", "João XXIII", "Jóquei Clube", "Panamericano", "Pici"],
                organUnitys: [
                    {
                        district: "Bela Vista",
                        address: "Rua Mário de Andrade, 496 A - Bela Vista",
                        organNumber: "(85) 3131-7710",
                        coordNumber: "98894-3878",
                        mapLink: "https://www.google.com/maps/search/Rua+Mário+de+Andrade,+496+A+-+Bela+Vista,+Fortaleza"
                    },
                    {
                        district: "Genibaú",
                        address: "Rua 1107 - Conjunto Ceará I",
                        organNumber: "3259-4253",
                        coordNumber: "98970-8122",
                        mapLink: "https://www.google.com/maps/search/Rua+1107+-+Conjunto+Ceará+I,+Fortaleza"
                    }
                ]
            },
            {
                id: 12,
                districts: ["Centro", "Moura Brasil", "Praia de Iracema"],
                organUnitys: [
                    {
                        district: "Jacarecanga",
                        address: "Rua Oto de Alencar, n° 27 - Centro",
                        organNumber: "3481-6089",
                        coordNumber: "98439-6336",
                        mapLink: "https://www.google.com/maps/search/Rua+Oto+de+Alencar,+27+-+Centro,+Fortaleza"
                    },
                    {
                        district: "Mucuripe",
                        address: "Rua Professor Luís Costa, 142 - Mucuripe",
                        organNumber: "3263-4508",
                        coordNumber: "98970-3530",
                        mapLink: "https://www.google.com/maps/search/Rua+Professor+Luís+Costa,+142+-+Mucuripe,+Fortaleza"
                    }
                ]
            }
        ],
        image: Cras
    },
    {
        id: 2,
        name: "CREAS",
        description: "Atende pessoas e famílias que vivenciam situações de violação de direitos, como violência doméstica, abuso, abandono ou trabalho infantil, oferecendo acompanhamento.",
        fullname: "Centro de Referência Especializado de Assistência Social",
        regionals: [],
        image: Creas
    },
    {
        id: 3,
        name: "CAPS",
        description: "Oferece atendimento gratuito a pessoas com sofrimento mental ou uso abusivo de álcool e outras drogas, com apoio psicológico, psiquiátrico e social.",
        fullname: "Centro de Atenção Psicossocial",
        regionals: [],
        image: Caps
    },
    {
        id: 4,
        name: "UBS",
        description: "É a porta de entrada do SUS, onde são realizados atendimentos médicos, vacinação, exames básicos e acompanhamento de gestantes, crianças e idosos.",
        fullname: "Unidades Básicas de Saúde",
        regionals: [],
        image: Ubs
    },
    {
        id: 5,
        name: "Clínicas Escola",
        description: "Vinculadas a faculdades, oferecem atendimentos gratuitos ou de baixo custo em áreas como psicologia, fisioterapia, nutrição e outras, com supervisão de professores e profissionais.",
        fullname: "",
        regionals: [],
        image: Escola
    },
    {
        id: 6,
        name: "Centros LGBTIQA+",
        description: "Oferecem acolhimento, escuta, orientação jurídica, psicológica e social para pessoas LGBTQIA+, além de promoverem ações de combate à discriminação e inclusão.",
        fullname: "",
        regionals: [],
        image: Lgbt
    },
    {
        id: 7,
        name: "Centros POP",
        description: "Atendem pessoas em situação de rua, oferecendo alimentação, higiene, guarda de pertences, encaminhamentos e apoio para reinserção social.",
        fullname: "",
        regionals: [],
        image: Pop
    },
    {
        id: 8,
        name: "ONG'S",
        description: "Instituições sem fins lucrativos que atuam em diversas causas sociais e prestam serviços à comunidade, como realização de doações, proteção animal, educação, entre outros auxílios.",
        fullname: "Organizações Não Governamentais",
        regionals: [],
        image: Ong
    },
]

export default organs