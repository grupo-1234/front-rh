import { Users, TrendingUp, ChevronRight, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface HeroProps {
  onOpenModal: (titulo: string) => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    /* py-28 garante que o conteúdo comece abaixo do header fixo e tenha espaço para os cards flutuarem */
    <section className="relative bg-[#0f172a] text-white py-20 lg:py-32 overflow-hidden w-full">
      <div id="hero" className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Lado Esquerdo: Texto (Invertido no mobile para aparecer depois da imagem) */}
        <div className="w-full text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 w-full">
            Transforme seu RH em um <span className="text-emerald-400">setor estratégico</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg mb-8 md:mb-10 max-w-xl">
            O PeopleFlow é a plataforma completa para gestão de pessoas. 
            Automatize processos, economize tempo e tome decisões baseadas em dados reais.
          </p>

          {/* Botões: w-full no mobile para não cortar e ficarem centralizados */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 w-full max-w-md lg:max-w-none">
            <button 
              onClick={() => onOpenModal("Comece seu teste grátis")}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
            >
              Testar Gratuitamente
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => onOpenModal("Falar com um Especialista")}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold border border-slate-700 rounded-lg transition-all"
            >
              Falar com Especialista
            </button>
          </div>

          {/* Checks: Centralizados no mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 text-sm text-slate-400 w-full">
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

        {/* Lado Direito: Imagem/Slider (Ordem 1 no mobile) */}
        <div className="relative w-full max-w-[320px] sm:max-w-lg lg:max-w-none mx-auto order-1 lg:order-2 mt-8 lg:mt-0">
          
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
          `}</style>

          {/* Card Colaboradores: Posicionado para não sair da tela do celular */}
          <div className="absolute -left-4 sm:-left-8 top-4 md:top-10 z-20 bg-white p-3 md:p-4 rounded-xl shadow-2xl flex items-center gap-2 md:gap-3 text-slate-900 animate-float">
            <div className="bg-emerald-100 p-1.5 md:p-2 rounded-lg text-emerald-600">
              <Users size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-none">Colaboradores</p>
              <p className="font-bold text-xs md:text-lg">+2.543</p>
            </div>
          </div>

          {/* Card Produtividade */}
          <div className="absolute -right-4 sm:-right-8 bottom-4 md:bottom-10 z-20 bg-white p-3 md:p-4 rounded-xl shadow-2xl flex items-center gap-2 md:gap-3 text-slate-900 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="bg-blue-100 p-1.5 md:p-2 rounded-lg text-blue-600">
              <TrendingUp size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-none">Produtividade</p>
              <p className="font-bold text-xs md:text-lg text-emerald-600">+45%</p>
            </div>
          </div>

          {/* Container do Swiper: Altura reduzida no mobile para não sobrepor o Header */}
          <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="h-full w-full"
            >
              <SwiperSlide>
                <img 
                  src="https://i.imgur.com/oTEXCXW.png" 
                  alt="Dashboard 1" 
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src="https://i.imgur.com/nq5A3AK.jpg"
                  alt="Equipe trabalhando" 
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}