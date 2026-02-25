import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logoImg from "@assets/logo_1772043688813.png";
import beforeAfterImg from "@assets/etapa44_1772052511414.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

interface ProgressItem {
  label: string;
  targetPercent: number;
  delay: number;
}

const PROGRESS_ITEMS: ProgressItem[] = [
  { label: "Analisando seus respostas", targetPercent: 100, delay: 0 },
  { label: "Organizando a sequência das aulas", targetPercent: 100, delay: 1.5 },
  { label: "Ajustando o treino à intensidade escolhida", targetPercent: 100, delay: 3 },
  { label: "Preparando seu plano de Tai Chi", targetPercent: 100, delay: 4.5 },
];

function AnimatedProgress({ item }: { item: ProgressItem }) {
  const [percent, setPercent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setPercent((prev) => {
          if (prev >= item.targetPercent) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return item.targetPercent;
          }
          return Math.min(prev + Math.random() * 8 + 2, item.targetPercent);
        });
      }, 120);
    }, item.delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [item.delay, item.targetPercent]);

  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#333] text-[0.95rem] font-medium leading-tight">{item.label}</span>
        <span className="text-[#888] text-[0.9rem] font-semibold ml-3 shrink-0">{Math.round(percent)}%</span>
      </div>
      <div className="w-full h-[8px] bg-[#EBE0D6] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#6C7686] rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

export default function PersonalizedLoading({ onNext, onBack }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => onNext(), 9000);
    return () => clearTimeout(timer);
  }, [onNext]);

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
          className="text-[1.5rem] font-bold text-black mb-8 text-center leading-tight tracking-tight"
        >
          Seu treino <span className="text-[#DE77A5]">personalizado</span> de <span className="text-[#DE77A5]">Tai Chi</span> está sendo feito!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full mb-8"
        >
          {PROGRESS_ITEMS.map((item, index) => (
            <AnimatedProgress key={index} item={item} />
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-[1.5rem] font-bold text-black mb-2 text-center leading-tight tracking-tight"
        >
          O corpo muda por completo. <span className="text-[#DE77A5]">Emagrecer é só o começo.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex items-center gap-1 mb-1 mt-3"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="text-[#888] text-[0.9rem] mb-6 text-center"
        >
          Nota 4,7 baseada em 42.489 avaliações
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="w-full rounded-[14px] overflow-hidden mb-6 shadow-sm border border-[#E0D3C9]"
        >
          <div className="bg-white flex items-center justify-between px-6 py-3">
            <span className="text-[#333] font-bold text-[1rem]">Antes</span>
            <span className="text-[#333] font-bold text-[0.9rem] tracking-wide">HARNA</span>
            <span className="text-[#333] font-bold text-[1rem]">Depois</span>
          </div>
          <div className="flex">
            <div className="flex-1 bg-[#f0e8df] flex items-center justify-center p-4">
              <div className="w-full aspect-[3/4] bg-[#ddd] rounded-lg flex items-center justify-center text-[#999] text-sm">
                Antes
              </div>
            </div>
            <div className="flex-1 bg-[#f0e8df] flex items-center justify-center p-4">
              <div className="w-full aspect-[3/4] bg-[#ddd] rounded-lg flex items-center justify-center text-[#999] text-sm">
                Depois
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="w-full rounded-[14px] overflow-hidden shadow-sm"
        >
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a3a2a] flex items-center justify-center py-4 px-6 gap-4 rounded-[14px]">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">😊</span>
              </div>
              <div>
                <p className="text-white font-bold text-[0.85rem] leading-tight">PRÊMIO</p>
                <p className="text-green-400 font-bold text-[0.75rem]">RA 2025</p>
              </div>
            </div>
            <div className="border-l border-[#555] pl-4">
              <p className="text-white font-bold text-[0.85rem] leading-tight">EMPRESA</p>
              <p className="text-white font-bold text-[0.75rem]">INDICADA</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
