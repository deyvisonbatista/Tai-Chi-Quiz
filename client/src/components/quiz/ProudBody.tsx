import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const OPTIONS = [
  "Menos de um ano atrás",
  "1 - 3 anos atrás",
  "Mais de 3 anos atrás",
  "Faz mais tempo do que eu gostaria"
];

export default function ProudBody({ onNext, onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      <div className="w-full pt-8 pb-6 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      <div className="w-full max-w-[500px] px-6 mb-12 mt-4">
        <div className="w-full h-[6px] bg-[#EBE0D6] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "20%" }}
            animate={{ width: "35%" }}
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
          className="text-[1.8rem] font-bold text-black mb-10 text-center leading-tight tracking-tight"
        >
          Quando foi a última vez que você sentiu <span className="text-[#DE77A5]">orgulho</span> do seu corpo?
        </motion.h1>

        <div className="flex flex-col gap-[14px] w-full">
          {OPTIONS.map((option, index) => (
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
              key={index}
              onClick={() => setTimeout(() => onNext(), 200)}
              className="w-full bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9] transition-all duration-300 rounded-[14px] py-[18px] px-6 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] active:scale-[0.98] group"
            >
              <span className="text-black font-bold text-[1.1rem] text-left pr-4">
                {option}
              </span>
              <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
                <ChevronRight className="w-4 h-4 text-[#888]" strokeWidth={3} />
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </div>
  );
}
