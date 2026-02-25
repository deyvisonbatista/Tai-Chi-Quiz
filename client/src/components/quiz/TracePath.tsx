import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import womanImg from "@assets/lg-P8pHA-design-sem-nome-2026-02-12t173434234_1772047420557.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function TracePath({ onNext, onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      <div className="w-full pt-8 pb-4 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6 mt-4">
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[2rem] font-bold text-black mb-6 text-center leading-tight tracking-tight"
        >
          Vamos traçar o <span className="text-[#DE77A5]">caminho</span> até o seu objetivo?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#333] text-[1.1rem] text-center mb-8 px-2"
        >
          Para personalizar seu treino e liberar recursos do app, precisamos conhecer você melhor.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full rounded-[14px] overflow-hidden mb-8 shadow-sm bg-[#D5D7D8] relative"
        >
          <img src={womanImg} alt="Mulher com ícones de saúde e treino" className="w-full h-auto object-cover aspect-[4/3] mix-blend-multiply" />
          
          {/* Subtle gradient overlay at the bottom to blend with the button if needed */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#D5D7D8] to-transparent"></div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => {
            console.log("Next step...");
            onNext();
          }}
          className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4.5 rounded-[14px] shadow-md transition-colors active:scale-[0.98]"
        >
          Vamos lá
        </motion.button>
      </main>
    </div>
  );
}
