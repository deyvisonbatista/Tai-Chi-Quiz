import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { Star, ChevronDown, ChevronLeft, ChevronRight, Check, Shield, Clock, Dumbbell, Smile, Moon, Heart, Flame, Wind } from "lucide-react";
import logoImg from "@assets/logo_1772043688813.png";
import beforeAfterImg from "@assets/lg-gAdEu-design-sem-nome-2026-02-12t004304767_1772058641154.png";
import comparisonImg from "@assets/md-OHLiw-screenshot-1_1772058659417.png";
import flexImg from "@assets/md-vvcmA-screenshot-4_1772058667011.png";
import mirrorImg from "@assets/md-g52gA-screenshot-6_1772058676739.png";
import meditationImg from "@assets/md-ImCbq-screenshot-7_1772058680078.png";
import chainsImg from "@assets/md-a7dwW-screenshot-10_1772058684004.png";
import fitImg from "@assets/md-c3emY-screenshot-9_1772058687019.png";
import resultado1 from "@assets/resultado1_1772058783601.png";
import resultado2 from "@assets/resultado2_1772058786109.png";
import resultado3 from "@assets/resultado3_1772058789065.png";
import resultado4 from "@assets/resultado4_1772058791303.png";
import resultado5 from "@assets/resultado5_1772058793473.png";
import resultado6 from "@assets/resultado6_1772058817979.png";
import resultado7 from "@assets/resultado7_1772058819498.png";
import appScreen1 from "@assets/md-TeFc2-1-2x-2024-11-06-10-34-05_1772052411730.webp";
import appScreen2 from "@assets/md-Nqxr4-design-sem-nome-85_1772052414250.png";
import appScreen3 from "@assets/md-uq1QT-3-2x-2024-11-06-10-46-33-1_1772052416552.webp";

interface Props {
  onBack: () => void;
  weightKg?: string;
  targetWeight?: string;
}

const RESULTS = [resultado1, resultado2, resultado3, resultado4, resultado5, resultado6, resultado7];

const BENEFITS = [
  "Reduz o estresse e a ansiedade",
  "Melhora o equilíbrio e a postura",
  "Fortalece músculos e articulações",
  "Ajuda a emagrecer de forma saudável",
  "Melhora a qualidade do sono",
  "Aumenta a flexibilidade",
  "Reduz dores crônicas",
  "Melhora a circulação sanguínea",
];

const WHATS_INCLUDED = [
  { icon: "🎬", text: "Mais de 100 aulas em vídeo" },
  { icon: "📱", text: "Acesso ao aplicativo HARNY" },
  { icon: "📖", text: "Guias de alimentação e bem-estar" },
  { icon: "🧘", text: "Séries para todos os níveis" },
  { icon: "⏱️", text: "Aulas de 6 a 8 minutos" },
  { icon: "💬", text: "Suporte via WhatsApp" },
];

const FAQ_ITEMS = [
  {
    q: "Nunca pratiquei Tai Chi. Consigo acompanhar?",
    a: "Sim! As aulas são feitas para iniciantes. Cada movimento é explicado passo a passo, com ritmo calmo e fácil de acompanhar.",
  },
  {
    q: "Preciso de algum equipamento?",
    a: "Não! Você só precisa de um espaço pequeno e roupas confortáveis. As aulas podem ser feitas em casa mesmo.",
  },
  {
    q: "Quanto tempo dura cada aula?",
    a: "As aulas têm entre 6 e 8 minutos. Perfeitas para encaixar na sua rotina, mesmo nos dias mais corridos.",
  },
  {
    q: "Em quanto tempo vou ver resultados?",
    a: "Muitas alunas relatam melhora no sono e disposição já na primeira semana. Resultados visíveis no corpo aparecem entre 3 a 6 semanas.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim, você pode cancelar quando quiser, sem burocracia. E ainda tem 7 dias de garantia para testar sem risco.",
  },
  {
    q: "Como acesso as aulas?",
    a: "Após a inscrição, você recebe o acesso imediatamente por e-mail e WhatsApp. É só baixar o app e começar.",
  },
];

function CountdownTimer() {
  const [time, setTime] = useState(5 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="bg-[#333] text-white font-bold text-[1.4rem] px-3 py-2 rounded-lg min-w-[50px] text-center">{minutes}</div>
      <span className="text-[#333] font-bold text-[1.4rem]">:</span>
      <div className="bg-[#333] text-white font-bold text-[1.4rem] px-3 py-2 rounded-lg min-w-[50px] text-center">{seconds}</div>
    </div>
  );
}

function ResultsCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % RESULTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div
        className="relative w-full overflow-hidden rounded-[14px]"
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) {
            if (diff > 0) setCurrent((prev) => (prev + 1) % RESULTS.length);
            else setCurrent((prev) => (prev - 1 + RESULTS.length) % RESULTS.length);
          }
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={current}
            src={RESULTS[current]}
            alt={`Resultado ${current + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="w-full h-auto rounded-[14px]"
          />
        </AnimatePresence>

        <button
          onClick={() => setCurrent((prev) => (prev - 1 + RESULTS.length) % RESULTS.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-[#333]" />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % RESULTS.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md"
        >
          <ChevronRight className="w-5 h-5 text-[#333]" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {RESULTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-[8px] h-[8px] rounded-full transition-all ${i === current ? "bg-[#DE77A5] scale-125" : "bg-[#D0C4B8]"}`}
          />
        ))}
      </div>
    </div>
  );
}

function AppCarousel() {
  const screens = [appScreen1, appScreen2, appScreen3];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[240px] rounded-[24px] overflow-hidden shadow-lg border-[5px] border-[#222] bg-black relative" style={{ aspectRatio: "9/19" }}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={active}
            src={screens[active]}
            alt={`App ${active + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
      </div>
      <div className="flex gap-2 mt-3">
        {screens.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className={`w-[8px] h-[8px] rounded-full transition-all ${i === active ? "bg-[#DE77A5] scale-125" : "bg-[#D0C4B8]"}`} />
        ))}
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3 w-full">
      {FAQ_ITEMS.map((item, index) => (
        <div key={index} className="bg-white border border-[#E8D9C8] rounded-[12px] overflow-hidden shadow-sm">
          <button
            onClick={() => setOpen(open === index ? null : index)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <span className="text-[#333] font-semibold text-[0.95rem] pr-3 leading-tight">{item.q}</span>
            <ChevronDown className={`w-5 h-5 text-[#888] shrink-0 transition-transform duration-300 ${open === index ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {open === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-[#666] text-[0.9rem] leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function WeightGraph({ currentWeight, targetWeight }: { currentWeight: number; targetWeight: number }) {
  const diff = currentWeight - targetWeight;
  const mid1 = currentWeight - diff * 0.35;
  const mid2 = currentWeight - diff * 0.65;

  const points = [
    { label: "Hoje", value: currentWeight },
    { label: "Mês 1", value: Math.round(mid1) },
    { label: "Mês 2", value: Math.round(mid2) },
    { label: "Mês 3", value: targetWeight },
  ];

  const maxVal = currentWeight + 5;
  const minVal = targetWeight - 5;
  const range = maxVal - minVal;

  return (
    <div className="w-full bg-white rounded-[14px] border border-[#E8D9C8] p-5 shadow-sm">
      <div className="flex justify-between items-end mb-2">
        <div>
          <p className="text-[#888] text-[0.8rem]">Peso atual</p>
          <p className="text-[#333] font-bold text-[1.3rem]">{currentWeight} kg</p>
        </div>
        <div className="text-right">
          <p className="text-[#888] text-[0.8rem]">Objetivo</p>
          <p className="text-[#DE77A5] font-bold text-[1.3rem]">{targetWeight} kg</p>
        </div>
      </div>

      <div className="relative h-[140px] mt-4">
        <svg viewBox="0 0 300 120" className="w-full h-full">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6C7686" />
              <stop offset="100%" stopColor="#DE77A5" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DE77A5" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#DE77A5" stopOpacity="0" />
            </linearGradient>
          </defs>

          {points.map((p, i) => {
            const x = 20 + (i / (points.length - 1)) * 260;
            const y = 10 + ((maxVal - p.value) / range) * 90;
            const nextP = points[i + 1];
            const nx = nextP ? 20 + ((i + 1) / (points.length - 1)) * 260 : 0;
            const ny = nextP ? 10 + ((maxVal - nextP.value) / range) * 90 : 0;

            return (
              <g key={i}>
                {nextP && (
                  <>
                    <path
                      d={`M${x},${y} Q${(x + nx) / 2},${(y + ny) / 2 + 5} ${nx},${ny} L${nx},110 L${x},110 Z`}
                      fill="url(#areaGrad)"
                    />
                    <path
                      d={`M${x},${y} Q${(x + nx) / 2},${(y + ny) / 2 + 5} ${nx},${ny}`}
                      stroke="url(#lineGrad)"
                      strokeWidth="2.5"
                      fill="none"
                    />
                  </>
                )}
                <circle cx={x} cy={y} r="4" fill={i === points.length - 1 ? "#DE77A5" : "#6C7686"} />
                <text x={x} y="115" textAnchor="middle" className="text-[10px]" fill="#888">{p.label}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default function FinalOffer({ onBack, weightKg, targetWeight }: Props) {
  const currentW = weightKg ? parseFloat(weightKg) : 75;
  const targetW = targetWeight ? parseFloat(targetWeight) : Math.round(currentW * 0.9);

  const benefitImages = [
    { img: flexImg, title: "Flexibilidade e equilíbrio", desc: "Movimentos suaves que melhoram a mobilidade do corpo inteiro." },
    { img: mirrorImg, title: "Autoestima renovada", desc: "Sinta-se bem consigo mesma, por dentro e por fora." },
    { img: meditationImg, title: "Paz interior", desc: "Reduza o estresse e encontre calma no seu dia a dia." },
    { img: fitImg, title: "Corpo forte e saudável", desc: "Tonifique os músculos sem impacto nas articulações." },
  ];

  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative">
      <div className="w-full pt-6 pb-4 px-6 flex items-center justify-center z-20 max-w-[500px]">
        <img src={logoImg} alt="HARNY Logo" className="h-9 object-contain" />
      </div>

      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-5">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white border border-[#E8D9C8] rounded-[16px] p-6 mb-6 shadow-sm text-center"
        >
          <h1 className="text-[1.5rem] font-bold text-black mb-2 leading-tight">
            Seu plano <span className="text-[#DE77A5]">personalizado</span> está pronto!
          </h1>
          <p className="text-[#888] text-[0.9rem] mb-4">Oferta expira em:</p>
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full rounded-[14px] overflow-hidden mb-6 shadow-sm"
        >
          <img src={beforeAfterImg} alt="Transformação HARNY" className="w-full h-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full mb-6"
        >
          <h2 className="text-[1.3rem] font-bold text-black mb-4 text-center">
            Seu <span className="text-[#DE77A5]">objetivo</span>
          </h2>
          <WeightGraph currentWeight={currentW} targetWeight={targetW} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mb-8"
        >
          <h2 className="text-[1.3rem] font-bold text-black mb-5 text-center">
            Veja o que o <span className="text-[#DE77A5]">Tai Chi</span> faz por você
          </h2>
          <div className="flex flex-col gap-3">
            {BENEFITS.map((b, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-[#E8D9C8] rounded-[12px] px-4 py-3 shadow-sm">
                <div className="w-6 h-6 bg-[#DE77A5] rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-[#333] text-[0.95rem] font-medium">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="w-full mb-8">
          <h2 className="text-[1.3rem] font-bold text-black mb-5 text-center">
            Resultados reais de alunas <span className="text-[#DE77A5]">Harny</span>
          </h2>
          <ResultsCarousel />
        </div>

        <div className="w-full rounded-[14px] overflow-hidden mb-8 shadow-sm">
          <img src={comparisonImg} alt="Academia vs Tai Chi" className="w-full h-auto" />
        </div>

        <div className="w-full mb-8">
          <h2 className="text-[1.3rem] font-bold text-black mb-5 text-center">
            Transforme seu <span className="text-[#DE77A5]">corpo e mente</span>
          </h2>
          <div className="flex flex-col gap-5">
            {benefitImages.map((item, i) => (
              <div key={i} className="w-full bg-white border border-[#E8D9C8] rounded-[14px] overflow-hidden shadow-sm">
                <img src={item.img} alt={item.title} className="w-full h-[200px] object-cover" />
                <div className="p-4">
                  <h3 className="text-[#333] font-bold text-[1.05rem] mb-1">{item.title}</h3>
                  <p className="text-[#666] text-[0.9rem] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mb-8">
          <h2 className="text-[1.3rem] font-bold text-black mb-5 text-center">
            O que você vai <span className="text-[#DE77A5]">receber</span>:
          </h2>
          <div className="flex flex-col gap-3">
            {WHATS_INCLUDED.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white border border-[#E8D9C8] rounded-[12px] px-5 py-4 shadow-sm">
                <span className="text-[1.5rem]">{item.icon}</span>
                <span className="text-[#333] font-semibold text-[0.95rem]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mb-8">
          <AppCarousel />
        </div>

        <div className="w-full bg-white border-2 border-[#DE77A5] rounded-[18px] p-6 mb-4 shadow-md text-center">
          <p className="text-[#888] text-[0.85rem] mb-1 line-through">De R$ 197,00</p>
          <h2 className="text-[2rem] font-bold text-[#DE77A5] mb-1">R$ 29,90</h2>
          <p className="text-[#333] font-semibold text-[0.95rem] mb-3">Plano Trimestral</p>
          <p className="text-[#888] text-[0.8rem] mb-4">Menos de R$ 1 por dia para transformar sua vida</p>
          <a
            href="#"
            data-testid="button-buy-plan"
            className="block w-full bg-[#DE77A5] hover:bg-[#D4669A] text-white font-bold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-colors active:scale-[0.98] text-center"
          >
            QUERO COMEÇAR AGORA! 💕
          </a>
        </div>

        <div className="w-full mb-8 text-center">
          <p className="text-[#888] text-[0.85rem] mb-3">Oferta expira em:</p>
          <CountdownTimer />
        </div>

        <div className="w-full mb-8">
          <h2 className="text-[1.3rem] font-bold text-black mb-5 text-center">
            Perguntas <span className="text-[#DE77A5]">frequentes</span>
          </h2>
          <FAQAccordion />
        </div>

        <div className="w-full bg-[#F0EBE4] border border-[#E0D3C9] rounded-[16px] p-6 mb-6 text-center">
          <div className="flex justify-center mb-3">
            <Shield className="w-10 h-10 text-[#6C7686]" />
          </div>
          <h3 className="text-[1.1rem] font-bold text-black mb-2">Garantia de 7 dias</h3>
          <p className="text-[#555] text-[0.9rem] leading-relaxed">
            Se por qualquer motivo você não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
        </div>

        <div className="w-full mb-6">
          <a
            href="#"
            data-testid="button-buy-plan-bottom"
            className="block w-full bg-[#DE77A5] hover:bg-[#D4669A] text-white font-bold text-[1.1rem] py-4 rounded-[14px] shadow-md transition-colors active:scale-[0.98] text-center"
          >
            QUERO COMEÇAR AGORA! 💕
          </a>
        </div>

        <div className="w-full rounded-[14px] overflow-hidden shadow-sm mb-6">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a3a2a] flex items-center justify-center py-4 px-6 gap-4 rounded-[14px]">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">😊</span>
              </div>
              <div>
                <p className="text-white font-bold text-[0.85rem] leading-tight">PRÊMIO</p>
                <p className="text-green-400 font-bold text-[0.75rem]">RA 2025</p>
              </div>
            </div>
            <div className="border-l border-[#555] pl-4">
              <p className="text-white font-bold text-[0.85rem] leading-tight">EMPRESA</p>
              <p className="text-white font-bold text-[0.75rem]">INDICADA</p>
            </div>
          </div>
        </div>

        <div className="w-full text-center pb-10">
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-[#888] text-[0.8rem]">Nota 4,7 baseada em 42.489 avaliações</p>
        </div>

      </main>
    </div>
  );
}
