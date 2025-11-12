import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedOrbs } from "@/components/effects/AnimatedOrbs";
import { GoldPattern } from "@/components/effects/GoldPattern";
import { CheckCircle2, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-person.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-cta-green to-primary py-16 md:py-24 overflow-hidden">
      <AnimatedOrbs />
      <GoldPattern>
        <div className="container mx-auto max-w-[1400px] px-4 relative z-10">
          <div className="grid gap-12 md:grid-cols-[55%_45%] items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Badge Superior */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 shadow-gold-glow"
              >
                <Zap className="w-5 h-5 text-gold" />
                <span className="text-gold font-bold text-sm uppercase tracking-wider">51 Formas Testadas</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-pearl">
                51 Formas Reais de Fazer{" "}
                <span className="text-gold relative inline-block">
                  Renda Extra
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold-light via-gold to-bronze rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>{" "}
                Começando Ainda Este Mês
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-pearl/90 font-[Inter]">
                Um guia completo e prático para brasileiros que querem sair do aperto financeiro — com estratégias testadas que funcionam mesmo começando do zero, sem promessas mágicas ou fórmulas impossíveis.
              </h2>

              <Button 
                variant="liquid-glass" 
                size="xl" 
                className="w-full md:w-auto md:min-w-[500px] h-20 text-xl mt-8"
                asChild
              >
                <a href="#preco">QUERO COMEÇAR A GANHAR AGORA</a>
              </Button>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                <div className="flex items-center gap-2 text-pearl/80">
                  <Shield className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium">Garantia 7 Dias</span>
                </div>
                <div className="flex items-center gap-2 text-pearl/80">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium">Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2 text-pearl/80">
                  <Zap className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium">100% Digital</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative transform-3d"
            >
              <div className="relative">
                {/* Gold Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-gold-light via-gold to-bronze rounded-3xl opacity-20 blur-2xl animate-glow-pulse" />
                
                {/* Main Image with Frame */}
                <div className="relative bg-gradient-to-br from-gold-light to-gold p-1 rounded-3xl shadow-luxury">
                  <img
                    src={heroImage}
                    alt="Pessoa confiante e bem-sucedida trabalhando"
                    className="rounded-3xl w-full shadow-2xl"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gold-light via-gold to-bronze p-6 rounded-2xl shadow-luxury"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">51</p>
                    <p className="text-sm font-bold text-primary/80 uppercase">Estratégias</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </GoldPattern>
    </section>
  );
};
