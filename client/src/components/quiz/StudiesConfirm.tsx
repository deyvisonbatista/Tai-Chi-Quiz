import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import studiesImg from "@assets/lg-t7RlL-inserir-um-titulo-1_1772046442213.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function StudiesConfirm({ onNext, onBack }: Props) {
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
          className="w-full bg-[#1F8F45] rounded-t-xl py-3 px-6 shadow-sm"
        >
          <h2 className="text-white text-center font-bold text-[1.2rem] tracking-wide">
            ESTUDOS CONFIRMAM:
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full bg-[#F5F5F5] rounded-b-xl py-6 px-4 mb-6 shadow-sm flex flex-col items-center"
        >
          <h1 className="text-[1.65rem] font-bold text-black mb-4 text-center leading-tight tracking-tight px-2">
            O <span className="text-[#1F8F45]">Tai Chi</span> reprograma o corpo!
          </h1>
          
          <p className="text-[#444] text-[1.05rem] text-center mb-4">
            Depois dos 40 anos não é mais falta de esforço.
          </p>

          <p className="text-black font-bold text-[1.1rem] text-center px-2">
            É só seu corpo pedindo diferente tipo de cuidado. <span className="text-xl">👇</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full rounded-[14px] overflow-hidden shadow-sm"
        >
          <img src={studiesImg} alt="Notícia sobre Tai Chi no G1" className="w-full h-auto object-cover" />
        </motion.div>
      </main>

      {/* Fixed bottom button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 w-full flex justify-center bg-gradient-to-t from-[#FDF6ED] via-[#FDF6ED] to-transparent pt-8 pb-6 px-6 z-50 pointer-events-none"
      >
        <div className="w-full max-w-[500px] pointer-events-auto">
          <button
            onClick={() => {
              console.log("Proceed to next stage...");
              onNext();
            }}
            className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-lg transition-colors active:scale-[0.98]"
          >
            Continuar
          </button>
        </div>
      </motion.div>
    </div>
  );
}
