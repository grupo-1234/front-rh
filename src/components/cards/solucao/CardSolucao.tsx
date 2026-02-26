import { type IconProps } from "@phosphor-icons/react";

interface CardSolucaoProps {
  titulo: string
  descricao: string
  Icone: React.ElementType<IconProps>
}

function CardSolucao({ titulo, descricao, Icone }: CardSolucaoProps) {
  return (
    <div className='bg-white border border-[#334155]/10 
                    rounded-2xl p-8 flex flex-col 
                    shadow-sm hover:shadow-md 
                    transition-all duration-300 
                    hover:-translate-y-1'>

      <div className='bg-[#22C55E]/10 p-3 rounded-xl mb-6 text-[#16A34A] w-fit'>
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

export default CardSolucao;