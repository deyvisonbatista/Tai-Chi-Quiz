import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onSelect: (value: number) => void;
  heightCm?: number;
}

function getImcCategory(imc: number): { label: string; color: string; dot: string } {
  if (imc < 18.5) return { label: "Abaixo do peso", color: "text-[#1976D2]", dot: "bg-[#1976D2]" };
  if (imc < 25) return { label: "Peso normal", color: "text-[#388E3C]", dot: "bg-[#388E3C]" };
  if (imc < 30) return { label: "Sobrepeso", color: "text-[#F57C00]", dot: "bg-[#F57C00]" };
  return { label: "Obesidade", color: "text-[#D32F2F]", dot: "bg-[#D32F2F]" };
}

export default function WeightInput({ onNext, onBack, onSelect, heightCm }: Props) {
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [weight, setWeight] = useState(70);

  const weightKg = unit === "kg" ? weight : Math.round(weight * 0.453592);
  const heightM = (heightCm || 165) / 100;
  const imc = weightKg / (heightM * heightM);
  const imcCategory = getImcCategory(imc);

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
            initial={{ width: "92%" }}
            animate={{ width: "94%" }}
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
          Qual é o seu <span className="text-[#DE77A5]">peso atual?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[#555] text-[1rem] text-center mb-5"
        >
          Digite abaixo:
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
          Próximo passo
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full bg-[#FFE8E8] rounded-[14px] p-5 shadow-sm"
        >
          <p className="text-center mb-1">
            <span className={`text-lg ${imcCategory.dot === "bg-[#D32F2F]" ? "" : ""}`}>
              <span className={`inline-block w-3 h-3 rounded-full ${imcCategory.dot} mr-2`}></span>
            </span>
            <span className="font-bold text-black">Seu IMC é:</span>
          </p>
          <p className={`text-center text-[2rem] font-extrabold ${imcCategory.color} mb-1`}>
            {imc.toFixed(2)}
          </p>
          <p className={`text-center font-bold text-[1.1rem] ${imcCategory.color} mb-3`}>
            {imcCategory.label}
          </p>
          <p className="text-[#555] text-[0.95rem] text-center leading-relaxed mb-3">
            Isso significa que vamos focar em <strong>queima de gordura</strong> e <strong>fortalecimento do corpo</strong> com segurança.
          </p>
          <p className="text-[#555] text-[0.95rem] text-center leading-relaxed">
            O <strong>Tai Chi</strong> acelera o metabolismo, aumenta seu gasto energético e fortalece músculos e articulações com treinos curtos e leves, sem sofrimento.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
