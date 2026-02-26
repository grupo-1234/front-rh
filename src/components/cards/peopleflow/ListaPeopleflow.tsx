import { useState, useEffect } from "react"
import CardPeopleflow from "./CardPeopleflow"
import { Lightning, CheckCircle, ChartBar, ShieldCheck, Heart, TrendUp} from "@phosphor-icons/react"

function ListaPeopleflow() {

  const [beneficios, setBeneficios] = useState<any[]>([])

  useEffect(() => {
    carregarBeneficios()
  }, [])

  function carregarBeneficios() {
    const lista = [
      {
        id: 1,
        titulo: "Economia de tempo",
        descricao: "Reduza até 80% do tempo gasto em tarefas administrativas do RH",
        icone: Lightning,
        corIcone: "text-yellow-600",
        corFundo: "bg-yellow-500/10"
      },
      {
        id: 2,
        titulo: "Redução de erros",
        descricao: "Elimine erros de cálculo e retrabalho com automação inteligente",
        icone: CheckCircle,
        corIcone: "text-green-600",
        corFundo: "bg-green-500/10"
      },
      {
        id: 3,
        titulo: "Decisões baseadas em dados",
        descricao: "Acesse relatórios e métricas para decisões mais estratégicas",
        icone: ChartBar,
        corIcone: "text-blue-600",
        corFundo: "bg-blue-500/10"
      },
      {
        id: 4,
        titulo: "Conformidade com legislação",
        descricao: "Mantenha-se atualizado com as normas trabalhistas brasileiras",
        icone: ShieldCheck,
        corIcone: "text-purple-600",
        corFundo: "bg-purple-500/10"
      },
      {
        id: 5,
        titulo: "Melhoria na experiência",
        descricao: "Colaboradores mais satisfeitos com processos simples e transparentes",
        icone: Heart,
        corIcone: "text-red-600",
        corFundo: "bg-red-500/10"
      },
      {
        id: 6,
        titulo: "Aumento de produtividade",
        descricao: "Foque no que realmente importa: desenvolvimento de pessoas",
        icone: TrendUp,
        corIcone: "text-indigo-600",
        corFundo: "bg-indigo-500/10"
      }
    ]

    setBeneficios(lista)
  }

  return (
    <div className="flex justify-center w-full my-20 px-6 bg-[#F8FAFC] py-20">
      <div className="container flex flex-col max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4 tracking-tight">
            Por que escolher o PeopleFlow?
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Benefícios reais que transformam a gestão de pessoas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio) => (
            <CardPeopleflow
              key={beneficio.id}
              titulo={beneficio.titulo}
              descricao={beneficio.descricao}
              Icone={beneficio.icone}
              corIcone={beneficio.corIcone}
              corFundo={beneficio.corFundo}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default ListaPeopleflow;