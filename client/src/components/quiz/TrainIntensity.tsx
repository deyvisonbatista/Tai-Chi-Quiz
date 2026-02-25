import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import trainingImg from "@assets/lg-61GrN-design-sem-nome-2026-02-12t172323379_1772047114623.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
  selectedIntensity?: string;
}

export default function TrainIntensity({ onNext, onBack, selectedIntensity }: Props) {
  const label = selectedIntensity || "Leve e tranquila";

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
          className="text-[2rem] font-bold text-black mb-6 text-center leading-tight tracking-tight mt-4"
        >
          Ótimo, a <span className="text-[#DE77A5]">intensidade</span> do seu treino será:
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full bg-[#4A4E58] rounded-[14px] py-4 px-6 mb-8 shadow-sm flex items-center justify-center gap-2"
        >
          <span className="text-xl">😌</span>
          <span className="text-white font-bold text-[1.2rem]">
            {label}
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full rounded-[2rem] rounded-bl-none overflow-hidden mb-12 shadow-sm bg-[#EBE0D6]"
        >
          <img src={trainingImg} alt="Mulher praticando Tai Chi em parque" className="w-full h-auto object-cover aspect-[4/3] mix-blend-multiply" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={onNext}
          className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4.5 rounded-[14px] shadow-md transition-colors active:scale-[0.98]"
        >
          Continuar
        </motion.button>
      </main>
    </div>
  );
}
