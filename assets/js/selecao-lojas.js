
//Seleção de Lojas

function atualizarCidades() {
    const estado = document.getElementById('estado').value;
    const cidadeSelecionada = document.getElementById('cidade');

    cidadeSelecionada.innerHTML = '<option value="">Selecione a Cidade</option>';

    const cidadesPorEstado = {
        AM: ['Manacapuru','Manaus'],
        BA: ['Feira de Santana','Juazeiro','Salvador'],
        CE: ['Fortaleza','Sobral'],
        ES: ['Serra','Vila Velha','Vitória'],
        GO: ['Anápolis','Caldas Novas','Catalão','Goiânia'],
        MA: ['Caxias','Imperatriz','São Luís'],
        MG: ['Araguari','Araxá','Belo Horizonte','Contagem','Patos de Minas','Uberaba','Uberlândia'],
        PA: ['Belém','Bragança','Castanhal','Marituba'],
        PR: ['Cascavel','Curitiba','Pinhais','Toledo'],
        RJ: ['Cabo Frio','Duque de Caxias','Macaé','Niterói','Rio de Janeiro'],
        RN: ['Ceará-Mirim','Natal','Mossoró','Parnamirim'],
        RS: ['Caxias do Sul','Lajeado','Novo Hamburgo','Pelotas','Porto Alegre'],
        SC: ['Chapecó','Florianópolis','Itajaí','Joinville','Lages'],
        SP: ['Atibaia','Barretos','Bauru','Campinas','Franca','Guarulhos','Marília','Mogi das Cruzes','Santo André','Santos','São Bernardo do Campo','São Paulo','Sorocaba','Osasco','Ribeirão Preto','Ubatuba']
    };

    if(estado && cidadesPorEstado[estado]) {
        cidadesPorEstado[estado].forEach(function(cidade) {
            const opcao = document.createElement('option');
            opcao.value = cidade;
            opcao.textContent = cidade;
            cidadeSelecionada.appendChild(opcao);
        });
    }
}

const lojas = {
    "Manacapuru": [
        {
            nome: "Meteora Manacapuru",
            endereco: "Rua João XXIII, 1200 - Centro",
            cep:"69400-000",
            horario: "Seg a Sab de 09:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Manaus": [
        {
            nome: "Meteora Manaus",
            endereco: "Av. Des. João Machado, 100 - Flores",
            cep:"69058-800",
            horario: "Seg a Sab de 09:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: true,
        }
    ],
    "Feira de Santana": [
        {
            nome: "Meteora Feira de Santana",
            endereco: "R. Prof. Leonidio Rocha, 950 - Centro",
            cep:" 40301-110",
            horario: "Seg a Sab de 08:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Juazeiro": [
        {
            nome: "Meteora Juazeiro",
            endereco: "R. Raul de Queirós, 300 - Centro",
            cep:"48903-263",
            horario: "Seg a Sab de 08:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Salvador": [
        {
            nome: "Meteora Salvador",
            endereco: "R. Prof. Lemos Brito, 132 - Barra",
            cep:"40140-090",
            horario: "Seg a Sab de 08:00 ás 17:30",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Salvador",
            endereco: "Av. Tancredo Neves, 148 - Caminho das Árvores (Andar: 2, Loja 24 - Shopping da Bahia)",
            cep:"41820-000",
            horario: "Seg a Sab de 10:00 ás 20:30",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Salvador",
            endereco: "Estr. do Coqueiro Grande, 1361 - Cajazeiras (Loja 07 - Shopping Cajazeiras)",
            cep:"41340-050",
            horario: "Seg a Sab de 09:00 ás 19:30",
            status: "Aberta",
            abertaFeriado: false, 
        }
    ],
    "Fortaleza": [
        {
            nome: "Meteora Fortaleza",
            endereco: "Av. Dom Luís, 640 - Meireles",
            cep:"60160-230",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Fortaleza",
            endereco: "Av. Leste Oeste, 3441 - Barra do Ceará",
            cep:"60331-495",
            horario: "Seg a Sab de 08:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Fortaleza",
            endereco: "Av. Bezerra de Menezes, 2450 - Pres. Kennedy (Loja 32 - North Shopping)",
            cep:"60325-001",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Sobral": [
        {
            nome: "Meteora Sobral",
            endereco: "R. Maestro José Pedro, 200 - Centro",
            cep:"62010-260",
            horario: "Seg a Sab de 08:00 ás 17:30",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Serra": [
        {
            nome: "Meteora Serra",
            endereco: "Av. Jones dos Santos Neves, 556 - Caçaroca",
            cep:"29176-060",
            horario: "Seg a Sab de 08:30 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Vila Velha": [
        {
            nome: "Meteora Vila Velha",
            endereco: "Av. Jair de Andrade, 2018 - Itapuã",
            cep:"29101-702",
            horario: "Seg a Sab de 08:30 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Vitória": [
        {
            nome: "Meteora Vitória",
            endereco: "R. Nicolau Von Schilgen, 220 - Jardim da Penha",
            cep:"29060-025",
            horario: "Seg a Sab de 08:30 ás 17:30",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Vitória",
            endereco: "Av. Américo Buaiz, 200 - Enseada do Suá (Loja 120 - Shopping Vitória)",
            cep:"29050-902",
            horario: "Seg a Sab de 10:00 ás 20:30",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Vitória",
            endereco: "R. Jaír Andrade, 850 - Vila Rubim",
            cep:"29025-190",
            horario: "Seg a Sab de 08:30 ás 17:30",
            status: "Aberta",
            abertaFeriado: false, 
        },
    ],
    "Anápolis": [
        {
            nome: "Meteora Anápolis",
            endereco: "Av. Sen. Ramos Caiado, 750 - Maracanã",
            cep:"75040-320",
            horario: "Seg a Sab de 08:00 ás 17:30",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Caldas Novas": [
        {
            nome: "Meteora Caldas Novas",
            endereco: "Av. Cel. Bento de Godoy, 650 - Centro",
            cep:"75690-000",
            horario: "Seg a Sab de 08:00 ás 17:30",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Catalão": [
        {
            nome: "Meteora Catalão",
            endereco: "R. Egerineu Teixeira, 130 - S Central",
            cep:"75701-240",
            horario: "Seg a Sab de 08:00 ás 17:30",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Goiânia": [
        {
            nome: "Meteora Goiânia",
            endereco: "R. Flemington, 1720 - Vila Bela",
            cep:"74310-290",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Goiânia",
            endereco: "Av. Dep. Jamel Cecílio, 3300 - Jardim Goiás (Loja 92 - Flamboyant Shopping)",
            cep:"74810-907",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Goiânia",
            endereco: "Av. Perimetral Norte, 8303 - Fazenda Caveiras (Andar: 1, Loja 61 - Passeio das Águas Shopping)",
            cep:"74573-260",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        },
    ],
    "Caxias": [
        {
            nome: "Meteora Caxias",
            endereco: "Tv. São Benedito, 700 - Centro",
            cep:"65602-220",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Imperatriz": [
        {
            nome: "Meteora Imperatriz",
            endereco: "R. João Lisboa, 170 - Centro",
            cep:"65900-630",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "São Luís": [
        {
            nome: "Meteora São Luís",
            endereco: "R. da Palma, 661 - Centro histórico",
            cep:"65010-440",
            horario: "Seg a Sab de 07:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora São Luís",
            endereco: "Av. Guajajaras, 30 - Jardim São Cristovão(Sala 30 - Marajó Shopping)",
            cep:"65055-285",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: true,
        },
    ],
    "Araguari": [
        {
            nome: "Meteora Araguari",
            endereco: "R. Rodolfo Paixão, 282 - Centro",
            cep:"38440-122",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Araxá": [
        {
            nome: "Meteora Araxá",
            endereco: "R. Francisco dos Santos, 51 - Centro",
            cep:"38183-238",
            horario: "Seg a Sab de 08:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Belo Horizonte": [
        {
            nome: "Meteora Belo Horizonte",
            endereco: "R. São Paulo, 1804 - Lourdes",
            cep:"30170-135",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Belo Horizonte",
            endereco: "BR-356, 3049 - Belvedere (Andar: Mariana - BH Shopping)",
            cep:"30320-900",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Belo Horizonte",
            endereco: "Av. Professor Magalhães Penido, 750 - Sala 860 - Aeroporto",
            cep:"31270-222",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Belo Horizonte",
            endereco: "R. Padre Pedro Pinto, 5930 - Maria Helena",
            cep:"31660-000",
            horario: "Seg a Sab de 09:00 ás 18:30",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Contagem": [
        {
            nome: "Meteora Contagem",
            endereco: "Av. João César de Oliveira, 2906 - Bairro da Glória",
            cep:"32310-000",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Patos de Minas": [
        {
            nome: "Meteora Patos de Minas",
            endereco: "R. Rio Grande do Norte, 500 - Cristo Redentor",
            cep:"38700-216",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Uberaba": [
        {
            nome: "Meteora Uberaba",
            endereco: "Av. Santa Beatriz da Silva, 1501 - São Benedito (Loja 19 - Shopping Uberaba)",
            cep:"38020-433",
            horario: "Seg a Sab de 10:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Uberlândia": [
        {
            nome: "Meteora Uberlândia",
            endereco: "Av. João Naves de Ávila, 1331 - Santa Mônica (Loja 57 - Center Shopping Uberlândia)",
            cep:"38408-902",
            horario: "Seg a Sab de 10:00 ás 20:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Uberlândia",
            endereco: "Av. José Fonseca e Sílva, 1582 - Jardim Patricia",
            cep:"38414-097",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false, 
        },
    ],
    "Belém": [
        {
            nome: "Meteora Belém",
            endereco: "Av. Sen. Lemos, 1509 - Telégrafo",
            cep:"66113-010",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Belém",
            endereco: "Rod. Augusto Montenegro, 4300 - Parque Verde (Andar: 1, Loja 71 - Parque Shopping Belém)",
            cep:"66635-110",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Bragança": [
        {
            nome: "Meteora Bragança",
            endereco: "Av. Nazeazeno Ferreira, 1759 - Centro",
            cep:"68600-000",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Castanhal": [
        {
            nome: "Meteora Castanhal",
            endereco: "R. Francisco Pereira Lago, 209 - Jaderlândia",
            cep:"68746-040",
            horario: "Seg a Sab de 08:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Castanhal",
            endereco: "Tv. Quintino Bocaiúva, 2801 - Centro",
            cep:"68743-123",
            horario: "Seg a Sab de 09:00 ás 17:30",
            status: "Aberta",
            abertaFeriado: true,
        }
    ],
    "Marituba": [
        {
            nome: "Meteora Marituba",
            endereco: "Av. Fernando Guilhon, 3331 - Boa Vista",
            cep:"67201-050",
            horario: "Seg a Sab de 08:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Cascavel": [
        {
            nome: "Meteora Cascavel",
            endereco: "R. Jorge Lacerda, 450 - Centro",
            cep:"85810-220",
            horario: "Seg a Sab de 08:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Cascavel",
            endereco: "Av. Tancredo Neves, 3810 - Santo Onofre",
            cep:"85806-470",
            horario: "Seg a Sab de 08:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Curitiba": [
        {
            nome: "Meteora Curitiba",
            endereco: "Av. Nossa Sra. de Lourdes, 63 - Jardim das Américas (Loja 32 - Shopping Jardim das Américas)",
            cep:"81530-020",
            horario: "Seg a Sab de 10:00 ás 20:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Curitiba",
            endereco: "Marginal - Rod. Br-277, 350 - Santo Inácio",
            cep:"82305-100",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Curitiba",
            endereco: "Av. Anita Garibaldi, 7005 - Cachoeira",
            cep:"82220-000",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Pinhais": [
        {
            nome: "Meteora Pinhais",
            endereco: "R. Vinte e Cinco de Agosto, 40 - Centro",
            cep:"83323-010",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Toledo": [
        {
            nome: "Meteora Toledo",
            endereco: "Av. Sen. Attilio Fontana, 6106 - Centro",
            cep:"85901-200",
            horario: "Seg a Sab de 08:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Cabo Frio": [
        {
            nome: "Meteora Cabo Frio",
            endereco: "R. 13 de Novembro, 809 - Centro",
            cep:"28907-080",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Duque de Caxias": [
        {
            nome: "Meteora Duque de Caxias",
            endereco: "Av. Duque de Caxias, 388 - Centro",
            cep:"25070-070",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Duque de Caxias",
            endereco: "R. Teresa Cristina, 2000 - Chácaras Rio-Petrópolis (Loja 1015 - Outlet Premium Rio de Janeiro)",
            cep:"25230-480",
            horario: "Seg a Sab de 09:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Macaé": [
        {
            nome: "Meteora Macaé",
            endereco: "R. Mal. Deodoro, 200 - Centro",
            cep:"27910-310",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Niterói": [
        {
            nome: "Meteora Niterói",
            endereco: "R. Maestro Felício Tolêdo, 560 - Centro",
            cep:"24030-104",
            horario: "Seg a Sab de 09:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Niterói",
            endereco: "Av. Quintino Bocaiúva, 258 - São Francisco",
            cep:"24360-022",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Rio de Janeiro": [
        {
            nome: "Meteora Rio de Janeiro",
            endereco: "Rua Lauro Müller, 116 - Botafogo (Loja 54 - Shopping RioSul)",
            cep:"22290-070",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Rio de Janeiro",
            endereco: "R. Prof. Eurico Rabelo, 97 - Maracanã",
            cep:"20271-170",
            horario: "Seg a Sab de 09:00 ás 20:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Rio de Janeiro",
            endereco: "R. Medina, 171 - Méier",
            cep:"20735-130",
            horario: "Seg a Sab de 09:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: false,
        }, 
        {
            nome: "Meteora Rio de Janeiro",
            endereco: "Av. Pastor Martin Luther King Jr., 126 - Del Castilho (Andar: 2, Loja 3025 - Shopping América)",
            cep:"20765-000",
            horario: "Seg a Sab de 12:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Rio de Janeiro",
            endereco: "Av. das Américas, 4666 - Barra da Tijuca",
            cep:"22640-102",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: true,
        },
    ],
    "Ceará-Mirim": [
        {
            nome: "Meteora Ceará-Mirim",
            endereco: "Av. Enéas Cavalcante, 1500 A - Centro",
            cep:"59570-000",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Natal": [
        {
            nome: "Meteora Natal",
            endereco: "R. Dr. Mario Negócio, 1059 A - Alecrim",
            cep:"59040-000",
            horario: "Seg a Sab de 08:00 ás 17:30",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Natal",
            endereco: "R. Ver. Manoel Coringa de Lemos, 339 - Ponta Negra",
            cep:"59090-190",
            horario: "Seg a Sab de 08:00 ás 17:30",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Natal",
            endereco: "Av. Dão Silveira, 5500 - Candelária",
            cep:"59066-180",
            horario: "Seg a Sab de 09:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Mossoró": [
        {
            nome: "Meteora Mossoró",
            endereco: "R. Alfredo Fernandes, 111 - Centro",
            cep:"59600-180",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Parnamirim": [
        {
            nome: "Meteora Parnamirim",
            endereco: "Av. Piloto Pereira Tim, 2490 - Centro",
            cep:"59140-660",
            horario: "Seg a Sab de 08:00 ás 17:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Caxias do Sul": [
        {
            nome: "Meteora Caxias do Sul",
            endereco: "Rodovia RSC 453, 1969 - Cidade Nova (Shopping Villagio Caxias)",
            cep:"95110-195",
            horario: "Seg a Sab de 10:30 ás 21:00",
            status: "Aberta",
            abertaFeriado: false, 
        }
    ],
    "Lajeado": [
        {
            nome: "Meteora Lajeado",
            endereco: "BR-386, Km 346 - São Cristóvão (Loja 20 - Shopping Lajeado)",
            cep:"95900-000",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Novo Hamburgo": [
        {
            nome: "Meteora Novo Hamburgo",
            endereco: "Av. Nações Unidas, 2001 - Centro (Loja 82 - Bourbon Shopping)",
            cep:"93320-021",
            horario: "Seg a Sab de 11:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Pelotas": [
        {
            nome: "Meteora Pelotas",
            endereco: "R. Andrade Neves, 1600 - Centro",
            cep:"96020-080",
            horario: "Seg a Sab de 09:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Porto Alegre": [
        {
            nome: "Meteora Porto Alegre",
            endereco: "R. Jerônimo Coelho, 29 - Centro Histórico",
            cep:"90010-241",
            horario: "Seg a Sab de 09:00 ás 20:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Porto Alegre",
            endereco: "Av. Ipiranga, 5200 - Jardim Botânico (Loja 309 - Bourbon Shopping Ipiranga)",
            cep:"90610-000",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true, 
        },
    ],
    "Chapecó": [
        {
            nome: "Meteora Chapecó",
            endereco: "R. Antônio Selistre Campos, 90D - Centro",
            cep:"89802-005",
            horario: "Seg a Sab de 08:00 ás 20:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Florianópolis": [
        {
            nome: "Meteora Florianópolis",
            endereco: "R. Bocaiúva, 2619 - Centro",
            cep:"88010-400",
            horario: "Seg a Sab de 09:00 ás 20:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Florianópolis",
            endereco: "Av. Me. Benvenuta, 687 - Santa Monica (Andar: 1, Loja 660A - Villa Romana Shopping)",
            cep:"88035-000",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: true, 
        },
        {
            nome: "Meteora Florianópolis",
            endereco: "Av. Pequeno Príncipe, 2990 - Campeche Leste",
            cep:"88063-000",
            horario: "Seg a Sab de 09:00 ás 20:00",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Itajaí": [
        {
            nome: "Meteora Itajaí",
            endereco: "Rua Samuel Heusi, 234 - Centro (Loja 106 - Itajaí Shopping)",
            cep:"88301-320",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: false, 
        }
    ],
    "Joinville": [
        {
            nome: "Meteora Joinville",
            endereco: "R. São Paulo, 608 - Bucarein",
            cep:"89202-257",
            horario: "Seg a Sab de 08:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Joinville",
            endereco: "Av. Rolf Wiest, 333 - Bom Retiro (Loja 52 - Garten Shopping)",
            cep:"89223-005",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Joinville",
            endereco: "R. Boehmerwald, 1028 - Boehmerwald",
            cep:"89232-486",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Lages": [
        {
            nome: "Meteora Lages",
            endereco: "R. Frei Rogerio, 226 - Centro",
            cep:"88502-160",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Atibaia": [
        {
            nome: "Meteora Atibaia",
            endereco: "Av. Jerônimo de Camargo, 720 - Caetetuba",
            cep:"12951-540",
            horario: "Seg a Sab de 08:00 ás 19:30",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Barretos": [
        {
            nome: "Meteora Barretos",
            endereco: "Via Conselheiro Antônio Prado, 1400 - Pedro Cavalini (Loja 40 - North Shopping Barretos)",
            cep:"14784-200",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        }
    ],
    "Bauru": [
        {
            nome: "Meteora Bauru",
            endereco: "R. Batista de Carvalho, 751 - Centro",
            cep:"17010-001",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Campinas": [
        {
            nome: "Meteora Campinas",
            endereco: "Av. Iguatemi, 777 - Vila Brandina (Loja 25-3 - Shopping Iguatemi)",
            cep:"13092-500",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Campinas",
            endereco: "Av. Império do Sol Nascente, 350 - Chácara da República (Loja 52 - Unimart Shopping Campinas)",
            cep:"13033-000",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Campinas",
            endereco: "Av. Guilherme Campos, 500 - Jardim Santa Genebra (Loja 104 - Shopping Parque Dom Pedro)",
            cep:"13080-000",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Campinas",
            endereco: "Rod. Santos Dumont, km 66 - Parque Universitario de Viracopos",
            cep:"13055-900",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        }, 
    ],
    "Franca": [
        {
            nome: "Meteora Franca",
            endereco: "R. Monsenhor Rosa, 1543 - Centro",
            cep:"14400-670",
            horario: "Seg a Sab de 08:00 ás 18:30",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Guarulhos": [
        {
            nome: "Meteora Guarulhos",
            endereco: "R. Cap. Gabriel, 198 - Centro",
            cep:"07011-010",
            horario: "Seg a Sab de 08:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Guarulhos",
            endereco: "Estr. Pres. Juscelino K. de Oliveira, 5308 - Jardim Albertina (Loja 196A - Shopping Bonsucesso)",
            cep:"07252-000",
            horario: "Seg a Sab de 08:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: true,
        },
    ],
    "Marília": [
        {
            nome: "Meteora Marília",
            endereco: "R. São Luiz, 1043 - Centro",
            cep:"17500-002",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
    "Mogi das Cruzes": [
        {
            nome: "Meteora Mogi das Cruzes",
            endereco: "Av. Ver. Narciso Yague Guimarães, 1001 - Jardim America (Loja A17 - Mogi Shopping)",
            cep:"08780-910",
            horario: "Seg a Sab de 10:00 ás 20:30",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Mogi das Cruzes",
            endereco: "Av. Henrique Péres, 1290 - Vila Bernadotti",
            cep:"08735-400",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        }, 
        {
            nome: "Meteora Mogi das Cruzes",
            endereco: "R. Nito Sona, 1589B - Jundiapeba",
            cep:"08750-640",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Santo André": [
        {
            nome: "Meteora Santo André",
            endereco: "R. Dr. Cesário Mota, 464 - Centro",
            cep:"09010-100",
            horario: "Seg a Sab de 09:30 ás 18:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Santo André",
            endereco: "Av. Aclimação, 915 - Jardim do Estádio",
            cep:"09172-030",
            horario: "Seg a Sab de 09:30 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Santo André",
            endereco: "Av. Pereira Barreto, 42 - Vila Gilda (Loja 25B - Shopping ABC)",
            cep:"09190-210",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        }, 
    ],
    "Santos": [
        {
            nome: "Meteora Santos",
            endereco: "R. Braz Cubas, 30 - Centro",
            cep:"11013-162",
            horario: "Seg a Sab de 09:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Santos",
            endereco: " R. Euclydes da Cunha, 21 - Gonzaga (Loja 920 - Miramar Shopping)",
            cep:"11065-900",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora Santos",
            endereco: "Rua Bassim Nagib Trabulsi, 98 - Ponta da Praia",
            cep:"11030-540",
            horario: "Seg a Sab de 09:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: true,
        },
    ],
    "São Bernardo do Campo": [
        {
            nome: "Meteora São Bernardo do Campo",
            endereco: "Av. Kennedy, 700 - Vila Marlene (Andar 2: Loja 49 - Golden Square Shopping)",
            cep:"09726-252",
            horario: "Seg a Dom de 10:00 ás 20:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora São Bernardo do Campo",
            endereco: "Av. Rotary, 624 - Centro (Andar 1: Loja 82 - São Bernardo Plaza Shopping)",
            cep:"09721-000",
            horario: "Seg a Dom de 10:00 ás 20:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora São Bernardo do Campo",
            endereco: "Av. do Taboão, 1595 - Taboão",
            cep:"09655-000",
            horario: "Seg a Sab de 09:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "São Paulo": [
        {
            nome: "Meteora São Paulo Capital",
            endereco: "Av. Francisco Matarazzo, 1005 - Água Branca (Loja:62 - Shopping West Plaza)",
            cep:"05003-110",
            horario: "Seg a Dom de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora São Paulo Capital",
            endereco: "Av. Interlagos, 2255 - Interlagos (Loja:45 - Shopping Interlagos)",
            cep:"04661-200",
            horario: "Seg a Dom de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora São Paulo Capital",
            endereco: "Av. Ellis Maas, 220 - Capão Redondo",
            cep:"04661-200",
            horario: "Seg a Sab de 08:00 ás 18:30",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora São Paulo Capital",
            endereco: "Av. das Nações Unidas, 14401 - Chácara Santo Antônio (Zona Sul) - (Loja 5090 - Shopping Parque da Cidade)",
            cep:"04794-000",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora São Paulo Capital",
            endereco: "SP-270, 270 - KM 14.5 Jd Boa Vista (Zona Oeste - (Loja 190 - Shopping Raposo)",
            cep:"05577-200",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora São Paulo Capital",
            endereco: "R. Antônio Raposo, 199 - Lapa",
            cep:"05074-020",
            horario: "Seg a Sab de 09:00 ás 19:30",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora São Paulo Capital",
            endereco: "Av. Sumaré, 353 - Perdizes",
            cep:"05016-090",
            horario: "Seg a Sab de 08:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora São Paulo Capital",
            endereco: "R. Conselheiro Moreira de Barros, 2780 - Lauzane Paulista (Loja 300 - Santana Parque Shopping)",
            cep:"02430-001",
            horario: "Seg a Sab de 10:00 ás 21:30",
            status: "Aberta",
            abertaFeriado: true,
        },
        {
            nome: "Meteora São Paulo Capital",
            endereco: "R. dos Patriotas, 1516 - Ipiranga",
            cep:"04207-040",
            horario: "Seg a Dom de 10:00 ás 18:30",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora São Paulo Capital",
            endereco: "Rua Ignácio Alves de Mattos, 150 - Itaquera",
            cep:"08210-210",
            horario: "Seg a Dom de 10:00 ás 18:30",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora São Paulo Capital",
            endereco: "Avenida Marechal Tito, 4956 - Itaim Paulista",
            cep:"08115-000",
            horario: "Seg a Dom de 10:00 ás 18:30",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Sorocaba": [
        {
            nome: "Meteora Sorocaba",
            endereco: "Av. Itavuvu, 3373 - Jardim Santa Cecilia (Loja L20 - Shopping Cidade)",
            cep:"18078-005",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Sorocaba",
            endereco: "R. Dr. Álvaro Soares, 61 - Centro",
            cep:"18010-190",
            horario: "Seg a Sab de 09:00 ás 19:00",
            status: "Aberta",
            abertaFeriado: false,
        },
    ],
    "Osasco": [
        {
            nome: "Meteora Osasco",
            endereco: "Av. dos Autonomistas, 1828 - Centro (Andar 2: Loja 72 - Super Shopping)",
            cep:"06090-010",
            horario: "Seg a Sab de 10:00 ás 21:00",
            status: "Aberta",
            abertaFeriado: true,
        }
    ],
    "Ribeirão Preto": [
        {
            nome: "Meteora Ribeirão Preto",
            endereco: "R. São José, 933 - Centro (Andar 1: Loja 16 - Shopping Santa Úrsula)",
            cep:"14010-160",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Ribeirão Preto",
            endereco: "R. São Sebastião, 703 - Centro",
            cep:"14015-040",
            horario: "Seg a Sab de 08:00 ás 18:00",
            status: "Aberta",
            abertaFeriado: false,
        },
        {
            nome: "Meteora Ribeirão Preto",
            endereco: "Av. Cel. Fernando Ferreira Leite, 1540 - Jardim California (Andar 2: Loja 53 - Ribeirão Shopping)",
            cep:"14026-900",
            horario: "Seg a Sab de 10:00 ás 22:00",
            status: "Aberta",
            abertaFeriado: true,
        },
    ],
    "Ubatuba": [
        {
            nome: "Meteora Ubatuba",
            endereco: "R. Cel. Domiciano, 631 - Centro",
            cep:"11690-018",
            horario: "Seg a Sab de 08:00 ás 20:00",
            status: "Aberta",
            abertaFeriado: false,
        }
    ],
};

function exibirLojas() {
    const cidade = document.getElementById('cidade').value;
    const listaLojas = document.getElementById('lista-lojas');

    listaLojas.innerHTML = "";

    if (cidade && lojas[cidade]) {
        lojas[cidade].forEach(function (loja) {
            const lojaCard = document.createElement('div');
            lojaCard.classList.add('loja-card');

            lojaCard.innerHTML = `
                <h3>${loja.nome}</h3>
                <p><strong>Endereço:</strong> ${loja.endereco}</p>
                <p><strong>CEP:</strong> ${loja.cep}</p>
                <p><span class="status-aberta">${loja.status}</span> ${loja.abertaFeriado ? '<span class="status-aberta">Aberta em Feriados</span>': ''}</p>
                <h4>Horários de Funcionamentos</h4>
                <p>🕒 ${loja.horario}</p>
                `;

                listaLojas.appendChild(lojaCard);
        });
    }else {
        listaLojas.innerHTML = "<p>Nenhuma loja disponível para essa cidade. </p>";
    }
}
