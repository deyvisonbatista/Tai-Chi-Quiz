import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function ReadyStart({ onNext, onBack }: Props) {
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
            initial={{ width: "99%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full bg-[#6C7686] rounded-full"
          ></motion.div>
        </div>
      </div>

      <main className="w-full max-w-[500px] flex flex-col items-center justify-center z-10 px-6 flex-1 mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.8rem] font-bold text-black mb-10 text-center leading-tight tracking-tight"
        >
          Está pronta para <span className="text-[#DE77A5]">começar</span> esse ano <span className="text-[#DE77A5]">diferente?</span>
        </motion.h1>

        <div className="flex gap-4 w-full">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onClick={onNext}
            className="flex-1 bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9] rounded-[14px] py-5 px-4 flex items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] active:scale-[0.97] transition-all"
          >
            <span className="text-[1.8rem]">🚫</span>
            <span className="text-black font-bold text-[1.15rem]">Não</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            onClick={onNext}
            className="flex-1 bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9] rounded-[14px] py-5 px-4 flex items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] active:scale-[0.97] transition-all"
          >
            <span className="text-[1.8rem]">✅</span>
            <span className="text-black font-bold text-[1.15rem]">Sim</span>
          </motion.button>
        </div>
      </main>
    </div>
  );
}
