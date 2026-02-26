import { type IconProps } from "@phosphor-icons/react";

interface CardProblemaProps {
    titulo: string
    descricao: string
    Icone: React.ElementType<IconProps>
}

function CardProblema({ titulo, descricao, Icone }: CardProblemaProps) {
    return (
        <div className='bg-white border border-[#334155]/10 
                        rounded-2xl p-8 flex flex-col 
                        shadow-sm hover:shadow-md 
                        transition-all duration-300 
                        hover:-translate-y-1'>

            <div className='bg-red-600/10 p-3 rounded-xl mb-6 text-red-600 w-fit'>
                <Icone size={28} weight="bold" />
            </div>

            <h3 className='font-bold text-[#374151] text-lg mb-3 leading-tight'>
                {titulo}
            </h3>

            <p className='text-[#9CA3AF] text-sm leading-relaxed'>
                {descricao}
            </p>

        </div>
    )
}

export default CardProblema;