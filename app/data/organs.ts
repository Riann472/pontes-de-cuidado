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
    info?: string
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
    info?: string[]
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
        regionals: [
            {
                id: 1,
                districts: ["Alvorada", "Conjunto Ceará", "Luciano Cavalcante", "Vicente Pinzon", "Monte Castelo", "Amadeu Furtado"],
                organUnitys: [
                    {
                        address: "R. Crisanto Moreira da Rocha, 650 - Sapiranga (Coité)",
                        coordNumber: "(85) 98968-3993",
                        organNumber: "(85) 3273-2665",
                        district: "Alvorada",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("R. Crisanto Moreira da Rocha, 650 - Sapiranga (Coité), Fortaleza - CE")}`
                    },
                    {
                        address: "Av. Alanis Maria Laurindo de Oliveira, 461 - Conj. Ceará I",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3259-4226",
                        district: "Conjunto Ceará",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Alanis Maria Laurindo de Oliveira, 461 - Conj. Ceará I, Fortaleza - CE")}`
                    },
                    {
                        address: "Av. Dr. Thompson Bulcão, 854 – Luciano Cavalcante",
                        coordNumber: "(85) 98970-4067",
                        organNumber: "Não informado",
                        district: "Luciano Cavalcante",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Dr. Thompson Bulcão, 854 – Luciano Cavalcante, Fortaleza - CE")}`
                    },
                    {
                        address: "Rua Professor Luíz Costa, 142 - Vicente Pinzon (Endereço provisório)",
                        coordNumber: "(85) 99997-9304",
                        organNumber: "Não informado",
                        district: "Vicente Pinzon",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Professor Luíz Costa, 142 - Vicente Pinzon, Fortaleza - CE")}`
                    },
                    {
                        address: "Rua Gilberto Câmara, nº 996 - Monte Castelo",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3131-7670",
                        district: "Monte Castelo",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Gilberto Câmara, 996 - Monte Castelo, Fortaleza - CE")}`
                    },
                    {
                        address: "Rua Dom Lino, 1001 - Amadeu Furtado",
                        coordNumber: "(85) 98972-8284",
                        organNumber: "Não informado",
                        district: "Amadeu Furtado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Dom Lino, 1001 - Amadeu Furtado, Fortaleza - CE")}`
                    }
                ]
            }
        ],
        image: Creas
    },
    {
        id: 3,
        name: "CAPS",
        description: `Oferece atendimento gratuito a pessoas com sofrimento mental ou uso abusivo de álcool e outras drogas, com apoio psicológico, psiquiátrico e social. CAPS Gerais: atendem pessoas com sofrimentos psíquicos ou transtornos mentais severos e persistentes. ▪︎ CAPS AD: cuidado com pessoas em uso problemático de substâncias psicoativas. ▪︎ CAPS Infanto - juvenis: atendimentos à crianças e adolescentes em sofrimento psíquico / transtornos mentais graves e usos de substâncias psicoativas`,
        info: ["CAPS Gerais: atendem pessoas com sofrimentos psíquicos ou transtornos mentais severos e persistentes.",
                "CAPS AD: cuidado com pessoas em uso problemático de substâncias psicoativas.",
                "CAPS Infanto-juvenis: atendimentos à crianças e adolescentes em sofrimento psíquico/transtornos mentais graves e usos de substâncias psicoativas"],
        fullname: "Centro de Atenção Psicossocial",
        regionals: [
            {
                id: 1,
                districts: [],
                organUnitys: [
                    {
                        district: "CAPS AD I 24h Dr. Airton Monte",
                        address: "Av. Monsenhor Hélio Campos, 138 - Cristo Redentor",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3433-9513",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Monsenhor Hélio Campos, 138 - Cristo Redentor, Fortaleza - CE")}`
                    },
                    {
                        district: "CAPS Geral I Nise da Silveira",
                        address: "Rua Soares Bulcão, 1494 - São Gerardo",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3105-1119",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Soares Bulcão, 1494 - São Gerardo, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 2,
                districts: [],
                organUnitys: [
                    {
                        district: "CAPS AD II Centro",
                        address: "Rua Dona Leopoldina, 08 - Centro",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3105-1164",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Dona Leopoldina, 08 - Centro, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 3,
                districts: [],
                organUnitys: [
                    {
                        district: "CAPS AD III",
                        address: "Rua General Bernardo Figueiredo, 1991 - Amadeu Furtado",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3105-3420",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua General Bernardo Figueiredo, 1991 - Amadeu Furtado, Fortaleza - CE")}`
                    },
                    {
                        district: "CAPS Geral III",
                        address: "Rua Pastor Samuel Munguba, 1269 - Rodolfo Teófilo",
                        coordNumber: "Não informado",
                        organNumber: "3452-6619",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Pastor Samuel Munguba, 1269 - Rodolfo Teófilo, Fortaleza - CE")}`
                    },
                    {
                        district: "CAPS Infantil III Estudante Nogueira Jucá",
                        address: "Rua Porfírio Sampaio, 1905 - Rodolfo Teófilo",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3105-3721",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Porfírio Sampaio, 1905 - Rodolfo Teófilo, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 4,
                districts: [],
                organUnitys: [
                    {
                        district: "CAPS AD IV - Alto da Coruja",
                        address: "Rua Betel, 1826 - Itaperi",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3105-2006",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Betel, 1826 - Itaperi, Fortaleza - CE")}`
                    },
                    {
                        district: "CAPS Geral IV",
                        address: "Av. Borges de Melo, 201 - Jardim América",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3131-1690 e 3494-2765",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Borges de Melo, 201 - Jardim América, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 5,
                districts: [],
                organUnitys: [
                    {
                        district: "CAPS AD V",
                        address: "Rua Antônio Nery - Granja Portugal",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3105-1023",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Antônio Nery - Granja Portugal, Fortaleza - CE")}`
                    },
                    {
                        district: "CAPS Geral V",
                        address: "Rua Bom Jardim, 940 - Bom Jardim",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3245-7956",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Bom Jardim, 940 - Bom Jardim, Fortaleza - CE")}`
                    },
                    {
                        district: "CAPS Infantil V",
                        address: "Rua Humberto Lomeu, 1104 - Granja Portugal (ao lado do CRAS da Granja Portugal)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3105-3721",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Humberto Lomeu, 1104 - Granja Portugal, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 6,
                districts: [],
                organUnitys: [
                    {
                        district: "CAPS AD VI - Casa Liberdade",
                        address: "Rua Monsenhor Carneiro da Cunha, 140 - Luciano Cavalcante",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3278-7008",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Monsenhor Carneiro da Cunha, 140 - Luciano Cavalcante, Fortaleza - CE")}`
                    },
                    {
                        district: "CAPS Infantil VI - Maria Ileuda Verçosa",
                        address: "Rua Alberto Leal Nunes, 75 - Cidade dos Funcionários",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3105-1510",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Alberto Leal Nunes, 75 - Cidade dos Funcionários, Fortaleza - CE")}`
                    }
                ]
            }
        ],
        image: Caps
    },
    {
        id: 4,
        name: "UBS",
        description: "É a porta de entrada do SUS, onde são realizados atendimentos médicos, vacinação, exames básicos e acompanhamento de gestantes, crianças e idosos.",
        fullname: "Unidades Básicas de Saúde",
        regionals: [
            {
                id: 1,
                districts: ["Jardim Iracema", "Jacarecanga", "Barra do Ceará", "Álvaro Weyne", "Pirambu", "Vila Velha", "Moura Brasil", "Monte Castelo", "Jardim Guanabara", "Cristo Redentor", "Carlito Pamplona", "Floresta"],
                organUnitys: [
                    {
                        district: "UBS Airton Monte",
                        address: "Rua Alberto Oliveira, s/n - Jardim Iracema",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Alberto Oliveira, s/n - Jardim Iracema, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Carlos Ribeiro",
                        address: "Rua Francisco Sá, 2370 - Jacarecanga",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Francisco Sá, 2370 - Jacarecanga, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Casemiro Filho",
                        address: "Av. Francisco Sá, 6449 - Barra do Ceará",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Francisco Sá, 6449 - Barra do Ceará, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Francisco Domingos da Silva",
                        address: "Avenida Castelo Branco, 4707 - Barra do Ceará",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Avenida Castelo Branco, 4707 - Barra do Ceará, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Fernando Façanha",
                        address: "Rua Rio Tocantins, s/n - Jardim Iracema",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Rio Tocantins, s/n - Jardim Iracema, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Floresta (em reforma)",
                        address: "Rua Tenente José Barreira, 251 - Álvaro Weyne",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Tenente José Barreira, 251 - Álvaro Weyne, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Guiomar Arruda",
                        address: "Rua Gal Costa Matos, 06 - Pirambu",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Gal Costa Matos, 06 - Pirambu, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS João Medeiros de Lima",
                        address: "Av. I, 982 - Vila Velha",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. I, 982 - Vila Velha, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Lineu Jucá",
                        address: "Rua Vila Velha II, 101 - Barra do Ceará",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Vila Velha II, 101 - Barra do Ceará, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Maria Aparecida",
                        address: "Av. K, 915 - Vila Velha",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. K, 915 - Vila Velha, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Maria Cirino Souza",
                        address: "Rua da Saudade, 364 - Moura Brasil",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua da Saudade, 364 - Moura Brasil, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Paulo de Melo",
                        address: "Rua Bernardo Porto, 497 - Monte Castelo",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Bernardo Porto, 497 - Monte Castelo, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS 4 Varas (em reforma)",
                        address: "Rua Profeta Isaías, 456 - Barra do Ceará",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Profeta Isaías, 456 - Barra do Ceará, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Rebouças Macambira",
                        address: "Rua Creuza Rocha, s/n - Jardim Guanabara",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Creuza Rocha, s/n - Jardim Guanabara, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Virgílio Távora (em reforma parcial)",
                        address: "Av. Mons. Hélio Campos, s/n - Cristo Redentor",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Mons. Hélio Campos, s/n - Cristo Redentor, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Dr. Zenirton Pereira da Silva",
                        address: "R. José Roberto Sales, 475 - Barra do Ceará",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("R. José Roberto Sales, 475 - Barra do Ceará, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Antônio Teixeira de Souza",
                        address: "Av. Tenente Lisboa, s/n - Carlito Pamplona",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Tenente Lisboa, s/n - Carlito Pamplona, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Dr. Miguel Schettini Neto",
                        address: "R. Frei Odilon, s/n - Floresta",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("R. Frei Odilon, s/n - Floresta, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 2,
                districts: ["Vicente Pinzon", "Luciano Cavalcante", "Cais do Porto", "Mucuripe", "Praia do Futuro", "São João do Tauape", "Aldeota", "Centro", "Pio XII", "Cidade 2000", "Papicu"],
                organUnitys: [
                    {
                        district: "UBS Aida Santos e Silva",
                        address: "Rua Trajano de Medeiros, 813 - Vicente Pinzon",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Trajano de Medeiros, 813 - Vicente Pinzon, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Benedito Arthur de Carvalho",
                        address: "Rua José Guilherme da Costa, 228 - Luciano Cavalcante",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua José Guilherme da Costa, 228 - Luciano Cavalcante, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Célio Brasil Girão",
                        address: "Rua Henrique Firmeza, 82 - Cais do Porto",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Henrique Firmeza, 82 - Cais do Porto, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Flávio Marcílio",
                        address: "Av. Abolição, 4180 - Mucuripe",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Abolição, 4180 - Mucuripe, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Frei Tito",
                        address: "Rua José Cláudio Costa Lima, 100 - Praia do Futuro",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua José Cláudio Costa Lima, 100 - Praia do Futuro, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Irmã Hercília Aragão",
                        address: "Rua Frei Vidal, 1821 - São João do Tauape",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Frei Vidal, 1821 - São João do Tauape, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Miriam Porto Mota",
                        address: "Rua Cel. Jucá, 1636 - Aldeota",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Cel. Jucá, 1636 - Aldeota, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Odorico de Morais (em reforma)",
                        address: "Rua Esperantina, s/n - Cais do Porto",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Esperantina, s/n - Cais do Porto, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Paulo Marcelo",
                        address: "Rua 25 de Março, 607 - Centro",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua 25 de Março, 607 - Centro, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Geraldo Madeira Sobrinho - Pio XII",
                        address: "Rua Belizário Távora, s/n - Pio XII",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Belizário Távora, s/n - Pio XII, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Rigoberto Romero",
                        address: "Rua Alameda das Graviolas, 195 - Cidade 2000",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Alameda das Graviolas, 195 - Cidade 2000, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Sandra Maria Faustino",
                        address: "Rua Josias Paula de Souza, s/n - Vicente Pinzon",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Josias Paula de Souza, s/n - Vicente Pinzon, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Liduína Maria Araújo",
                        address: "Rua Ramos Botelho, 601 - Papicu",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Ramos Botelho, 601 - Papicu, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Fátima Maria Quezado Fernandes",
                        address: "Av. Pintor Antônio Bandeira, s/n - Praia do Futuro",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Pintor Antônio Bandeira, s/n - Praia do Futuro, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 3,
                districts: [
                    "Rodolfo Teófilo",
                    "Pici",
                    "Padre Andrade",
                    "Autran Nunes",
                    "Henrique Jorge",
                    "Bela Vista",
                    "Quintino Cunha",
                    "Antônio Bezerra",
                    "Presidente Kennedy",
                    "João XXIII",
                    "Bonsucesso",
                    "Parque Araxá",
                    "Jóquei Clube"
                ],
                organUnitys: [
                    {
                        district: "UBS Anastácio Magalhães (em reforma)",
                        address: "Rua Delmiro de Farias, 1679 - Rodolfo Teófilo",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Delmiro de Farias, 1679 - Rodolfo Teófilo, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS César Cals de Oliveira Filho",
                        address: "Rua Pernambuco, 3172 - Pici",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Pernambuco, 3172 - Pici, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Clodoaldo Pinto (em reforma parcial)",
                        address: "Rua Banward Bezerra, 100 - Padre Andrade",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Banward Bezerra, 100 - Padre Andrade, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Eliézer Studart",
                        address: "Rua Tomás Cavalcante, 546 - Autran Nunes",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Tomás Cavalcante, 546 - Autran Nunes, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Fernandes Távora",
                        address: "Rua Maceió, 1354 - Henrique Jorge",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Maceió, 1354 - Henrique Jorge, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Francisco Pereira de Almeida",
                        address: "Rua Paraguai, 351 - Bela Vista",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Paraguai, 351 - Bela Vista, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS George Benevides",
                        address: "Rua Pio Saraiva, 168 - Quintino Cunha",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Pio Saraiva, 168 - Quintino Cunha, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Hermínia Leitão",
                        address: "Rua Gen. Couto, 470 - Quintino Cunha",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Gen. Couto, 470 - Quintino Cunha, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Humberto Bezerra",
                        address: "Rua Hugo Victor, 51 - Antônio Bezerra",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Hugo Victor, 51 - Antônio Bezerra, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Ivana Paes (em reforma total)",
                        address: "Rua Virgílio Brígido, s/n - Presidente Kennedy",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Virgílio Brígido, s/n - Presidente Kennedy, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Cícera Carla Almeida - João XXIII",
                        address: "Rua Júlio Braga, s/n - João XXIII",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Júlio Braga, s/n - João XXIII, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Licínio Nunes de Miranda",
                        address: "Rua 06, S/N - Quintino Cunha",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua 06, S/N - Quintino Cunha, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Luís Recamonde Capelo",
                        address: "Rua Maria Quintela, 935 - Bonsucesso",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Maria Quintela, 935 - Bonsucesso, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Mariusa Silva de Sousa",
                        address: "Rua Araçá, s/n - Bonsucesso",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Araçá, s/n - Bonsucesso, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Meton de Alencar (em reforma parcial)",
                        address: "Rua Perdigão Sampaio, 820 - Antônio Bezerra",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Perdigão Sampaio, 820 - Antônio Bezerra, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Santa Liduina",
                        address: "Rua Prof. João Bosco, 213 - Parque Araxá",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Prof. João Bosco, 213 - Parque Araxá, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS José Sobreira de Amorim",
                        address: "Rua Des. Luís Paulino, 190 - Jóquei Clube",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Des. Luís Paulino, 190 - Jóquei Clube, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Waldemar Alcântara",
                        address: "Rua Silveira Filho, 903 - Jóquei Clube",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Silveira Filho, 903 - Jóquei Clube, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Gilmário Mourão Teixeira",
                        address: "Rua Pernambuco, 1674 - Pici",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Pernambuco, 1674 - Pici, Fortaleza - CE")}`
                    },
                    {
                        district: "UBS Fábio Martins de Lima",
                        address: "Rua Gustavo Braga, 547 - Rodolfo Teófilo",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Gustavo Braga, 547 - Rodolfo Teófilo, Fortaleza - CE")}`
                    }
                ]
            },
            {
                id: 4,
                districts: ["Demócrito Rocha", "Itaperi", "Dendê", "Damas", "Vila Peri", "Itaoca", "Serrinha", "Benfica", "Couto Fernandes", "Parangaba", "Fátima", "Vila União", "Jardim América"],
                organUnitys: [
                    { district: "Abel Pinto", address: "Travessa Goiás, s/n", mapLink: "https://maps.google.com/?q=Travessa+Goiás,+s/n,+Demócrito+Rocha,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Dom Aloísio Lorscheider", address: "Rua Betel, 1895", mapLink: "https://maps.google.com/?q=Rua+Betel,+1895,+Itaperi,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Fco. Monteiro", address: "Av. Dos Eucaliptos, s/n", mapLink: "https://maps.google.com/?q=Av.+Dos+Eucaliptos,+s/n,+Dendê,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Gothardo Peixoto F. Lima (em reforma total)", address: "Rua Irmã Bazet, 153", mapLink: "https://maps.google.com/?q=Rua+Irmã+Bazet,+153,+Damas,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Gutemberg Braun", address: "Rua Monsenhor Agostinho, 505", mapLink: "https://maps.google.com/?q=Rua+Monsenhor+Agostinho,+505,+Vila+Peri,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Jose Valdevino Carvalho", address: "Rua Guará, S/N", mapLink: "https://maps.google.com/?q=Rua+Guará,+S/N,+Itaoca,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Luis Albuquerque Mendes", address: "Rua Benjamin Franklin, 735", mapLink: "https://maps.google.com/?q=Rua+Benjamin+Franklin,+735,+Serrinha,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Luis Costa", address: "Rua Marechal Deodoro, 1501", mapLink: "https://maps.google.com/?q=Rua+Marechal+Deodoro,+1501,+Benfica,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Ocelo Pinheiro", address: "Rua Elcias Lopes, 517", mapLink: "https://maps.google.com/?q=Rua+Elcias+Lopes,+517,+Itaoca,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Oliveira Pombo", address: "Rua Rio Grande do Sul, s/n", mapLink: "https://maps.google.com/?q=Rua+Rio+Grande+do+Sul,+s/n,+Couto+Fernandes,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Antônio Ciríaco de Holanda", address: "Rua Gomes Brasil, 555", mapLink: "https://maps.google.com/?q=Rua+Gomes+Brasil,+555,+Parangaba,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Roberto Bruno", address: "Av. Borges de Melo, 910", mapLink: "https://maps.google.com/?q=Av.+Borges+de+Melo,+910,+Fátima,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Turbay Barreira", address: "Rua Gonçalo Souto, 420", mapLink: "https://maps.google.com/?q=Rua+Gonçalo+Souto,+420,+Vila+União,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Dom José Bezerra Coutinho", address: "Rua Primeiro de Janeiro, s/n", mapLink: "https://maps.google.com/?q=Rua+Primeiro+de+Janeiro,+s/n,+Parangaba,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Dr. Raimundo Pontes Filho", address: "Rua Damasceno Girão, S/n", mapLink: "https://maps.google.com/?q=Rua+Damasceno+Girão,+S/n,+Jardim+América,+Fortaleza+-+CE", coordNumber: "Não informado", organNumber: "Não informado" }
                ]
            },
            {
                id: 5,
                districts: ["Bom Jardim", "Granja Lisboa", "Granja Portugal", "Conjunto Esperança", "Jardim Jatobá", "Aracapé", "Genibaú", "Mondubim", "José Walter"],
                organUnitys: [
                    { district: "UBS Abner Cavalcante Brasil", address: "Rua Joana Batista, 471", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Joana Batista, 471, Bom Jardim, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS Argeu Herbster", address: "Rua Geraldo Barbosa, 1095", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Geraldo Barbosa, 1095, Bom Jardim, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS Dom Lustosa", address: "Rua A, s/n", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua A, s/n, Granja Lisboa, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS Fco. Edmilson Pinheiro", address: "Av. H, 2191", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. H, 2191, Granja Lisboa, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS Fernando Diógenes", address: "Rua Teodoro de Castro, s/n", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Teodoro de Castro, s/n, Granja Portugal, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS Graciliano Muniz", address: "Rua 106, 345", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua 106, 345, Conjunto Esperança, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS Guarany Mont'alverne", address: "Rua Geraldo Barbosa, 3230", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Geraldo Barbosa, 3230, Granja Lisboa, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS Dr. João Barbosa Pires de Paula Pessoa", address: "Rua Rubi, s/n", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Rubi, s/n, Jardim Jatobá, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS João Elísio Holanda", address: "Rua Juvêncio Sales, s/n", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Juvêncio Sales, s/n, Aracapé, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS José Galba de Araújo", address: "Av. Sen. Fernandes Távora, 3161", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. Sen. Fernandes Távora, 3161, Genibaú, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS José Paracampos", address: "Rua Alfredo Mamede, 250", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Alfredo Mamede, 250, Mondubim, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS José Walter", address: "Av. José de Araújo Lima, 1631 - 3ª etapa", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Av. José de Araújo Lima, 1631 - 3ª etapa, José Walter, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "UBS Jurandir Picanço", address: "Rua Duas Nações, s/n", mapLink: `https://www.google.com/maps?q=${encodeURIComponent("Rua Duas Nações, s/n, Granja Portugal, Fortaleza - CE")}`, coordNumber: "Não informado", organNumber: "Não informado" },
                    { district: "Luciano Torres de Melo", address: "Rua Delta, 365 Manoel Sátiro", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Delta%2C%20365%20Manoel%20S%C3%A1tiro" },
                    { district: "Luiza Távora", address: "Travessa São José, 940 Mondubim", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Travessa%20S%C3%A3o%20Jos%C3%A9%2C%20940%20Mondubim" },
                    { district: "Maciel de Brito", address: "R. 602, 2 - Conj. Ceará, Fortaleza - CE, 60531-510", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://maps.app.goo.gl/ViefxS4iDTQQtCWo9" },
                    { district: "Parque São José", address: "Rua Des. Frota, s/n Pq São José", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Des.%20Frota%2C%20s%2Fn%20Pq%20S%C3%A3o%20Jos%C3%A9" },
                    { district: "Pedro Celestino", address: "Rua Gastão Justo, 215 Maraponga", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Gast%C3%A3o%20Justo%2C%20215%20Maraponga" },
                    { district: "Dr. Pontes Neto (em reforma total)", address: "Rua 541, n 150 - 2 a etapa Conj. Ceará", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20541%2C%20n%20150%20-%202%20a%20etapa%20Conj.%20Cear%C3%A1" },
                    { district: "Regina Maria da Silva Severino", address: "Rua Itatiaia, 889 Canindezinho", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Itatiaia%2C%20889%20Canindezinho" },
                    { district: "Régis Jucá", address: "Av I, 618 Mondubim", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Av%20I%2C%20618%20Mondubim" },
                    { district: "Ronaldo Albuquerque", address: "Av I, s/n Conj. Ceará/Genibaú", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://maps.app.goo.gl/iGFFWSwo55f4Kr2AA" },
                    { district: "José Dilson Vasconcelos Menezes | Siqueira", address: "Rua. Eng. Luís Montenegro, 485 Siqueira", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua.%20Eng.%20Lu%C3%ADs%20Montenegro%2C%20485%20Siqueira" },
                    { district: "Viviane Benevides", address: "Rua João Areas, 1296 Manuel Sátiro", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Jo%C3%A3o%20Areas%2C%201296%20Manuel%20S%C3%A1tiro" },
                    { district: "Doutor Henrique Mota Neto", address: "R. Serena, S/N Siqueira", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=R.%20Serena%2C%20S%2FN%20Siqueira" },
                    { district: "Zélia Correia", address: "Rua Antônio Pereira, 1495 Pl. Ayrton Senna", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Ant%C3%B4nio%20Pereira%2C%201495%20Pl.%20Ayrton%20Senna" },
                    { district: "João Machado dos Santos", address: "Travessa João Henrique, 82 Pl. Ayrton Senna", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Travessa%20Jo%C3%A3o%20Henrique%2C%2082%20Pl.%20Ayrton%20Senna" },
                    { district: "Fernando Uchôa Costa", address: "Av. Pau Brasil, s/n José Walter", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Av.%20Pau%20Brasil%2C%20s%2Fn%20Jos%C3%A9%20Walter" },
                    { district: "Pedro Uchoa", address: "R. das Cerejeiras, s/n Presidente Vargas", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=R.%20das%20Cerejeiras%2C%20s%2Fn%20Presidente%20Vargas" },
                    { district: "Francisco Tailson Pinheiro", address: "R. Samaria, s/n Bom Jardim", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=R.%20Samaria%2C%20s%2Fn%20Bom%20Jardim" },
                    { district: "Agueda Xerez Cunha", address: "Rua D, em frente ao número 23 José Walter", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://maps.app.goo.gl/1mfpdigUR4Lm1Lzd7" },
                    { district: "Rita Maria Lemos Coelho", address: "Rua Geci Freitas Monteiro, em frente ao número 67 Parque Santa Rosa", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://maps.app.goo.gl/3LdTbq8b5BG8vHuy9" }
                ]
            },
            {
                id: 6,
                districts: ["Passaré", "Pq. Itamaraty", "Alto da Balança", "Pq Dois Irmãos", "Dias Macêdo", "Conj. Palmeiras", "Pedras", "Pq. Santa Maria", "L.Redonda", "Sapiranga", "Coaçu", "Jd das Oliveiras", "Santa Fé", "Santa Filomena", "Edson Queiroz", "Jangurussu", "Messejana", "Sapiranga Coité", "Jangurussu (Maria Tomásia)", "Paupina", "Barroso", "Parque II Irmãos", "Curió", "Cajazeiras"],
                organUnitys: [
                    { district: "Alarico Leite", address: "Av. dos Paroaras 301 Passaré", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Av.%20dos%20Paroaras%20301%20Passar%C3%A9" },
                    { district: "Anísio Teixeira", address: "R. Guarany, 355 Pq. Itamaraty", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=R.%20Guarany%2C%20355%20Pq.%20Itamaraty" },
                    { district: "César Cals de Oliveira", address: "R. Capitão Aragão, 555 Alto da Balança", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=R.%20Capit%C3%A3o%20Arag%C3%A3o%2C%20555%20Alto%20da%20Balan%C3%A7a" },
                    { district: "Edilmar Norões (em reforma parcial)", address: "Rua H, 351 Pq Dois Irmãos", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20H%2C%20351%20Pq%20Dois%20Irm%C3%A3os" },
                    { district: "Edmar Fujita", address: "Av. Alberto Craveiro, 4211 Dias Macêdo", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Av.%20Alberto%20Craveiro%2C%204211%20Dias%20Mac%C3%AAdo" },
                    { district: "Evandro Ayres de Moura", address: "Av. Castelo de Castro, 2842 Conj. Palmeiras", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Av.%20Castelo%20de%20Castro%2C%202842%20Conj.%20Palmeiras" },
                    { district: "Dr. Acrísio Eufrasino de Pinho", address: "Rua Coletora Central, s/n Pedras", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://maps.app.goo.gl/zAJaZTef6xogYH6X8" },
                    { district: "Fausto Freire", address: "Av. Isabel Bezerra, 416 Pq. Santa Maria", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Av.%20Isabel%20Bezerra%2C%20416%20Pq.%20Santa%20Maria" },
                    { district: "Galba de Araújo (em reforma total)", address: "Av. Recreio, 1390 L. Redonda", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://maps.app.goo.gl/Nrn4LQP9gZKJNH3z6" },
                    { district: "Hélio Góes Ferreira", address: "R. Crisanto Moreira da Rocha, 453 Sapiranga", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=R.%20Crisanto%20Moreira%20da%20Rocha%2C%20453%20Sapiranga" },
                    { district: "Jangurussu", address: "Rua Estrada do Itaperi, 146 Passaré", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Estrada%20do%20Itaperi%2C%20146%20Passar%C3%A9" },
                    { district: "Janival de Almeida (em reforma parcial)", address: "R. Coelho Garcia, 25 Passaré", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=R.%20Coelho%20Garcia%2C%2025%20Passar%C3%A9" },
                    { district: "João Hipólito", address: "Rua 03, nº 88 Dias Macêdo", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%2003%2C%20n%C2%BA%2088%20Dias%20Mac%C3%AAdo" },
                    { district: "José Barros de Alencar", address: "R. José Nogueira, 180 Pedras", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=R.%20Jos%C3%A9%20Nogueira%2C%20180%20Pedras" },
                    { district: "Luís Franklin (em reforma parcial)", address: "Rua Alexandre Vieira, s/n Coaçu", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Alexandre%20Vieira%2C%20s%2Fn%20Coa%C3%A7u" },
                    { district: "Manoel Carlos Gouveia", address: "Av. Des. Faustino Alb., 486 Jd das Oliveiras", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Av.%20Des.%20Faustino%20Alb.%2C%20486%20Jd%20das%20Oliveiras" },
                    { district: "Maria de Lourdes", address: "Rua Reino Unido, 115 Jd. das Oliveiras", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Reino%20Unido%2C%20115%20Jd.%20das%20Oliveiras" },
                    { district: "Maria Grasiela", address: "Rua Edésio Monteiro, 1450 Santa Fé", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Ed%C3%A9sio%20Monteiro%2C%201450%20Santa%20F%C3%A9" },
                    { district: "Marcus Aurélio Rabelo", address: "Rua Iracema, 1100 Santa Filomena", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Iracema%2C%201100%20Santa%20Filomena" },
                    { district: "Mattos Dourado (em reforma parcial)", address: "Av. Des. Floriano Benevides, 391 Edson Queiroz", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Av.%20Des.%20Floriano%20Benevides%2C%20391%20Edson%20Queiroz" },
                    { district: "Melo Jaborandi", address: "Rua 315, 80 Jangurussu", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20315%2C%2080%20Jangurussu" },
                    { district: "Lúcia de Sousa Belem", address: "Rua Guilherme Alencar, s/n Messejana", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Guilherme%20Alencar%2C%20s%2Fn%20Messejana" },
                    { district: "Monteiro de Moraes", address: "Av. Evilásio Alm Miranda, s/n Sapiranga Coité", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://maps.app.goo.gl/Wnx31DYFWwwhwxCC8" },
                    { district: "Osmar Viana", address: "Av. Chiquinha Gonzaga, s/n Jangurussu (Maria Tomásia)", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Av.%20Chiquinha%20Gonzaga%2C%20s%2Fn%20Jangurussu%20(Maria%20Tom%C3%A1sia)" },
                    { district: "Otoni Cardoso do Vale", address: "Rua José Teixeira Costa, 643 Paupina", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Jos%C3%A9%20Teixeira%20Costa%2C%20643%20Paupina" },
                    { district: "Pedro Sampaio", address: "Rua Iracema, 1516 Conj. Palmeiras", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Iracema%2C%201516%20Conj.%20Palmeiras" },
                    { district: "Pompeu Vasconcelos (em reforma parcial)", address: "Rua 05, s/n, Conj. J Paulo II Barroso", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://maps.app.goo.gl/8hHkcPqTtqDK3fMaA" },
                    { district: "Sítio São João", address: "Rua Verde Cinco, 71 Jangurussu", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Verde%20Cinco%2C%2071%20Jangurussu" },
                    { district: "Terezinha Parente", address: "Rua Nélson Coelho, 209 L. Redonda", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20N%C3%A9lson%20Coelho%2C%20209%20L.%20Redonda" },
                    { district: "Vicentina Campos", address: "R. B, nº 145 Parque II Irmãos", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=R.%20B%2C%20n%C2%BA%20145%20Parque%20II%20Irm%C3%A3os" },
                    { district: "Waldo Pessoa", address: "Rua Cap. Hugo Bezerra, 75 Barroso", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Cap.%20Hugo%20Bezerra%2C%2075%20Barroso" },
                    { district: "Doutor Sergio Gomes de Matos", address: "Rua Rouxinol, s/n Edson Queiroz", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Rouxinol%2C%20s%2Fn%20Edson%20Queiroz" },
                    { district: "Josafá Gomes da Silva", address: "Rua 24 de Novembro, 556 Messejana", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%2024%20de%20Novembro%2C%20556%20Messejana" },
                    { district: "Márcia Maria Mesquita Veloso", address: "Rua Odilon Guimarães, 1773 Curió", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Rua%20Odilon%20Guimar%C3%A3es%2C%201773%20Curi%C3%B3" },
                    { district: "Padre Alberto Trombini", address: "Av. Deputado Paulino Rocha, s/n Cajazeiras", coordNumber: "Não informado", organNumber: "Não informado", mapLink: "https://www.google.com/maps?q=Av.%20Deputado%20Paulino%20Rocha%2C%20s%2Fn%20Cajazeiras" }
                ]
            }
        ],
        image: Ubs
    },
    {
        id: 5,
        name: "Clínicas Escola",
        description: "Vinculadas a faculdades, oferecem atendimentos gratuitos ou de baixo custo em áreas como psicologia, fisioterapia, nutrição e outras, com supervisão de professores e profissionais.",
        fullname: "",
        regionals: [
            {
                id: 1,
                districts: [],
                organUnitys: [
                    {
                        district: "Ari de Sá (UniAri)",
                        address: "Rua João Cordeiro, 1904 - Centro, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 99213-0812",
                        mapLink: "https://www.google.com/maps/search/Rua+João+Cordeiro,+1904+-+Centro,+Fortaleza"
                    },
                    {
                        district: "Ateneu (UniAteneu) - Unidade Harmony",
                        address: "Av. Humberto Monte, 2929 - Rodolfo Teófilo, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3108-4661",
                        mapLink: "https://www.google.com/maps/search/Av.+Humberto+Monte,+2929+-+Rodolfo+Teófilo,+Fortaleza"
                    },
                    {
                        district: "Ateneu (UniAteneu) - Unidade Messejana",
                        address: "Rua Antônio Gadelha, 621 - Messejana, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3022-3443",
                        mapLink: "https://www.google.com/maps/search/Rua+Antônio+Gadelha,+621+-+Messejana,+Fortaleza"
                    },
                    {
                        district: "Estácio - Unidade Via Corpvs",
                        address: "Rua Eliseu Uchôa Beco, 600 - Patriolino Ribeiro, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3270-6798",
                        mapLink: "https://www.google.com/maps/search/Rua+Eliseu+Uchôa+Beco,+600+-+Patriolino+Ribeiro,+Fortaleza"
                    },
                    {
                        district: "Estácio - Unidade Parangaba",
                        address: "Av. Senador Fernandes Távora, 137A - Jóquei Clube, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3270-6798",
                        mapLink: "https://www.google.com/maps/search/Av.+Senador+Fernandes+Távora,+137A+-+Jóquei+Clube,+Fortaleza"
                    },
                    {
                        district: "Farias Brito (Fbuni)",
                        address: "Rua Castro Monte, 1364 - Varjota, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 99401-6738",
                        mapLink: "https://www.google.com/maps/search/Rua+Castro+Monte,+1364+-+Varjota,+Fortaleza"
                    },
                    {
                        district: "Unifametro",
                        address: "R. Liberato Barroso, 1503 - Centro, Fortaleza - CE",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3206-6433",
                        mapLink: "https://www.google.com/maps/search/Rua+Liberato+Barroso,+1503+-+Centro,+Fortaleza"
                    },
                    {
                        district: "Universidade Federal do Ceará (UFC)",
                        address: "Rua Waldery Uchoa, 3-A - Benfica, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3366-7690 / (85) 3366-7689",
                        mapLink: "https://www.google.com/maps/search/Rua+Waldery+Uchoa,+3-A+-+Benfica,+Fortaleza"
                    },
                    {
                        district: "Unichristus",
                        address: "Av. Desembargador Moreira, 2120 - 1º andar, Dionísio Torres, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 99401-5648 / (85) 3468-2500",
                        mapLink: "https://www.google.com/maps/search/Av.+Desembargador+Moreira,+2120+-+Dionísio+Torres,+Fortaleza"
                    },
                    {
                        district: "Uninassau",
                        address: "Av. Aguanambi, 251 - José Bonifácio, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 3201-2448",
                        mapLink: "https://www.google.com/maps/search/Av.+Aguanambi,+251+-+José+Bonifácio,+Fortaleza"
                    },
                    {
                        district: "Unifor",
                        address: "Rua Maramaldo Campelo, 50 - Edson Queiroz, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 99200-7069 / nami@unifor.br",
                        mapLink: "https://www.google.com/maps/search/Rua+Maramaldo+Campelo,+50+-+Edson+Queiroz,+Fortaleza"
                    }
                ]
            }
        ],
        image: Escola
    },
    {
        id: 6,
        name: "Centros LGBTIQA+",
        description: "Oferecem acolhimento, escuta, orientação jurídica, psicológica e social para pessoas LGBTQIA+, além de promoverem ações de combate à discriminação e inclusão.",
        fullname: "",
        regionals: [
            {
                id: 1,
                districts: [],
                organUnitys: [
                    {
                        district: "Outra Casa Coletiva",
                        address: "R. Instituto do Ceará, 164 - Benfica, Fortaleza - CE, 60015-300",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/R.+Instituto+do+Ceará,+164+-+Benfica,+Fortaleza"
                    },
                    {
                        district: "Centro de Referência LGBT Janaína Dutra",
                        address: "R. Jaime Benévolo, 21 - Centro, Fortaleza - CE, 60050-080",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/R.+Jaime+Benévolo,+21+-+Centro,+Fortaleza"
                    },
                    {
                        district: "Centro Estadual de Referência LGBT+ Thina Rodrigues",
                        address: "R. Valdetário Mota, 970 - Papicu, Fortaleza - CE, 60175-742",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/R.+Valdetário+Mota,+970+-+Papicu,+Fortaleza"
                    },
                    {
                        district: "TRANSformar",
                        address: "R. José Maurício, 527 - Siqueira, Fortaleza - CE, 60736-140",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/R.+José+Maurício,+527+-+Siqueira,+Fortaleza"
                    }
                ]
            }
        ],
        image: Lgbt
    },
    {
        id: 7,
        name: "Centros POP",
        description: "Atendem pessoas em situação de rua, oferecendo alimentação, higiene, guarda de pertences, encaminhamentos e apoio para reinserção social.",
        fullname: "",
        regionals: [
            {
                id: 1,
                districts: [],
                organUnitys: [
                    {
                        district: "Centro de Referência Especializado para População em Situação de Rua (Centro POP)",
                        address: "Rua Jaime Benévolo, 1059 - Centro, Fortaleza - CE, 60050-081",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Rua+Jaime+Benévolo,+1059+-+Centro,+Fortaleza"
                    },
                    {
                        district: "Centro de Referência Especializado para População em Situação de Rua (Centro POP)",
                        address: "Avenida João Pessoa, 4180 - Damas, Fortaleza - CE, 60425-813",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Avenida+João+Pessoa,+4180+-+Damas,+Fortaleza"
                    },
                    {
                        district: "Refeitório São Vicente de Paulo - Distribuição de almoço às 11h e sopa às 16h",
                        address: "Rua: Padre Mororó, nº 686 - Moura Brasil",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Rua+Padre+Mororó,+686+-+Moura+Brasil,+Fortaleza"
                    },
                    {
                        district: "Recanto do Sagrado Coração -  Distribuição de almoço às 11h e sopa às 16h",
                        address: "Avenida da Universidade, 3106",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Avenida+da+Universidade,+3106+-+Benfica,+Fortaleza"
                    },
                    {
                        district: "Espaço de Higiene Cidadã",
                        address: "Av Dom Manoel, 1250 - Centro",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Av+dom+Manoel,+1250+-+Centro,+Fortaleza"
                    },
                    {
                        district: "Espaço de Higiene Cidadã",
                        address: "Praça da Bandeira - Centro",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Praça+da+Bandeira,+-+Centro,+Fortaleza"
                    },
                    {
                        district: "Espaço de Higiene Cidadã",
                        address: "Rua Pedro II,100 - Parangaba",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Rua+Pedro+II,+100+-+Parangaba,+Fortaleza"
                    },
                    {
                        district: "Pousada Social",
                        address: "Av. do Imperador, 769 - Centro (140 vagas)",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Av+do+Imperador,+769+-+Centro,+Fortaleza"
                    },
                    {
                        district: "Pousada social",
                        address: "Av. Dom Manoel, 1250 - Centro (100 vagas)",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        mapLink: "https://www.google.com/maps/search/Av+Dom+Manoel,+1250+-+Centro,+Fortaleza"
                    },
                ]
            }
        ],
        image: Pop
    },
    {
        id: 8,
        name: "ONG'S",
        description: "Instituições sem fins lucrativos que atuam em diversas causas sociais e prestam serviços à comunidade, como realização de doações, proteção animal, educação, entre outros auxílios.",
        fullname: "Organizações Não Governamentais",
        regionals: [
            {
                id: 1,
                districts: [],
                organUnitys: [
                    {
                        district: "Fundação Projeto Diferente",
                        address: "Rua José Vilar, 938 - Aldeota, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        info: "Público beneficiado: crianças, jovens e suas famílias. Desenvolve projetos de desenvolvimento, promoção de saúde e bem estar para crianças do Transtorno do Espectro Autista e suas famílias",
                        mapLink: "https://www.google.com/maps/search/Rua+José+Vilar,+938+-+Aldeota,+Fortaleza"
                    },
                    {
                        district: "AMOR – Associação Mães do Orgulho e Resistência Ceará",
                        address: "R. Olívio Câmara, 74 - José Bonifacio, Fortaleza - CE, 60040-130",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        info: "Público beneficiado: Familiares de pessoas LGBTQIAPN+. Acolhimento de familiares que precisam de apoio devido a violências sofridas por seus filhos, letramento nas questões LGBTQIAPN+ em escolas, instituições e empresas, luta por políticas públicas para este público.",
                        mapLink: "https://www.google.com/maps/search/Rua+Olívio+Câmara,+74,+Fortaleza"
                    },
                    {
                        district: "Instituto SOS Periferia",
                        address: "Av. Gen. Osório de Paiva, 5035 - Canindezinho, Fortaleza (CE)",
                        coordNumber: "Não informado",
                        organNumber: "(85) 98586-5167",
                        info: "O Instituto S.O.S Periferia, fundado em 2007, atua na promoção da segurança alimentar e nutricional de comunidades periféricas da Grande Fortaleza. Além de fornecer alimentação direta, a organização oferece formações profissionais e ações de promoção de direitos humanos para todas as faixas etárias.",
                        mapLink: "https://www.google.com/maps/search/Av.+Gen.+Osório+de+Paiva,+5035+-+Canindezinho,+Fortaleza"
                    },
                    {
                        district: "Lar Beneficente Cisco de Luz",
                        address: "R. Tobias Correia, 1404 - Centro, Caucaia - CE, 61600-060",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        info: "Público beneficiado: Crianças, jovens, adultos, idosos, pessoas com deficiência, moradores de rua e LGBT. Oferece acolhimento e assessoramento, coral, teatro, palestras, encontro de casais, distribuição de alimentos",
                        mapLink: "https://www.google.com/maps/search/Rua+Tobias+Correia,+1404+-+Centro,+Caucaia"
                    },
                    {
                        district: "Instituto Maria do Carmo",
                        address: "R. Cel. Fabriciano, 1820 - A - Granja Portugal",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        info: "Público beneficiado: Crianças e adolescentes, idosos e famílias. Oferece serviços de convivência e fortalecimento de vínculos familiares e comunitários. Participa dos Programas da REURB- regularização fundiária, Ceará Sem Fome e cursos profissionalizantes.",
                        mapLink: "https://maps.app.goo.gl/GvESdn5EpSJ9uFvg9"
                    },
                    {
                        district: "Instituto Vida Videira - IVV",
                        address: "Rua São João Del Rei, 1764 - Sapiranga, Fortaleza",
                        coordNumber: "Não informado",
                        organNumber: "Não informado",
                        info: "Público beneficiado: Crianças, adolescentes e adultos. Atendimentos na Área da Saúde (Dentista, Médicos, Psicólogos, Nutricionista e Fisioterapia), Esporte, Cursos Profissionalizantes e Educacional (creche e contraturno da escola para crianças e adolescentes) ",
                        mapLink: "https://maps.app.goo.gl/ixxo2DWhyprjr5GH9"
                    }
                ]
            }
        ],
        image: Ong
    },
]

export default organs