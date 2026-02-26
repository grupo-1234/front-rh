import { Users, TrendingUp, ChevronRight, Check} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-[#0f172a] text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforme seu RH em um <span className="text-emerald-400">setor estratégico</span>
          </h1>

          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
            O PeopleFlow é a plataforma completa para gestão de pessoas. 
            Automatize processos, economize tempo e tome decisões baseadas em dados reais.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <button className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all">
              Testar Gratuitamente
              <ChevronRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold border border-slate-700 rounded-lg transition-all">
              Falar com Especialista
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="text-emerald-400" size={18} />
              Sem cartão de crédito
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-emerald-400" size={18} />
              Teste grátis 14 dias
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
          `}</style>

          <div className="absolute -left-4 top-10 z-20 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-3 text-slate-900 animate-float">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Users className="text-emerald-600" size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Colaboradores</p>
              <p className="font-bold text-lg">+2.543</p>
            </div>
          </div>

          <div className="absolute -right-4 bottom-10 z-20 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-3 text-slate-900 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="bg-blue-100 p-2 rounded-lg">
              <TrendingUp className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Produtividade</p>
              <p className="font-bold text-lg text-emerald-600">+45%</p>
            </div>
          </div>

          <img 
            src="../src/assets/rh.jpg" 
            alt="Dashboard PeopleFlow" 
            className="rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}