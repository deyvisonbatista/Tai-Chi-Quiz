import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import logoImg from "@assets/logo_1772043688813.png";
import imgBarriga from "@assets/barriga_1772044871915.png";
import imgBunda from "@assets/bunda_1772044874819.png";
import imgPeito from "@assets/peito_1772044877256.png";
import imgPernas from "@assets/pernas_1772044879671.png";

const AREAS = [
  { id: "barriga", label: "Barriga", image: imgBarriga },
  { id: "bunda", label: "Bunda", image: imgBunda },
  { id: "peito", label: "Peito", image: imgPeito },
  { id: "pernas", label: "Pernas", image: imgPernas }
];

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function FocusAreas({ onNext, onBack }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      {/* Header / Logo */}
      <div className="w-full pt-8 pb-6 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-[500px] px-6 mb-8">
        <div className="w-full h-[6px] bg-[#EBE0D6] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "70%" }}
            animate={{ width: "85%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full bg-[#6C7686] rounded-full"
          ></motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6">
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.8rem] font-bold text-black mb-2 text-center leading-tight tracking-tight px-4"
        >
          Quais <span className="text-[#DE77A5]">áreas</span> do corpo você quer cuidar primeiro?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#333] text-[1.05rem] text-center mb-8"
        >
          Pode selecionar quantas quiser.
        </motion.p>

        {/* 2x2 Grid for Body Areas */}
        <div className="grid grid-cols-2 gap-4 w-full mb-8">
          {AREAS.map((area, index) => {
            const isSelected = selected.includes(area.id);
            return (
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                key={area.id}
                onClick={() => toggleOption(area.id)}
                className={`
                  transition-all duration-300 rounded-[14px] overflow-hidden flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-[0.98] group relative
                  ${isSelected 
                    ? 'bg-[#E2D4C8] border-2 border-[#C0B3A8]' 
                    : 'bg-[#EBE0D6] border border-[#E0D3C9]'
                  }
                `}
              >
                <div className="w-full aspect-[4/5] overflow-hidden bg-[#D3DDE0] p-0.5 rounded-t-[12px]">
                  <img src={area.image} alt={area.label} className="w-full h-full object-cover object-center rounded-t-[10px]" />
                </div>
                
                <div className={`p-4 flex items-center justify-between w-full transition-colors ${isSelected ? 'bg-[#E2D4C8]' : 'bg-[#EBE0D6]'}`}>
                  <span className="text-black font-bold text-[1.15rem]">
                    {area.label}
                  </span>
                  <div className={`
                    w-[24px] h-[24px] rounded-[6px] border-2 flex items-center justify-center transition-colors shrink-0
                    ${isSelected ? 'bg-[#6C7686] border-[#6C7686]' : 'bg-white border-[#C9C2BA]'}
                  `}>
                    {isSelected && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={onNext}
          className={`w-full font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-all duration-300 active:scale-[0.98] ${
            selected.length > 0 ? "bg-[#6C7076] hover:bg-[#5C6066] text-white" : "bg-[#A5ABB3] text-white/80"
          }`}
        >
          Continuar
        </motion.button>
      </main>
    </div>
  );
}
