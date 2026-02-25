import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onSelect: (value: number) => void;
}

export default function HeightInput({ onNext, onBack, onSelect }: Props) {
  const [unit, setUnit] = useState<"cm" | "pol">("cm");
  const [height, setHeight] = useState(165);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const minVal = unit === "cm" ? 130 : 51;
  const maxVal = unit === "cm" ? 220 : 87;

  const handleDrag = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const val = Math.round(minVal + ratio * (maxVal - minVal));
    setHeight(val);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleDrag(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) handleDrag(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const displayValue = unit === "cm" ? height : height;
  const heightInCm = unit === "cm" ? height : Math.round(height * 2.54);
  const ratio = (height - minVal) / (maxVal - minVal);

  const toggleUnit = (newUnit: "cm" | "pol") => {
    if (newUnit === unit) return;
    if (newUnit === "pol") {
      setHeight(Math.round(height / 2.54));
    } else {
      setHeight(Math.round(height * 2.54));
    }
    setUnit(newUnit);
  };

  const tickCount = 41;
  const ticks = Array.from({ length: tickCount }, (_, i) => i);

  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      <div className="w-full pt-8 pb-4 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      <div className="w-full max-w-[500px] px-6 mb-8 mt-2">
        <div className="w-full h-[6px] bg-[#EBE0D6] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "90%" }}
            animate={{ width: "92%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full bg-[#6C7686] rounded-full"
          ></motion.div>
        </div>
      </div>

      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.8rem] font-bold text-black mb-6 text-center leading-tight tracking-tight"
        >
          Qual é a sua <span className="text-[#DE77A5]">altura?</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex bg-[#EBE0D6] rounded-full p-1 mb-8"
        >
          <button
            onClick={() => toggleUnit("cm")}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${unit === "cm" ? "bg-[#6C7076] text-white shadow" : "text-[#666]"}`}
          >
            cm
          </button>
          <button
            onClick={() => toggleUnit("pol")}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${unit === "pol" ? "bg-[#6C7076] text-white shadow" : "text-[#666]"}`}
          >
            pol
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-baseline justify-center mb-6"
        >
          <span className="text-[4rem] font-extrabold text-black leading-none">{displayValue}</span>
          <span className="text-[1.4rem] font-bold text-black ml-1">{unit}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full mb-2 relative"
          ref={sliderRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          style={{ touchAction: "none" }}
        >
          <div className="w-full h-16 flex items-end justify-between px-0 relative">
            {ticks.map((i) => {
              const isMajor = i % 10 === 0;
              const isMid = i % 5 === 0 && !isMajor;
              return (
                <div
                  key={i}
                  className={`bg-[#999] rounded-full ${isMajor ? "w-[2px] h-10" : isMid ? "w-[1.5px] h-6" : "w-[1px] h-4"}`}
                ></div>
              );
            })}
          </div>

          <div className="w-full flex justify-between px-0 mt-1">
            <span className="text-[#666] font-semibold text-sm">{minVal}</span>
            <span className="text-[#666] font-semibold text-sm">{Math.round((minVal + maxVal) / 2)}</span>
            <span className="text-[#666] font-semibold text-sm">{maxVal}</span>
          </div>

          <div
            className="absolute bottom-[28px] w-0 h-0 transition-none pointer-events-none"
            style={{ left: `${ratio * 100}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-[2px] h-14 bg-[#4A4E58] mx-auto -mt-2"></div>
            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#4A4E58] mx-auto"></div>
          </div>
        </motion.div>

        <p className="text-[#999] text-sm mb-8 mt-2">Arraste para ajustar</p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => {
            onSelect(heightInCm);
            onNext();
          }}
          className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-colors active:scale-[0.98] mb-6"
        >
          Próximo passo
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full bg-[#F0EDE8] rounded-[14px] p-5 shadow-sm"
        >
          <p className="font-bold text-black text-center mb-2">
            <span className="text-lg mr-1">☝️</span> Calculando seu IMC...
          </p>
          <p className="text-[#555] text-[0.95rem] text-center leading-relaxed">
            Sua altura nos ajuda a adaptar os movimentos à estrutura e amplitude do seu corpo.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
