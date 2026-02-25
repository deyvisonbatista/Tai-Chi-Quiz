import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

import imgLeveza from "@assets/Me_movimentar_com_mais_leveza_1772051558106.png";
import imgRespirar from "@assets/Respirar_melhor_e_relaxar_o_corpo_1772051561009.png";
import imgEquilibrio from "@assets/equilibrio_firmeza_1772051563443.png";
import imgFortalecer from "@assets/Fortalecer_o_corpo_1772051565727.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const OPTIONS = [
  { id: "leveza", label: "Me movimentar com mais leveza", image: imgLeveza },
  { id: "respirar", label: "Respirar melhor e relaxar o corpo", image: imgRespirar },
  { id: "equilibrio", label: "Ter mais equilíbrio e firmeza", image: imgEquilibrio },
  { id: "fortalecer", label: "Fortalecer o corpo", image: imgFortalecer }
];

export default function PreferStart({ onNext, onBack }: Props) {
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
            initial={{ width: "92%" }}
            animate={{ width: "94%" }}
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
          className="text-[1.8rem] font-bold text-black mb-2 text-center leading-tight tracking-tight"
        >
          Como você <span className="text-[#DE77A5]">prefere</span> começar ?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[#555] text-[1rem] text-center mb-6"
        >
          Você pode experimentar e mudar depois.
        </motion.p>

        <div className="flex flex-col gap-[14px] w-full mb-6">
          {OPTIONS.map((option, index) => {
            const isSelected = selected.includes(option.id);
            return (
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                key={option.id}
                onClick={() => toggleOption(option.id)}
                className={`
                  w-full transition-all duration-300 rounded-[14px] p-2 pr-5
                  flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-[0.98] group relative
                  ${isSelected
                    ? 'bg-[#E2D4C8] border-2 border-[#C0B3A8]'
                    : 'bg-[#EBE0D6] border border-[#E0D3C9]'
                  }
                `}
              >
                <div className="w-[80px] h-[80px] rounded-[10px] overflow-hidden bg-[#888] shrink-0">
                  <img src={option.image} alt={option.label} className="w-full h-full object-cover" />
                </div>

                <span className="text-black font-bold text-[1.05rem] flex-1 text-center px-3 leading-tight">
                  {option.label}
                </span>

                <div className={`
                  w-[26px] h-[26px] rounded-[6px] border-2 flex items-center justify-center transition-colors shrink-0 ml-1
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
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={onNext}
          disabled={selected.length === 0}
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
