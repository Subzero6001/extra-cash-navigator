import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";

export const PriceSection = () => {
  return (
    <section id="preco" className="py-20 md:py-32 bg-gradient-to-b from-cream via-background to-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.1)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto max-w-[1400px] px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-20"
        >
          E QUANTO CUSTA TER 51 CAMINHOS REAIS PARA GANHAR DINHEIRO:
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[600px] mx-auto relative"
        >
          {/* Spotlight Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-gold/20 via-transparent to-transparent rounded-[40px] blur-3xl animate-glow-pulse" />
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-gold-light via-gold to-bronze rounded-[40px] p-2 shadow-luxury">
            <div className="bg-pearl rounded-[36px] p-8 md:p-12 text-center space-y-8">
              {/* Ebook 3D */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative -mt-32 mb-8"
              >
                <div className="absolute inset-0 bg-gold/30 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-gold-light to-bronze p-2 rounded-2xl shadow-luxury transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={ebookCover}
                    alt="51 Formas de Fazer Renda Extra"
                    className="w-56 mx-auto rounded-xl shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Badge Oferta */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cta-green to-primary text-gold px-6 py-3 rounded-full font-bold uppercase tracking-wider shadow-lg">
                <Sparkles className="w-5 h-5" />
                Oferta Especial de Lançamento
              </div>

              <p className="text-2xl md:text-3xl font-bold text-muted-foreground line-through">
                DE R$ 167,90 POR:
              </p>

              <div className="space-y-4">
                <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cta-green via-primary to-cta-green leading-none animate-glow-pulse">
                  12X R$ 3,77
                </p>
                <p className="text-xl text-foreground/70">ou R$ 37,90 à vista</p>
              </div>

              <Button
                variant="liquid-glass"
                size="xl"
                className="w-full h-20 text-xl"
                asChild
              >
                <a href="#checkout">QUERO COMEÇAR A GANHAR AGORA</a>
              </Button>

              <p className="text-lg text-gold font-bold italic animate-pulse">
                ⏰ Oferta válida apenas esta semana
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
