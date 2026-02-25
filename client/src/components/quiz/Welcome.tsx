import { motion } from "framer-motion";
import logoImg from "@assets/logo_1772043688813.png";
import welcomeImg from "@assets/img2_1772044070527.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Welcome({ onNext }: Props) {
  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      {/* Header / Logo */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full pt-10 pb-6 flex justify-center z-20"
      >
        <img src={logoImg} alt="HARNY Logo" className="h-10 object-contain" />
      </motion.header>

      {/* Main Content Container */}
      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full rounded-[1.25rem] overflow-hidden mb-8 shadow-sm"
        >
          <img src={welcomeImg} alt="Mulheres praticando Tai chi" className="w-full h-auto object-cover" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[2.5rem] font-extrabold text-black mb-5 tracking-tight"
        >
          Bem vinda
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg font-bold text-black mb-6 text-center"
        >
          A nossa academia de <span className="text-[#6B7686]">Tai chi</span> 💖
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[1.05rem] leading-[1.6] text-[#222] text-center mb-10 px-1"
        >
          Aqui você vai <strong className="font-bold">fortalecer o corpo</strong> por completo, <strong className="font-bold">aliviar dores</strong> e <strong className="font-bold">emagrecer de forma leve</strong>, sentindo novamente um corpo jovem, firme e cheio <strong className="font-bold">energia.</strong>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={onNext}
          className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-colors active:scale-[0.98]"
        >
          Continuar
        </motion.button>
      </main>
    </div>
  );
}
