import { Github, Linkedin } from "lucide-react";

export function CardSobre() {
  const devs = [
    { 
        nome: "Larissa de Souza", 
        cargo: "Tech Lead Master blaster", 
        foto: "https://i.imgur.com/FKPtB75.png",
        github: "https://github.com/dev-lari", 
        linkedin: "https://www.linkedin.com/in/lari-souza/" 
    },
    { 
        nome: "Milena Guerra", 
        cargo: "Desenvolvedora ReactJS | NestJS", 
        foto: "https://i.imgur.com/eKQHRMG.png",
        github: "https://github.com/milenaaguerra", 
        linkedin: "https://www.linkedin.com/in/milenaaguerra/" 
    },
    { 
        nome: "Rayane Medeiros", 
        cargo: "Desenvolvedora ReactJS | NestJS", 
        foto: "https://i.imgur.com/4XbRLkw.png",
        github: "https://github.com/RAY963-tech", 
        linkedin: "https://www.linkedin.com/in/rayane-l-l-nogueira-1505391aa/" 
    },
    { 
        nome: "Alesson Carlos", 
        cargo: "Desenvolvedor ReactJs | NestJS", 
        foto: "https://i.imgur.com/uNrYPDK.png",
        github: "https://github.com/AlessonCarlos", 
        linkedin: "https://www.linkedin.com/in/alessoncarlos/" 
    },
    { 
        nome: "Isaias Roberto", 
        cargo: "Pedreiro de Software Java | ReactJS | NestJS", 
        foto: "https://i.imgur.com/8kEFevH.png",
        github: "https://github.com/anidio", 
        linkedin: "https://www.linkedin.com/in/isaiasroberto/" 
    },
    { 
        nome: "Randerson Henrique", 
        cargo: "Desenvolvedor ReactJS | NestJS", 
        foto: "https://i.imgur.com/qTCuLld.png",
        github: "https://github.com/RandyHenrique", 
        linkedin: "https://www.linkedin.com/in/randerson-henrique-a5a766125/" 
    }
  ];

  return (
    <div className="w-full bg-gray-100 pt-18">
      <section className="w-full bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-center">PeopleFlow</h2>
          <div className="h-2 w-24 bg-[#22C55E] mx-auto rounded-full"></div>
          <div>
            <p className="text-gray-600 mt-10 leading-relaxed text-2xl font-regular text-center">
              A PeopleFlow é uma plataforma de <span className="text-emerald-800 font-bold"> gestão de pessoas </span> que automatiza
              processos de RH e centraliza informações em um só lugar.
              Com métricas em tempo real e relatórios inteligentes, ajuda empresas a tomarem decisões mais estratégicas.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto bg-gray-200 rounded-3xl shadow-md py-10 px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-10 px-10">
            <div>
              <h2 className="text-5xl font-bold text-emerald-600"> 2026</h2>
              <p className="text-lg font-semibold text-gray-800">Ano de fundação</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-emerald-600">+1000</h2>
              <p className="text-lg font-semibold text-gray-800">Empresas atendidas</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-emerald-600"> +2000</h2>
              <p className="text-lg font-semibold text-gray-800">Colaboradores</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Nossos colaboradores</h2>
          <div className="h-2 w-24 bg-[#22C55E] mx-auto rounded-full mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devs.map((dev, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-lg hover:bg-emerald-50 transition-all duration-300 group"
              >
                <img
                  src={dev.foto}
                  alt={dev.nome}
                  className="w-20 h-20 object-cover object-top rounded-full border-2 border-emerald-100 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">{dev.nome}</h3>
                    <p className="text-sm text-emerald-600 font-medium">{dev.cargo}</p>
                  </div>
                  
                  {/* Ícones Sociais */}
                  <div className="flex gap-3">
                    <a 
                      href={dev.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-900 hover:text-white hover:scale-125 transition-all duration-300"
                      title="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={dev.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white hover:scale-125 transition-all duration-300"
                      title="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardSobre;