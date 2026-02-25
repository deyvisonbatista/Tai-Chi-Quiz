import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import notCommonImg from "@assets/lg-YYTso-design-sem-nome-21-1_1772044460469.jpg";

export default function NotCommon() {
  const [, setLocation] = useLocation();

  const benefits = [
    { text: "Emagrecer de um jeito leve e sem sofrimento", bgColor: "bg-[#DDEBFA]" },
    { text: "Ganhar força e definir o corpo", bgColor: "bg-[#F4F9F5]" },
    { text: "Eliminar dores no corpo", bgColor: "bg-[#FDF9D9]" },
    { text: "Diminuir o estresse e ansiedade", bgColor: "bg-[#FDE2E8]" },
  ];

  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      {/* Header / Logo */}
      <div className="w-full pt-8 pb-4 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={() => setLocation("/knowledge")} className="p-2 -ml-2 active:scale-95 transition-transform">
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
          <img src={notCommonImg} alt="Mulher praticando Tai chi" className="w-full h-auto object-cover aspect-[4/3] sm:aspect-video" />
        </motion.div>

        {/* Gradient Info Box */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full bg-gradient-to-b from-[#FCE1E8] to-[#FCF4EA] rounded-[18px] p-6 mb-4 shadow-sm"
        >
          <h1 className="text-[1.75rem] font-extrabold text-black mb-2 text-center leading-tight tracking-tight">
            Isto <span className="text-[#DE77A5]">não</span> é um treino comum!
          </h1>
          <h2 className="text-black text-[1.1rem] font-bold text-center mb-4">
            É como meditar em movimento.
          </h2>
          <p className="text-[#444] text-[0.95rem] text-center leading-relaxed font-medium">
            O <strong className="font-bold text-black">Tai Chi</strong> é uma prática chinesa milenar que estimula o corpo de forma inteligente, ideal para mulheres acima dos 40 anos que desejam:
          </p>
        </motion.div>

        {/* Benefits List */}
        <div className="w-full flex flex-col gap-3 mb-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              key={index}
              className={`flex items-center gap-4 py-4 px-5 rounded-[14px] shadow-sm ${benefit.bgColor}`}
            >
              <div className="w-[24px] h-[24px] shrink-0 bg-[#00C853] rounded-[6px] flex items-center justify-center shadow-sm">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-black font-bold text-[1rem] leading-tight">{benefit.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => setLocation("/body-type")}
          className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-colors active:scale-[0.98]"
        >
          Continuar
        </motion.button>
      </main>
    </div>
  );
}
