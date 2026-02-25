import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import extendImg from "@assets/lg-ZIKL2-design-sem-nome-2026-02-12t172918237_1772046381579.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function ExtendArms({ onNext, onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      <div className="w-full pt-8 pb-4 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.8rem] font-bold text-black mb-8 text-center leading-tight tracking-tight mt-4"
        >
          Você aguenta estender os braços por <span className="text-[#DE77A5]">20 segundos?</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full rounded-[14px] overflow-hidden mb-8 shadow-sm"
        >
          <img src={extendImg} alt="Mulher estendendo os braços" className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/9]" />
        </motion.div>

        <div className="flex gap-4 w-full">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onClick={() => setTimeout(() => onNext(), 200)}
            className="flex-1 bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9] transition-all duration-300 rounded-[14px] py-4 px-2 flex items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] active:scale-[0.98]"
          >
            <div className="w-10 h-10 bg-[#E53935] rounded-[8px] flex items-center justify-center shrink-0 shadow-sm border-2 border-white/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2.5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.93 4.93l14.14 14.14" />
              </svg>
            </div>
            <span className="text-black font-bold text-[1.2rem]">Não</span>
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            onClick={() => setTimeout(() => onNext(), 200)}
            className="flex-1 bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9] transition-all duration-300 rounded-[14px] py-4 px-2 flex items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] active:scale-[0.98]"
          >
            <div className="w-10 h-10 bg-[#00C853] rounded-[8px] flex items-center justify-center shrink-0 shadow-sm border-2 border-white/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-black font-bold text-[1.2rem]">Sim</span>
          </motion.button>
        </div>
      </main>
    </div>
  );
}
