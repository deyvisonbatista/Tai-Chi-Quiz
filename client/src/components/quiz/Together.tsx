import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import togetherImg from "@assets/lg-pwSns-design-sem-nome-86_1772044914381.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Together({ onNext, onBack }: Props) {
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
          className="w-full rounded-[16px] overflow-hidden mb-8 shadow-sm"
        >
          <img src={togetherImg} alt="Mulheres abraçadas no pôr do sol" className="w-full h-auto object-cover aspect-[4/3]" />
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[2rem] font-bold text-black mb-5 text-center leading-[1.15] tracking-tight px-2"
        >
          Vamos <span className="text-[#DE77A5]">caminhar juntas</span> a partir daqui!
        </motion.h1>

        {/* Info Text */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#222] text-[1.1rem] text-center leading-relaxed font-medium mb-10 px-2"
        >
          Independente de qual seja seu ponto de partida, estamos aqui para apoiá-la.
        </motion.p>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => {
            console.log("Proceed to next stage...");
            onNext();
          }}
          className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-colors active:scale-[0.98]"
        >
          Continuar
        </motion.button>
      </main>
    </div>
  );
}
