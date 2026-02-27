interface NavbarProps {
  onOpenModal: (titulo: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {

  return (
    <nav className="bg-[#0f172a] text-white w-full fixed top-0 z-50 left-0">
    <div className=" w-full mx-auto py-2 flex justify-between items-center max-w-7xl px-2 sm:px-6 lg:px-8">
      
      <div className="py-4 flex justify-between items-center">
        <span className="text-xl font-bold mr-30"> <a href="#hero"> PeopleFlow </a> </span>
      
      <ul className="flex mx-auto gap-6 text-lg font-semibold">
       <li> <a href="#hero"> Home </a> </li>
        <li> <a href="#beneficios"> Benefícios </a> </li>
        <li> <a href="#avaliacoes"> Avaliações </a> </li>
        <li> <a href="#planos"> Planos </a> </li>
        <li> <a href="#sobrenos"> Sobre nós </a> </li>
      </ul>
      </div>
      

        <div className="">
            <button 
            onClick={() => onOpenModal("Falar com um Especialista")}
            className= "bg-linear-to-r from-emerald-600 to-blue-900 hover:to-blue-900 hover:from-blue-900 px-8 py-4 text-sm font-bold text-white transition rounded-full cursor-pointer">
                Assine
            {/* <button className="bg-slate-900 px-8 py-3 text-sm font-bold text-white transition hover:bg-blue-900 rounded-3xl"> */}
            </button>
        </div>
    </div>
    
    </nav>
  );
}