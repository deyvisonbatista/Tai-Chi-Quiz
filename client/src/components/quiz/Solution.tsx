import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import solutionImg from "@assets/lg-y5M6T-design-sem-nome-83_1772044380329.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Solution({ onNext, onBack }: Props) {
  const badSymptoms = [
    "A gordura acumula",
    "Os movimentos ficam limitados",
    "A energia diminui",
    "As dores aparecem",
    "O cansaço vira constante"
  ];

  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      {/* Header / Logo */}
      <div className="w-full pt-8 pb-4 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      {/* Main Content Container */}
      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6">
        
        {/* Top Image */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-[14px] overflow-hidden mb-6 shadow-sm"
        >
          <img src={solutionImg} alt="Mulher alongando" className="w-full h-auto object-cover aspect-[4/3] sm:aspect-video" />
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[1.8rem] font-bold text-black mb-6 text-center leading-tight tracking-tight"
        >
          A <span className="text-[#DE77A5]">solução certa</span> está aqui.
        </motion.h1>

        {/* Info Box */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full bg-[#F5E6B4] rounded-[18px] p-6 mb-6 shadow-sm relative overflow-hidden"
        >
          <h2 className="text-[#654321] text-[1.15rem] font-bold text-center mb-4 leading-snug">
            Depois dos 40, o corpo da mulher muda, e isso é natural.
          </h2>
          <p className="text-[#7A5B35] text-[0.95rem] text-center leading-relaxed font-medium mb-4">
            Os hormônios entram em transformação, o metabolismo desacelera e o corpo fica mais rígido, respondendo cada vez menos a <strong className="font-bold">treinos comuns</strong> e esforço excessivo.
          </p>
          <h3 className="text-[#5C3D1F] text-[1.1rem] font-extrabold text-center">
            E quando isso acontece:
          </h3>
          
          {/* Decorative pointer icon could be added here if needed */}
          <div className="absolute top-[28px] left-[16px] text-xl">👉</div>
        </motion.div>

        {/* Symptoms List */}
        <div className="w-full bg-[#F4F4F6] rounded-[18px] p-2 mb-8 shadow-sm flex flex-col gap-1">
          {badSymptoms.map((symptom, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
              key={index}
              className="flex items-center gap-4 py-3 px-4 rounded-xl"
            >
              <div className="w-[28px] h-[28px] shrink-0 bg-gradient-to-br from-[#E64D4D] to-[#C92A2A] rounded-full flex items-center justify-center shadow-sm">
                <div className="w-[12px] h-[12px] relative flex items-center justify-center">
                  <span className="absolute w-[14px] h-[3px] bg-white rounded-full rotate-45"></span>
                  <span className="absolute w-[14px] h-[3px] bg-white rounded-full -rotate-45"></span>
                </div>
              </div>
              <span className="text-black font-bold text-[1.05rem]">{symptom}</span>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={onNext}
          className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4.5 rounded-[14px] shadow-md transition-colors active:scale-[0.98]"
        >
          Quero cuidar do meu corpo
        </motion.button>
      </main>
    </div>
  );
}
