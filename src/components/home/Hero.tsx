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
    <section className="relative bg-[#0f172a] text-white py-20 lg:py-32 overflow-hidden">
      <div id="hero" className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforme seu RH em um <span className="text-emerald-400">setor estratégico</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
            O PeopleFlow é a plataforma completa para gestão de pessoas. 
            Automatize processos, economize tempo e tome decisões baseadas em dados reais.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
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

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-sm text-slate-400">
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

        <div className="relative flex justify-center lg:justify-end w-full max-w-xl lg:max-w-none mx-auto order-1 lg:order-2 mt-12 lg:mt-0">
          
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
            .swiper {
              width: 100%;
              border-radius: 1rem;
            }
          `}</style>

          <div className="absolute -left-2 md:-left-4 top-2 md:top-8 z-20 bg-white p-3 md:p-4 rounded-xl shadow-2xl flex items-center gap-2 md:gap-3 text-slate-900 animate-float">
            <div className="bg-emerald-100 p-1.5 md:p-2 rounded-lg">
              <Users className="text-emerald-600" size={20} />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-slate-500 font-medium">Colaboradores</p>
              <p className="font-bold text-sm md:text-lg">+2.543</p>
            </div>
          </div>

          <div className="absolute -right-2 md:-right-4 bottom-4 md:bottom-10 z-20 bg-white p-3 md:p-4 rounded-xl shadow-2xl flex items-center gap-2 md:gap-3 text-slate-900 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="bg-blue-100 p-1.5 md:p-2 rounded-lg">
              <TrendingUp className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-slate-500 font-medium">Produtividade</p>
              <p className="font-bold text-sm md:text-lg text-emerald-600">+45%</p>
            </div>
          </div>

          <div className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="mySwiper h-full"
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