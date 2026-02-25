import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function LoadingAnalysis({ onNext, onBack }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const interval = 50;
    const step = 100 / (duration / interval);
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => onNext(), 400);
          return 100;
        }
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [onNext]);

  const displayPct = Math.round(progress);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-screen bg-[#8B8680] flex flex-col items-center justify-center overflow-x-hidden font-sans relative">
      <div className="absolute top-0 left-0 w-full pt-8 px-6 z-20">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-white/70" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-[18px] p-6 shadow-xl flex items-center gap-5 max-w-[340px] w-[90%]"
      >
        <div className="relative shrink-0 w-[70px] h-[70px]">
          <svg className="w-[70px] h-[70px] -rotate-90" viewBox="0 0 70 70">
            <circle cx="35" cy="35" r={radius} fill="none" stroke="#E8E8E8" strokeWidth="5" />
            <circle
              cx="35"
              cy="35"
              r={radius}
              fill="none"
              stroke="#333"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-[stroke-dashoffset] duration-100 ease-linear"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[0.8rem] font-bold text-black">{displayPct}%</span>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-black font-bold text-[1.15rem] leading-tight mb-1">
            Analisando suas respostas...
          </h2>
          <p className="text-[#777] text-[0.9rem] leading-snug">
            Desenhando sua jornada no Tai Chi.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
