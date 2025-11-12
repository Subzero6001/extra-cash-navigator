import { motion } from "framer-motion";
import { DollarSign, Home, TrendingUp, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeatherTexture } from "@/components/effects/LeatherTexture";

const benefits = [
  {
    icon: DollarSign,
    text: "Ganhar R$ 500, R$ 1.000 ou mais por mês",
  },
  {
    icon: Home,
    text: "Trabalhar de onde quiser, no seu ritmo",
  },
  {
    icon: TrendingUp,
    text: "Ter múltiplas fontes de renda protegendo você",
  },
  {
    icon: Smile,
    text: "Dormir sem ansiedade financeira todo mês",
  },
];

export const BenefitsGrid = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <LeatherTexture className="absolute inset-0">
        <div className="absolute inset-0" />
      </LeatherTexture>
      
      <div className="container mx-auto max-w-[1400px] px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-pearl mb-16"
        >
          AGORA, IMAGINA SÓ:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="relative group transform-3d"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-bronze/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Principal */}
              <div className="relative bg-gradient-to-br from-gold-light via-gold to-bronze rounded-3xl p-8 shadow-luxury border-2 border-gold/40 group-hover:border-gold transition-all duration-300">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
                </div>
                
                <div className="relative space-y-6 text-center">
                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-glow-pulse" />
                      <div className="relative bg-primary p-5 rounded-full shadow-luxury">
                        <benefit.icon className="w-12 h-12 text-gold" />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Text */}
                  <p className="text-xl md:text-2xl font-bold text-primary leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button variant="liquid-glass" size="xl" className="min-w-[400px] h-20 text-xl" asChild>
            <a href="#preco">QUERO COMEÇAR A GANHAR AGORA</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
