import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onSelect: (value: number) => void;
  currentWeightKg?: number;
}

export default function TargetWeight({ onNext, onBack, onSelect, currentWeightKg }: Props) {
  const currentW = currentWeightKg || 70;
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [weight, setWeight] = useState(Math.round(currentW * 0.8));

  const weightKg = unit === "kg" ? weight : Math.round(weight * 0.453592);
  const diff = currentW - weightKg;
  const pct = currentW > 0 ? Math.round((diff / currentW) * 100) : 0;
  const isRealistic = pct > 0 && pct <= 25;

  const toggleUnit = (newUnit: "kg" | "lb") => {
    if (newUnit === unit) return;
    if (newUnit === "lb") {
      setWeight(Math.round(weight * 2.20462));
    } else {
      setWeight(Math.round(weight * 0.453592));
    }
    setUnit(newUnit);
  };

  const increment = () => setWeight((w) => w + 1);
  const decrement = () => setWeight((w) => Math.max(30, w - 1));

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
            initial={{ width: "94%" }}
            animate={{ width: "96%" }}
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
          className="text-[1.8rem] font-bold text-black mb-2 text-center leading-tight tracking-tight"
        >
          Em qual <strong>peso</strong> você <span className="text-[#388E3C]">quer chegar?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[#555] text-[1rem] text-center mb-5"
        >
          Digite abaixo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex bg-[#EBE0D6] rounded-full p-1 mb-8"
        >
          <button
            onClick={() => toggleUnit("kg")}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${unit === "kg" ? "bg-[#6C7076] text-white shadow" : "text-[#666]"}`}
          >
            kg
          </button>
          <button
            onClick={() => toggleUnit("lb")}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${unit === "lb" ? "bg-[#6C7076] text-white shadow" : "text-[#666]"}`}
          >
            lb
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <button
            onClick={decrement}
            className="w-12 h-12 bg-[#EBE0D6] rounded-full flex items-center justify-center text-2xl font-bold text-[#555] active:scale-95 transition-transform shadow-sm"
          >
            −
          </button>
          <div className="flex items-baseline">
            <span className="text-[4rem] font-extrabold text-black leading-none">{weight}</span>
            <span className="text-[1.4rem] font-bold text-black ml-1">{unit}</span>
          </div>
          <button
            onClick={increment}
            className="w-12 h-12 bg-[#EBE0D6] rounded-full flex items-center justify-center text-2xl font-bold text-[#555] active:scale-95 transition-transform shadow-sm"
          >
            +
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => {
            onSelect(weightKg);
            onNext();
          }}
          className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-colors active:scale-[0.98] mb-6"
        >
          Continuar
        </motion.button>

        {pct > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full bg-[#F0EDE8] rounded-[14px] p-5 shadow-sm"
          >
            <p className="font-bold text-black text-center text-[1.1rem] mb-2">
              <span className="text-lg mr-1">👍</span> META REALISTA
            </p>
            <p className="text-[#555] text-[1rem] text-center leading-relaxed">
              Menos {pct}% do seu peso atual.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
