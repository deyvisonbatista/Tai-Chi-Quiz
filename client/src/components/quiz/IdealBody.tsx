import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

import imgTonificado from "@assets/tonificado_1772048845753.png";
import imgCurvilinea from "@assets/curvilinea_1772048897499.png";
import imgAtletico from "@assets/atletico_1772048899659.png";
import imgMagra from "@assets/magra_1772048901738.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const BODIES = [
  { label: "Tonificado", image: imgTonificado },
  { label: "Curvilínea", image: imgCurvilinea },
  { label: "Atlético", image: imgAtletico },
  { label: "Magra", image: imgMagra }
];

export default function IdealBody({ onNext, onBack }: Props) {
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
            initial={{ width: "96%" }}
            animate={{ width: "98%" }}
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
          className="text-[1.8rem] font-bold text-black mb-8 text-center leading-tight tracking-tight"
        >
          Qual é o seu <span className="text-[#DE77A5]">corpo ideal?</span>
        </motion.h1>

        <div className="grid grid-cols-2 gap-4 w-full">
          {BODIES.map((body, index) => (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              key={body.label}
              onClick={() => setTimeout(() => onNext(), 200)}
              className="bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9] rounded-[14px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-[0.97] transition-all duration-300 flex flex-col items-center group"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#F5EDE3] flex items-center justify-center p-2">
                <img src={body.image} alt={body.label} className="w-full h-full object-cover rounded-[8px]" />
              </div>
              <div className="w-full flex items-center justify-center gap-2 py-3 px-3">
                <span className="text-black font-bold text-[1.05rem]">{body.label}</span>
                <div className="w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
                  <ChevronRight className="w-3.5 h-3.5 text-[#888]" strokeWidth={3} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </div>
  );
}
