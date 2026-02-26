import { useState, useEffect } from "react"
import CardProblema from "./CardProblema"
import { Clock, Table, WarningCircle, ChartBar } from "@phosphor-icons/react"
function ListaProblema() {

    const [problemas, setProblemas] = useState<any[]>([])

    useEffect(() => {
        carregarProblemas()
    }, [])

    function carregarProblemas() {
        const lista = [
            {
                id: 1,
                titulo: "Processos manuais",
                descricao: "Horas perdidas com tarefas repetitivas e burocráticas",
                icone: Clock
            },
            {
                id: 2,
                titulo: "Planilhas desorganizadas",
                descricao: "Informações espalhadas e difíceis de encontrar",
                icone: Table
            },
            {
                id: 3,
                titulo: "Falta de controle de ponto",
                descricao: "Dificuldade em registrar e gerenciar a jornada de trabalho",
                icone: WarningCircle
            },
            {
                id: 4,
                titulo: "Sem acompanhamento de desempenho",
                descricao: "Avaliações subjetivas sem dados concretos",
                icone: ChartBar
            }
        ]

        setProblemas(lista)
    }

    return (
        <>
            <div className="flex justify-center w-full my-20 px-6 bg-[#F8FAFC] py-20">
                <div className="container flex flex-col max-w-6xl">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4 tracking-tight">
                            Seu RH ainda enfrenta esses desafios?
                        </h2>
                        <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
                            Processos manuais estão custando tempo e dinheiro da sua empresa
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {problemas.map((problema) => (
                            <CardProblema
                                key={problema.id}
                                titulo={problema.titulo}
                                descricao={problema.descricao}
                                Icone={problema.icone}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default ListaProblema