import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import logoImg from "@assets/logo_1772043688813.png";

const OPTIONS = [
  { id: "peso", label: "Estar acima do peso", emoji: "⚖️" },
  { id: "dor", label: "Meu corpo vive dolorido e travado", emoji: "🤕" },
  { id: "cansaco", label: "Vivo cansada e sem energia", emoji: "🥱" },
  { id: "forca", label: "Não tenho força", emoji: "🫠" }
];

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Troubles({ onNext, onBack }: Props) {
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
            initial={{ width: "55%" }}
            animate={{ width: "70%" }}
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
          className="text-[1.75rem] font-bold text-black mb-2 text-center leading-tight tracking-tight px-2"
        >
          O que mais <span className="text-[#DE77A5]">incomoda</span> você hoje?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#333] text-[1.05rem] text-center mb-8"
        >
          Pode marcar mais de uma opção, se quiser.
        </motion.p>

        <div className="flex flex-col gap-[14px] w-full mb-6">
          {OPTIONS.map((option, index) => {
            const isSelected = selected.includes(option.id);
            return (
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                key={option.id}
                onClick={() => toggleOption(option.id)}
                className={`
                  w-full transition-all duration-300 rounded-[14px] py-4 px-5 
                  flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-[0.98]
                  ${isSelected 
                    ? 'bg-[#E2D4C8] border-2 border-[#C0B3A8]' 
                    : 'bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9]'
                  }
                `}
              >
                <span className="text-2xl mr-4">{option.emoji}</span>
                <span className="text-black font-bold text-[1.05rem] flex-1 text-center leading-tight">
                  {option.label}
                </span>
                
                <div className={`
                  w-[26px] h-[26px] rounded-[6px] border-2 flex items-center justify-center transition-colors ml-4 shrink-0
                  ${isSelected 
                    ? 'bg-[#6C7686] border-[#6C7686]' 
                    : 'bg-white border-[#C9C2BA]'
                  }
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
            transition={{ duration: 0.4, delay: 0.6 }}
            onClick={onNext}
            className="w-full bg-[#F5EBE1] border border-[#E5D7CC] transition-all duration-300 rounded-[14px] py-4 px-5 flex items-center justify-between shadow-sm active:scale-[0.98] group mt-2"
          >
            <span className="text-2xl mr-2">❤️</span>
            <span className="text-black font-bold text-[1.1rem]">
              Só quero cuidar da saúde
            </span>
            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform ml-2">
              <ChevronRight className="w-4 h-4 text-[#888]" strokeWidth={3} />
            </div>
          </motion.button>
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
