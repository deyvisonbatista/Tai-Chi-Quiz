import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import logoImg from "@assets/logo_1772043688813.png";
import appScreen1 from "@assets/md-TeFc2-1-2x-2024-11-06-10-34-05_1772052411730.webp";
import appScreen2 from "@assets/md-Nqxr4-design-sem-nome-85_1772052414250.png";
import appScreen3 from "@assets/md-uq1QT-3-2x-2024-11-06-10-46-33-1_1772052416552.webp";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const APP_SCREENS = [appScreen1, appScreen2, appScreen3];

const INFO_BLOCKS = [
  {
    text: (
      <>
        Todas as aulas são <strong>em vídeo</strong>, explicadas passo a passo, com movimentos claros e fáceis de acompanhar mesmo para quem nunca praticou antes.
      </>
    ),
  },
  {
    text: (
      <>
        Após finalizar sua inscrição, você recebe o acesso ao aplicativo <strong>imadiatamente</strong> por e-mail e whatsapp.
      </>
    ),
  },
  {
    text: (
      <>
        O aplicativo é simples e intuitivo, <strong>ideal até para quem não tem experiência com tecnologia</strong>.
      </>
    ),
  },
];

export default function SimplePath({ onNext, onBack }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  }, [activeSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveSlide((prev) => (prev + 1) % APP_SCREENS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      <div className="w-full pt-8 pb-4 px-6 flex items-center justify-between z-20 max-w-[500px]">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <img src={logoImg} alt="HARNY Logo" className="h-8 object-contain" />
        <div className="w-10"></div>
      </div>

      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.6rem] font-bold text-black mb-6 text-center leading-tight tracking-tight"
        >
          Criamos um <span className="text-[#DE77A5]">caminho simples</span> para você praticar Tai Chi:
        </motion.h1>

        <div className="flex flex-col gap-4 w-full mb-8">
          {INFO_BLOCKS.map((block, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.15 }}
              key={index}
              className="bg-[#EBE0D6] border border-[#E0D3C9] rounded-[14px] py-5 px-5 shadow-[0_2px_6px_rgba(0,0,0,0.03)]"
            >
              <p className="text-[#333] text-[1rem] leading-relaxed">{block.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-[260px] mx-auto mb-3 rounded-[28px] overflow-hidden shadow-lg border-[6px] border-[#222] bg-black relative"
          style={{ aspectRatio: "9/19" }}
        >
          <div className="w-full h-full relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={activeSlide}
                src={APP_SCREENS[activeSlide]}
                alt={`Tela do aplicativo ${activeSlide + 1}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="flex gap-2 mb-6">
          {APP_SCREENS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              data-testid={`carousel-dot-${index}`}
              className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "bg-[#DE77A5] scale-110"
                  : "bg-[#D0C4B8] hover:bg-[#C0B4A8]"
              }`}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-[#444] text-[1.05rem] text-center leading-relaxed mb-8"
        >
          É só apertar o play, seguir a aula e evoluir aos poucos, dia após dia.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onClick={onNext}
          data-testid="button-start-now"
          className="w-full bg-[#DE77A5] hover:bg-[#D4669A] text-white font-bold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
        >
          EU QUERO COMEÇAR AGORA! 💕
        </motion.button>
      </main>
    </div>
  );
}
