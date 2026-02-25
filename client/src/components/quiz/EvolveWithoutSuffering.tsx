import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import chartImg from "@assets/lg-BA0I5-lg-oawjj-grafico_1772047390521.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function EvolveWithoutSuffering({ onNext, onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-28">
      <div className="w-full pt-8 pb-4 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6 mt-2">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.85rem] font-bold text-black mb-8 text-center leading-tight tracking-tight px-4"
        >
          Você não precisa <span className="text-[#D32F2F]">sofrer</span> para <span className="text-[#388E3C]">evoluir.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full rounded-[14px] overflow-hidden mb-6 shadow-sm border border-[#E0D3C9] bg-white"
        >
          <img src={chartImg} alt="Gráfico de desempenho e intensidade" className="w-full h-auto object-contain p-2" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#333] text-[1.05rem] text-center mb-8 px-2 leading-relaxed"
        >
          Embora treinos intensos possam causar <strong>esgotamento</strong> e <strong>estresse</strong>, o <span className="text-[#DE77A5] font-semibold">Tai Chi</span> funciona acalmando o corpo e a mente, <strong>sem esgotá-los.</strong>
        </motion.p>

        <div className="flex flex-col gap-3 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-full bg-[#E6F0FF] rounded-[14px] p-4 flex items-start gap-3 shadow-sm"
          >
            <div className="w-5 flex justify-center shrink-0 mt-[2px]">
              <span className="text-xl">🔵</span>
            </div>
            <p className="text-[#003399] font-bold text-[1.05rem] leading-snug">
              Perfeito para quem não gosta de sofrer desgastando o corpo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-full bg-[#FFF9C4] rounded-[14px] p-4 flex items-start gap-3 shadow-sm"
          >
            <div className="w-5 flex justify-center shrink-0 mt-[2px]">
              <span className="text-xl text-[#D32F2F]">⛔</span>
            </div>
            <p className="text-[#8B5E34] font-bold text-[1.05rem] leading-snug">
              Não precisa de equipamentos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="w-full bg-[#E8F5E9] rounded-[14px] p-4 flex items-start gap-3 shadow-sm"
          >
            <div className="w-5 flex justify-center shrink-0 mt-[2px]">
              <span className="text-xl text-[#2E7D32]">✔️</span>
            </div>
            <p className="text-[#1B5E20] font-bold text-[1.05rem] leading-snug">
              Apoia a recuperação, não o excesso de treinamento
            </p>
          </motion.div>
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
