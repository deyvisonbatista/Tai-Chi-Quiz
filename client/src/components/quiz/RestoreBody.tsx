import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import restoreImg from "@assets/lg-bg3Q2-screenshot-5_1772047067506.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const BULLETS = [
  { text: "nas costas, no pescoço e nas articulações.", bold: "Alivia tensões", bg: "bg-[#E6F2FF]", dot: "bg-[#0066FF]" },
  { text: "sem forçar o corpo", bold: "Devolve mobilidade e flexibilidade", bg: "bg-[#FFEBEB]", dot: "bg-[#FF3333]" },
  { text: "com movimentos suaves e controlados", bold: "Fortalece o corpo", bg: "bg-[#F5F5F5]", dot: "bg-[#CCCCCC]" },
  { text: "e reduz estresse e ansiedade", bold: "Acalma o sistema nervoso", bg: "bg-[#E6FFE6]", dot: "bg-[#00CC00]" },
  { text: "sem dietas extremas ou treinos pesados.", bold: "Estimula a queima de gordura", bg: "bg-[#FFFFCC]", dot: "bg-[#FFCC00]" }
];

export default function RestoreBody({ onNext, onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-28">
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
          <img src={restoreImg} alt="Mulher fazendo Tai Chi com mapa de energia corporal" className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/9]" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[1.8rem] font-bold text-black mb-8 text-center leading-tight tracking-tight px-2"
        >
          O Tai Chi restaura seu corpo com <span className="text-[#DE77A5]">agilidade</span> e <span className="text-[#DE77A5]">precisão.</span>
        </motion.h1>

        <div className="flex flex-col gap-3 w-full">
          {BULLETS.map((bullet, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              key={index}
              className={`w-full rounded-[14px] p-4 flex items-start gap-3 shadow-sm ${bullet.bg}`}
            >
              <div className={`w-4 h-4 rounded-full mt-1 shrink-0 shadow-sm border border-black/10 ${bullet.dot}`}></div>
              <p className="text-[#333] text-[1.05rem] leading-snug">
                <strong className="text-black font-bold">{bullet.bold}</strong> {bullet.text}
              </p>
            </motion.div>
          ))}
        </div>

      </main>

      {/* Fixed bottom button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="fixed bottom-0 left-0 right-0 w-full flex justify-center bg-gradient-to-t from-[#FDF6ED] via-[#FDF6ED] to-transparent pt-8 pb-6 px-6 z-50 pointer-events-none"
      >
        <div className="w-full max-w-[500px] pointer-events-auto">
          <button
            onClick={onNext}
            className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-lg transition-colors active:scale-[0.98]"
          >
            Continuar
          </button>
        </div>
      </motion.div>
    </div>
  );
}
