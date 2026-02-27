interface CardAvaliacaoProps {
    texto: string;
    nome: string;
    cargo: string;
    empresa: string;
    foto: string;
}

export function CardAvaliacao({ texto, nome, cargo, empresa, foto }: CardAvaliacaoProps) {
    return (
        <div className="flex flex-col bg-[#FFFFFF] p-8 rounded-2xl shadow-lg border border-gray-100 h-full hover:border-[#2563EB] transition-all duration-300"> 
            
            <div className="text-[#16A34A] text-6xl mb-4 font-serif leading-none">“</div>
            
            <p className="text-[#374151] italic mb-8 grow leading-relaxed text-lg">
                "{texto}"
            </p>

            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <img 
                    src={foto} 
                    alt={nome} 
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[#2563EB]/20"
                />
                <div className="flex flex-col">
                    <span className="font-bold text-[#374151] text-lg leading-tight">{nome}</span>
                    
                    <span className="text-sm text-[#2563EB] font-semibold">{cargo}</span>
                    
                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">{empresa}</span>
                </div>
            </div>
        </div>
    );
}