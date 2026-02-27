import { CardAvaliacao } from "./CardAvaliacao";

export function ListaAvaliacao() {
    
    const dadosAvaliacao = [
        {
            id: 1,
            texto: "A plataforma transformou nossa gestão de talentos. A interface é intuitiva e os relatórios são precisos.",
            nome: "Mariana Costa",
            cargo: "Diretora de RH",
            empresa: "TechStart",
            foto: "https://i.pravatar.cc/150?u=mariana"
        },
        {
            id: 2,
            texto: "Conseguimos reduzir o tempo de fechamento de vagas em 40%. É uma ferramenta essencial para o RH moderno.",
            nome: "Ricardo Santos",
            cargo: "Head de Recrutamento",
            empresa: "Global Corp",
            foto: "https://i.pravatar.cc/150?u=ricardo"
        },
        {
            id: 3,
            texto: "O suporte é impecável e as atualizações são constantes. Atende perfeitamente empresas de grande porte.",
            nome: "Beatriz Oliveira",
            cargo: "Business Partner",
            empresa: "LogiTech",
            foto: "https://i.pravatar.cc/150?u=beatriz"
        }
    ];

    return (
        <section className="bg-gray-50 py-24 px-4">
            <div id= "#avaliacoes" className="container mx-auto max-w-7xl">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6">
                        Experiências de Sucesso
                    </h2>
                    <div className="h-2 w-24 bg-[#22C55E] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {dadosAvaliacao.map((item) => (
                        <CardAvaliacao 
                            key={item.id}
                            texto={item.texto}
                            nome={item.nome}
                            cargo={item.cargo}
                            empresa={item.empresa}
                            foto={item.foto}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}