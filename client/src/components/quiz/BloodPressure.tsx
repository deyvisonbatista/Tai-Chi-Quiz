import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import taichiImg from "@assets/lg-NZS8W-design-sem-nome-57_1772051613902.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function BloodPressure({ onNext, onBack }: Props) {
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-[14px] overflow-hidden mb-8 shadow-sm"
        >
          <img src={taichiImg} alt="Mulher praticando Tai Chi" className="w-full h-auto object-cover aspect-[16/10]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[1.8rem] font-bold text-black mb-6 text-center leading-tight tracking-tight px-2"
        >
          <span className="text-[#DE77A5] italic">Tai Chi:</span> comprovado para equilibrar a pressão arterial
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#444] text-[1.05rem] text-center leading-relaxed mb-10 px-2"
        >
          O Tai Chi baixa a pressão arterial porque os movimentos lentos e a respiração profunda relaxam o corpo, reduzem adrenalina, melhoram a circulação e fazem o coração trabalhar de forma mais leve, por isso a pressão diminui naturalmente.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={onNext}
          className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-colors active:scale-[0.98]"
        >
          Continuar
        </motion.button>
      </main>
    </div>
  );
}
