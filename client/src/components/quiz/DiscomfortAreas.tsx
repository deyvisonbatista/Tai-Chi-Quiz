import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

import imgOmbros from "@assets/ombros_1772047002334.png";
import imgCostas from "@assets/costas_1772047005067.png";
import imgLombar from "@assets/lombar_1772047007239.png";
import imgCotovelos from "@assets/cotovelos_1772047009920.png";
import imgJoelhos from "@assets/joelhos_1772047012339.png";
import imgPanturrilhas from "@assets/panturilha_1772047015090.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const AREAS = [
  { id: "ombros", label: "Ombros", image: imgOmbros },
  { id: "costas", label: "Costas", image: imgCostas },
  { id: "lombar", label: "Lombar", image: imgLombar },
  { id: "cotovelos", label: "Cotovelos", image: imgCotovelos },
  { id: "joelhos", label: "Joelhos", image: imgJoelhos },
  { id: "panturrilhas", label: "Panturrilhas", image: imgPanturrilhas }
];

export default function DiscomfortAreas({ onNext, onBack }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [noneSelected, setNoneSelected] = useState(false);

  const toggleOption = (id: string) => {
    if (noneSelected) setNoneSelected(false);
    
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleNone = () => {
    setNoneSelected(true);
    setSelected([]);
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      <div className="w-full pt-8 pb-4 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      <div className="w-full max-w-[500px] px-6 mb-8 mt-2">
        <div className="w-full h-[6px] bg-[#EBE0D6] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "65%" }}
            animate={{ width: "75%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full bg-[#6C7686] rounded-full"
          ></motion.div>
        </div>
      </div>

      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.8rem] font-bold text-black mb-4 text-center leading-tight tracking-tight px-2"
        >
          Você sente <span className="text-[#DE77A5]">dificuldade</span> ou <span className="text-[#DE77A5]">desconforto</span> em alguma destas áreas?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#333] text-[1.05rem] text-center mb-8 px-2"
        >
          Vamos proteger as áreas lesionadas e, ao mesmo tempo, criar um plano para restaurar seu corpo.
        </motion.p>

        <div className="flex flex-col gap-[14px] w-full mb-6">
          {AREAS.map((area, index) => {
            const isSelected = selected.includes(area.id);
            return (
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                key={area.id}
                onClick={() => toggleOption(area.id)}
                className={`
                  w-full transition-all duration-300 rounded-[14px] p-2 pr-5
                  flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-[0.98] group relative
                  ${isSelected 
                    ? 'bg-[#E2D4C8] border-2 border-[#C0B3A8]' 
                    : 'bg-[#EBE0D6] border border-[#E0D3C9]'
                  }
                `}
              >
                <div className="w-[86px] h-[86px] rounded-[10px] overflow-hidden bg-black shrink-0">
                  <img src={area.image} alt={area.label} className="w-full h-full object-cover" />
                </div>
                
                <span className="text-black font-bold text-[1.15rem] flex-1 text-center">
                  {area.label}
                </span>

                <div className={`
                  w-[26px] h-[26px] rounded-[6px] border-2 flex items-center justify-center transition-colors shrink-0 ml-2
                  ${isSelected ? 'bg-[#6C7686] border-[#6C7686]' : 'bg-white border-[#C9C2BA]'}
                `}>
                  {isSelected && (
                    <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  )}
                </div>
              </motion.button>
            );
          })}
          
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            onClick={handleNone}
            className={`
              w-full transition-all duration-300 rounded-[14px] py-4 px-5 flex items-center shadow-sm active:scale-[0.98] group mt-2
              ${noneSelected 
                ? 'bg-[#E2D4C8] border-2 border-[#C0B3A8]' 
                : 'bg-[#EBE0D6] border border-[#E0D3C9]'
              }
            `}
          >
            <div className="w-10 flex justify-center">
              <span className="text-[1.8rem]">🚫</span>
            </div>
            <span className="text-black font-bold text-[1.1rem] flex-1 text-center pr-4">
              Nenhuma das opções
            </span>
            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <ChevronRight className="w-4 h-4 text-[#888]" strokeWidth={3} />
            </div>
          </motion.button>
        </div>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={onNext}
          disabled={selected.length === 0 && !noneSelected}
          className={`w-full font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-all duration-300 active:scale-[0.98] ${
            selected.length > 0 || noneSelected ? "bg-[#6C7076] hover:bg-[#5C6066] text-white" : "bg-[#A5ABB3] text-white/80"
          }`}
        >
          Continuar
        </motion.button>
      </main>
    </div>
  );
}
