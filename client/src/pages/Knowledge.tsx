import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

const OPTIONS = [
  "Sim, pratico com frequência.",
  "Sim, Já experimentei.",
  "Nunca pratiquei, mas tenho interesse"
];

export default function Knowledge() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      {/* Header / Logo */}
      <div className="w-full pt-8 pb-6 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={() => setLocation("/solution")} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-[500px] px-6 mb-12">
        <div className="w-full h-[6px] bg-[#EBE0D6] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "25%" }}
            animate={{ width: "40%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full bg-[#6C7686] rounded-full"
          ></motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6 mt-10">
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[2rem] font-bold text-black mb-10 text-center leading-tight tracking-tight"
        >
          Você conhece o <span className="text-[#DE77A5]">Tai chi?</span>
        </motion.h1>

        <div className="flex flex-col gap-4 w-full">
          {OPTIONS.map((option, index) => (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
              key={index}
              onClick={() => {
                setTimeout(() => setLocation("/not-common"), 200);
              }}
              className="w-full bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9] transition-all duration-300 rounded-[14px] py-[22px] px-6 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] active:scale-[0.98] group"
            >
              <span className="text-black font-bold text-[1.05rem] text-center">
                {option}
              </span>
            </motion.button>
          ))}
        </div>

      </main>
    </div>
  );
}
