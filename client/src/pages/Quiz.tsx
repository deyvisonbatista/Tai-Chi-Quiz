import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "@assets/logo_1772043688813.png";
import womanImg from "@assets/img1_1772043693121.png";

const AGE_OPTIONS = [
  "60 +",
  "50 ~ 59",
  "40 ~ 49",
  "30 ~ 39"
];

export default function Quiz() {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const handleSelectAge = (age: string) => {
    setSelectedAge(age);
    console.log("Selected age:", age);
  };

  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col items-center overflow-x-hidden font-sans relative pb-10">
      {/* Header / Logo */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full pt-10 pb-6 flex justify-center z-20"
      >
        <img 
          src={logoImg} 
          alt="HARNY Logo" 
          className="h-10 object-contain" 
        />
      </motion.header>

      {/* Main Content Container */}
      <main className="w-full max-w-[500px] flex flex-col items-center z-10 px-6">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-6 flex flex-col items-center"
        >
          <h1 className="text-[2.75rem] sm:text-[3.25rem] leading-[1.05] font-extrabold tracking-tight mb-4 flex flex-col items-center gap-1">
            <span className="text-[#6B7686]">Tai chi</span>
            <span className="text-black leading-none">para<br />Iniciantes</span>
          </h1>
          <p className="text-[#222] text-lg sm:text-[1.15rem] font-medium mt-1">
            De acordo com sua idade:
          </p>
        </motion.div>

        {/* Start Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#F8F9FA] border border-black/5 rounded-[2rem] px-5 py-2.5 flex items-center gap-3 mb-10 shadow-sm backdrop-blur-md"
        >
          <div className="w-2.5 h-2.5 bg-[#00C853] rounded-full animate-pulse"></div>
          <span className="text-black font-semibold text-[15px] tracking-wide">Comece hoje!</span>
        </motion.div>

        {/* Interactive Area: Buttons + Image */}
        <div className="w-full relative flex items-start justify-between min-h-[360px]">
          
          {/* Options Column */}
          <div className="flex flex-col gap-[14px] w-[180px] sm:w-[200px] z-30 pt-4 relative">
            {AGE_OPTIONS.map((age, index) => (
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                key={age}
                onClick={() => handleSelectAge(age)}
                data-testid={`btn-age-${index}`}
                className={`
                  w-full bg-[#EBE0D6] hover:bg-[#E2D4C8] hover:shadow-md
                  border border-[#E0D3C9]
                  transition-all duration-300 rounded-[14px] py-4 px-5 
                  flex items-center justify-between 
                  shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                  active:scale-[0.98] group
                  ${selectedAge === age ? 'ring-2 ring-black/20 scale-[0.98] bg-[#E2D4C8]' : ''}
                `}
              >
                <span className="text-black font-bold text-[1.1rem] ml-1">{age}</span>
                <div className="w-[26px] h-[26px] bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <ChevronRight className="w-4 h-4 text-[#888]" strokeWidth={3} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Decorative Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="absolute right-[-40px] sm:right-[-60px] top-[-50px] w-[340px] sm:w-[380px] z-10 pointer-events-none"
          >
            <img 
              src={womanImg} 
              alt="Mulher praticando Tai chi" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

      </main>
    </div>
  );
}
