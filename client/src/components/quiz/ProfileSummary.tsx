import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";

interface Props {
  onNext: () => void;
  onBack: () => void;
  energyLevel?: string;
  sleepHours?: string;
}

function getEnergyLabel(energy?: string): string {
  if (!energy) return "Moderado";
  if (energy.includes("exausta")) return "Quase nulo";
  if (energy.includes("variam")) return "Moderado";
  if (energy.includes("ativa")) return "Alto";
  return "Moderado";
}

function getMotivationLabel(energy?: string): string {
  if (!energy) return "Alta";
  if (energy.includes("exausta")) return "Alta";
  if (energy.includes("variam")) return "Moderada";
  if (energy.includes("ativa")) return "Muito Alta";
  return "Alta";
}

export default function ProfileSummary({ onNext, onBack, energyLevel, sleepHours }: Props) {
  const energyLabel = getEnergyLabel(energyLevel);
  const motivationLabel = getMotivationLabel(energyLevel);
  const sleepLabel = sleepHours || "7 - 8 horas";

  const profileItems = [
    { emoji: "⚡", label: "Nível de Energia", value: energyLabel },
    { emoji: "🌙", label: "Horas de sono por noite:", value: sleepLabel },
    { emoji: "😄", label: "Motivação para o Tai Chi:", value: motivationLabel }
  ];

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
            initial={{ width: "98%" }}
            animate={{ width: "100%" }}
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
          className="text-[1.8rem] font-bold text-black mb-8 text-center leading-tight tracking-tight"
        >
          Seu perfil com base nas respostas:
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full rounded-[20px] border-2 border-[#E8D9C8] bg-gradient-to-br from-[#FFFDF8] to-[#FDF6ED] p-8 mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
        >
          {profileItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
              key={index}
              className={`flex flex-col items-center text-center ${index < profileItems.length - 1 ? "mb-7 pb-7 border-b border-[#EBE0D6]" : ""}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-black font-bold text-[1.1rem]">{item.label}</span>
              </div>
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                className="text-[#555] text-[1.15rem] font-semibold"
              >
                {item.value}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={onNext}
          className="w-full bg-[#6C7076] hover:bg-[#5C6066] text-white font-semibold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-colors active:scale-[0.98]"
        >
          Continuar
        </motion.button>
      </main>
    </div>
  );
}
