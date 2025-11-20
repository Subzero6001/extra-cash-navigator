import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedOrbs } from "@/components/effects/AnimatedOrbs";
import { GoldPattern } from "@/components/effects/GoldPattern";
import { CheckCircle2 as CheckCircle, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-person.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center bg-gradient-to-br from-primary via-cta-green to-primary overflow-hidden py-12 sm:py-16 md:py-20">
      <GoldPattern />
      <AnimatedOrbs />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 mx-auto lg:mx-0"
            >
              <span className="text-gold text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wide">
                ✨ 51 Formas Testadas
              </span>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight px-2 sm:px-0">
              Descubra Como Fazer
              <span className="block text-gold mt-1 sm:mt-2">Renda Extra</span>
              <span className="block mt-1 sm:mt-2">Em 2025</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              51 maneiras práticas, testadas e sem enrolação para você aumentar sua renda ainda este mês — mesmo começando do zero.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0"
            >
              <Button 
                variant="cta-gold" 
                size="xl" 
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-6 sm:px-8 md:px-12 h-14 sm:h-14 md:h-16 max-w-[320px] sm:max-w-none mx-auto sm:mx-0" 
                asChild
              >
                <a href="#preco">QUERO COMEÇAR AGORA</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4 px-2 sm:px-0"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 text-primary-foreground/80 text-[10px] sm:text-xs md:text-sm">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
                <span>Garantia 7 dias</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-primary-foreground/80 text-[10px] sm:text-xs md:text-sm">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-primary-foreground/80 text-[10px] sm:text-xs md:text-sm">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
                <span>100% Seguro</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center lg:hidden mt-6 mb-8"
          >
            <div className="relative max-w-[280px] mx-auto">
              <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-2xl animate-glow-pulse" />
              <div className="relative bg-gradient-to-br from-gold-light to-gold p-1.5 rounded-2xl shadow-luxury">
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
                  alt="Pessoa conquistando renda extra"
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-cta-green to-primary text-gold font-bold text-center p-4 rounded-xl shadow-luxury border-2 border-gold/30">
                <div className="text-3xl">51</div>
                <div className="text-[10px] uppercase tracking-wider">Formas</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold/30 rounded-3xl blur-3xl animate-glow-pulse" />
              <div className="relative bg-gradient-to-br from-gold-light to-gold p-2 rounded-3xl shadow-luxury rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
                  alt="Pessoa conquistando renda extra"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cta-green to-primary text-gold font-bold text-center p-6 rounded-2xl shadow-luxury border-4 border-gold/30">
                <div className="text-4xl md:text-5xl">51</div>
                <div className="text-sm uppercase tracking-wider">Formas</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
