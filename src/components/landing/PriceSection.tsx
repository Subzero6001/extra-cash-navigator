import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 as CheckCircle, Shield, Clock } from "lucide-react";
import { GoldPattern } from "@/components/effects/GoldPattern";
import { AnimatedOrbs } from "@/components/effects/AnimatedOrbs";
import ebookCover from "@/assets/ebook-cover.jpg";

export const PriceSection = () => {
  return (
    <section id="preco" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-pearl to-background overflow-hidden">
      <GoldPattern />
      <AnimatedOrbs />
      
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6">
            INVISTA NO SEU FUTURO
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto px-4">
            Acesso completo ao guia + todos os bônus
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-3xl blur-2xl" />
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <img
                src={ebookCover}
                alt="51 Formas de Fazer Renda Extra"
                className="w-full max-w-[400px] mx-auto drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(13, 40, 24, 0.5))"
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -top-6 -right-4 sm:-right-6 bg-gradient-to-br from-gold via-gold-light to-gold text-primary font-black text-center p-4 sm:p-6 rounded-2xl md:rounded-3xl shadow-luxury transform rotate-12 animate-float z-20">
              <div className="text-xs sm:text-sm uppercase tracking-wider">Economize</div>
              <div className="text-2xl sm:text-3xl md:text-4xl">85%</div>
            </div>

            <div className="relative bg-gradient-to-br from-pearl to-cream rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-luxury border-4 border-gold/30">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/10 rounded-3xl md:rounded-[40px]" />
              
              <div className="relative space-y-6 sm:space-y-8">
                <div className="text-center space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg md:text-xl text-foreground/60 line-through">
                    De R$ 248,00
                  </p>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-2">Por apenas</p>
                    <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cta-green to-gold animate-glow-pulse">
                      R$ 37,90
                    </p>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-foreground/70">
                    Pagamento único • Acesso vitalício
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Guia completo com 51 formas de renda extra",
                    "3 bônus exclusivos (valor R$ 155+)",
                    "Acesso imediato após pagamento",
                    "Garantia incondicional de 7 dias",
                    "Suporte prioritário",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0 mt-1" />
                      <span className="text-sm sm:text-base md:text-lg text-foreground/80">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  variant="liquid-glass" 
                  size="xl" 
                  className="w-full text-base sm:text-lg h-14 sm:h-16" 
                  asChild
                >
                  <a href="#checkout">GARANTIR MINHA VAGA AGORA</a>
                </Button>

                <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-foreground/60">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  <span>Pagamento 100% seguro e criptografado</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center space-y-4 sm:space-y-6"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            <span className="text-xs sm:text-sm md:text-base font-bold text-primary uppercase tracking-wider">
              Oferta por tempo limitado
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            O preço pode aumentar a qualquer momento. Garanta o seu acesso agora!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
