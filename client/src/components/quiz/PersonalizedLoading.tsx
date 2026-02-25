import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logoImg from "@assets/logo_1772043688813.png";

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

      </main>
    </div>
  );
}
