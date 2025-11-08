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
        description: "Oferece atendimento gratuito a pessoas com sofrimento mental ou uso abusivo de álcool e outras drogas, com apoio psicológico, psiquiátrico e social.",
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
            }

        ],

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