import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ChevronRight, ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import imgWeight from "@assets/md-w2R6W-45a35e98dc2339aba337e220e54419547cc3664d6c8e34f4e6d06_1772044164090.png";
import imgLongevity from "@assets/md-ipJcf-e3132fdb9119603d575f532b0d550816d6dbaba60e0ab7caf4f17_1772044164088.png";
import imgStrength from "@assets/md-M7KNx-1c35aef8ce78a4434819fff18ff4adce53a22a68d11e60c9b3560_1772044164089.png";
import imgPain from "@assets/md-qyhBO-e361651a3250500dad52205e6b3079c8e4672f57b1bbf694224e8_1772044164089.png";

const GOALS = [
  { id: "weight", label: "Perder peso", image: imgWeight },
  { id: "longevity", label: "Manter a longevidade", image: imgLongevity },
  { id: "strength", label: "Desenvolver força e músculos", image: imgStrength },
  { id: "pain", label: "Aliviar dores no corpo", image: imgPain }
];

export default function Goals() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      {/* Header / Logo */}
      <div className="w-full pt-8 pb-6 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={() => setLocation("/welcome")} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-[500px] px-6 mb-8">
        <div className="w-full h-[6px] bg-[#EBE0D6] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "10%" }}
            animate={{ width: "25%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full bg-[#6C7686] rounded-full"
          ></motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.75rem] font-bold text-black mb-8 text-center leading-[1.25]"
        >
          Qual dessas situações é mais <span className="text-[#DE77A5]">importante</span> para você agora?
        </motion.h1>

        <div className="flex flex-col gap-[14px] w-full">
          {GOALS.map((goal, index) => (
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
              key={goal.id}
              onClick={() => {
                setTimeout(() => setLocation("/solution"), 200);
              }}
              className="w-full bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9] transition-all duration-300 rounded-[14px] flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-[0.98] group p-1"
            >
              <img src={goal.image} alt={goal.label} className="w-[86px] h-[86px] rounded-[10px] object-cover" />
              
              <div className="flex-1 flex justify-center px-3">
                <span className="text-black font-bold text-[1.05rem] leading-tight text-center">
                  {goal.label}
                </span>
              </div>

              <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform mr-4 shrink-0">
                <ChevronRight className="w-[18px] h-[18px] text-[#888]" strokeWidth={3} />
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </div>
  );
}
