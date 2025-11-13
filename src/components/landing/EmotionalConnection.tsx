import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { LeatherTexture } from "@/components/effects/LeatherTexture";

export const EmotionalConnection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <LeatherTexture />
      
      <div className="container mx-auto max-w-[900px] px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-pearl/90 backdrop-blur-md rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 shadow-luxury border-4 border-gold/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 rounded-3xl md:rounded-[40px]" />
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-6 md:mb-8 bg-gradient-to-br from-cta-green to-primary rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl"
          >
            <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gold" />
          </motion.div>

          <div className="relative space-y-4 sm:space-y-5 md:space-y-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Eu sei o que você está passando...
            </h2>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-5 text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed">
              <p>
                Você trabalha o mês inteiro, mas quando chega o final, parece que o dinheiro{" "}
                <span className="font-bold text-gold">sumiu</span>.
              </p>
              <p>
                Você quer dar uma vida melhor pra sua família, mas sempre falta aquele{" "}
                <span className="font-bold text-gold">dinheiro extra</span>.
              </p>
              <p>
                E toda vez que surge uma despesa inesperada, você sente aquele aperto no peito...{" "}
                <span className="font-bold text-gold">"E agora?"</span>
              </p>
              <p className="pt-4 text-primary font-bold text-xl sm:text-2xl md:text-3xl">
                Mas e se eu te disser que existe uma saída?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
