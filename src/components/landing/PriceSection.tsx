import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ebookCover from "@/assets/ebook-cover.jpg";

export const PriceSection = () => {
  return (
    <section id="preco" className="py-16 md:py-32 bg-background">
      <div className="container mx-auto max-w-[1305px] px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[43px] font-bold text-center text-muted-foreground mb-16 font-[Montserrat]"
        >
          E QUANTO CUSTA TER 51 CAMINHOS REAIS PARA GANHAR DINHEIRO:
        </motion.h2>

        <div className="bg-light-green rounded-[32px] p-4 md:p-8">
          <div className="grid md:grid-cols-[30%_40%_30%] items-start">
            <div></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative -mt-12 md:-mt-24"
            >
              <div className="bg-gradient-to-br from-gold to-bronze rounded-[19px] p-8 md:p-12 shadow-2xl text-center space-y-6">
                <div className="-mt-20 md:-mt-32 mb-4">
                  <img
                    src={ebookCover}
                    alt="51 Formas de Fazer Renda Extra"
                    className="w-48 md:w-64 mx-auto rounded-xl shadow-2xl"
                  />
                </div>

                <h3 className="text-2xl md:text-[34px] font-bold text-background font-[Montserrat]">
                  OFERTA ESPECIAL DE LANÇAMENTO
                </h3>

                <p className="text-xl md:text-[30px] font-bold text-background/80 line-through">
                  DE R$ 167,90 POR:
                </p>

                <div className="space-y-2">
                  <p className="text-6xl md:text-[87px] font-bold text-background leading-none">
                    12X R$ 3,77
                  </p>
                  <p className="text-lg text-background/90">ou R$ 37,90 à vista</p>
                </div>

                <Button
                  variant="cta-primary"
                  size="xl"
                  className="w-full text-xl"
                  asChild
                >
                  <a href="#checkout">QUERO COMEÇAR A GANHAR AGORA</a>
                </Button>

                <p className="text-lg text-background/90 italic">
                  Oferta válida apenas esta semana
                </p>
              </div>
            </motion.div>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
