interface HeroProps {
  onOpenModal: (titulo: string) => void;
}

function CardPrecos({ onOpenModal }: HeroProps) {

    return (
        <div id="planos" className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">


            {/* tiutlo*/}
            <div className="text-center mb-12 mt-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Escolha o plano ideal para sua empresa
                </h2>
                <p className="text-gray-500 mt-3 text-lg">
                    Planos flexíveis que crescem com seu negócio
                </p>
            </div>
            {/*cards com precos - pai*/}
            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6x1 mx-auto justify-center items-center relative">

                {/*Plano básico*/}
                <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border p-8 w-full max-w-sm">
                    <h2 className="text-2x1 font-semibold text-slate-900">Básico</h2>
                    <p className="text-gray-500 mt-2">Equipes pequenas</p>

                    <div className="mt-6">
                        <span className="text-4x1 font-bold text-slate-900">R$ 49</span>
                        <span className="text-gray-500">/mês por usuário</span>
                    </div>

                    <ul className="mt-6 space-y-3 text-gray-600">
                        <li>✔ Gestão de ponto digital</li>
                        <li>✔ Controle de férias</li>
                        <li>✔ Banco de horas</li>
                        <li>✔ Até 50 colaboradores</li>
                        <li>✔ Suporte por email</li>
                    </ul>
                  
                    <button
                    onClick={() => onOpenModal("Comece seu teste grátis")}
                    className="mt-8 w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-400 transition">
                        Começar agora
                    </button>
                </div>
            

            {/*Intermediario*/}
            <div className="bg-[#00AD73] rounded-2xl shadow-sm border p-8 w-full max-w-sm">
                <h2 className="text-2x1 font-semibold text-white">Intermediario</h2>
                <p className="text-white mt-2">Para empresas em crescimento</p>

                <div className="mt-6">
                    <span className="text-4x1 font-bold text-white">R$ 89</span>
                    <span className="text-white">/mês por usuário</span>

                    <ul className="mt-6 space-y-3 text-white">
                        <li>✔ Tudo que o plano Básico possui</li>
                        <li>✔ Avaliação de desempenho</li>
                        <li>✔ Recrutramento e seleção</li>
                        <li>✔ Relatorios avançados</li>
                        <li>✔ Até 200 colaboradores</li>
                        <li>✔ Suporte prioritario</li>
                    </ul>
                  
                    <button
                    onClick={() => onOpenModal("Comece seu teste grátis")}
                    className="mt-8 w-full bg-[#FFFFFF] text-black py-3 rounded-xl hover:bg-slate-800 transition">
                        Começar agora
                    </button>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm" data-fg-d3bl177="0.8:1.27388:/src/app/App.tsx:395:15:18658:179:e:div:t">Mais Popular</div>
                </div>

                
                
            </div>

            {/*Personalizado*/}
            <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border p-8 w-full max-w-sm">
                <h2 className="text-2x1 font-semibold text-slate-900">Enterprise</h2>
                <p className="text-gray-500 mt-2">Para grandes organizações</p>

                <div className="mt-6">
                    <span className="text-4x1 font-bold text-slate-900">Personalizado</span>

                    <ul className="mt-6 space-y-3 text-gray-600">
                        <li>✔ Tudo do plano Profissional</li>
                        <li>✔ Integrações personalizadas</li>
                        <li>✔ API dedicada</li>
                        <li>✔ Colaboradores ilimitados</li>
                        <li>✔ Gerente de conta dedicado</li>
                        <li>✔ Suporte 24/7</li>
                    </ul>
                    <button
                    onClick={() => onOpenModal("Comece seu teste grátis")}
                    className="mt-8 w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-400 transition">
                        Falar com vendas
                    </button>
                </div>
                </div>

            </div>

            <h5 className="text-gray-500 mt-3 text-lg">Todos os planos incluem 14 dias de teste grátis. Sem compromisso.</h5>
        </div>

        
    )
}

export default CardPrecos