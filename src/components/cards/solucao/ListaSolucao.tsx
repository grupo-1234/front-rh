import { useState, useEffect } from "react"
import CardSolucao from "./CardSolucao"
import { Clock, Calendar, Medal, Users, ChartBar, TrendUp } from "@phosphor-icons/react"

function ListaSolucao() {

  const [solucoes, setSolucoes] = useState<any[]>([])

  useEffect(() => {
    carregarSolucoes()
  }, [])

  function carregarSolucoes() {
    const lista = [
      {
        id: 1,
        titulo: "Gestão de ponto digital",
        descricao: "Controle de jornada automatizado com registro facial, geolocalização e integração com relógio de ponto",
        icone: Clock
      },
      {
        id: 2,
        titulo: "Controle de férias e benefícios",
        descricao: "Gestão completa de férias, benefícios e documentos dos colaboradores em um só lugar",
        icone: Calendar
      },
      {
        id: 3,
        titulo: "Avaliação de desempenho",
        descricao: "Crie ciclos de avaliação personalizados e acompanhe o desenvolvimento dos colaboradores",
        icone: Medal
      },
      {
        id: 4,
        titulo: "Recrutamento e seleção",
        descricao: "Publique vagas, receba candidaturas e gerencie todo o processo seletivo de forma eficiente",
        icone: Users
      },
      {
        id: 5,
        titulo: "Relatórios automáticos",
        descricao: "Gere relatórios completos com um clique e exporte para Excel ou PDF",
        icone: ChartBar
      },
      {
        id: 6,
        titulo: "Dashboard com métricas estratégicas",
        descricao: "Visualize indicadores em tempo real e tome decisões baseadas em dados concretos",
        icone: TrendUp
      }
    ]

    setSolucoes(lista)
  }

  return (
    <div className="flex justify-center w-full my-20 px-6">
      <div className="container flex flex-col max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4 tracking-tight">
            Uma solução completa para seu RH
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Tudo que você precisa em uma única plataforma intuitiva e moderna
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solucoes.map((solucao) => (
            <CardSolucao
              key={solucao.id}
              titulo={solucao.titulo}
              descricao={solucao.descricao}
              Icone={solucao.icone}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default ListaSolucao;