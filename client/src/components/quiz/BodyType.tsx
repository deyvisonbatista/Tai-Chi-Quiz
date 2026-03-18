import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import imgSeco from "@assets/seco_1772044588064.png";
import imgEquilibrado from "@assets/equilibrado_1772044591899.png";
import imgCurvilineo from "@assets/Curvilineo_1772044594308.png";
import imgVolumoso from "@assets/volumoso_1772044596747.png";

const BODY_TYPES = [
  { id: "seco", label: "Seco", image: imgSeco },
  { id: "equilibrado", label: "Equilibrado", image: imgEquilibrado },
  { id: "curvilineo", label: "Curvilineo", image: imgCurvilineo },
  { id: "volumoso", label: "Volumoso", image: imgVolumoso }
];

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function BodyType({ onNext, onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      {/* Header / Logo */}
      <div className="w-full pt-8 pb-6 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-[500px] px-6 mb-8">
        <div className="w-full h-[6px] bg-[#EBE0D6] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "40%" }}
            animate={{ width: "55%" }}
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
          className="text-[1.8rem] font-bold text-black mb-8 text-center leading-tight tracking-tight px-4"
        >
          Como você <span className="text-[#DE77A5]">descreveria</span> seu corpo?
        </motion.h1>

        {/* 2x2 Grid for Body Types */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {BODY_TYPES.map((type, index) => (
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
              key={type.id}
              onClick={() => {
                setTimeout(() => onNext(), 200);
              }}
              className="bg-[#EBE0D6] hover:bg-[#E2D4C8] border border-[#E0D3C9] transition-all duration-300 rounded-[14px] overflow-hidden flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-[0.98] group relative"
            >
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#D3DDE0]">
                <img src={type.image} alt={type.label} className="w-full h-full object-cover object-center" />
              </div>
              
              <div className="p-4 flex items-center justify-between w-full bg-[#EBE0D6] group-hover:bg-[#E2D4C8] transition-colors">
                <span className="text-black font-bold text-[1.1rem]">
                  {type.label}
                </span>
                <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform absolute right-3 bottom-3 z-10">
                  <ChevronRight className="w-4 h-4 text-[#888]" strokeWidth={3} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

      </main>
    </div>
  );
}
