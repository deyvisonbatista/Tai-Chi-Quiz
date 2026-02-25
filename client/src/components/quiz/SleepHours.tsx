import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onSelect: (value: string) => void;
}

const OPTIONS = [
  { text: "Menos de 5 horas", emoji: "🙄" },
  { text: "5 - 6 horas", emoji: "🥱" },
  { text: "7 - 8 horas", emoji: "🌙" },
  { text: "Mais de 8 horas", emoji: "😴" }
];

export default function SleepHours({ onNext, onBack, onSelect }: Props) {
  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      <div className="w-full pt-8 pb-6 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      <div className="w-full max-w-[500px] px-6 mb-12 mt-2">
        <div className="w-full h-[6px] bg-[#EBE0D6] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "97%" }}
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
          className="text-[1.8rem] font-bold text-black mb-10 text-center leading-tight tracking-tight px-4"
        >
          Quantas horas de <span className="text-[#DE77A5]">sono</span> você costuma dormir?
        </motion.h1>

        <div className="flex flex-col gap-[14px] w-full">
          {OPTIONS.map((option, index) => (
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
              key={index}
              onClick={() => {
                onSelect(option.text);
                setTimeout(() => onNext(), 200);
              }}
              className="w-full bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9] transition-all duration-300 rounded-[14px] py-[22px] px-5 flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] active:scale-[0.98] group"
            >
              <div className="w-10 flex justify-center shrink-0">
                <span className="text-[1.8rem]">{option.emoji}</span>
              </div>
              <span className="text-black font-bold text-[1.15rem] text-center flex-1 pr-4">
                {option.text}
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
