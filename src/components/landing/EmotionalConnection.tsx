import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { LeatherTexture } from "@/components/effects/LeatherTexture";

export const EmotionalConnection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <LeatherTexture />
      
      <div className="container mx-auto max-w-[900px] px-3 sm:px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-pearl/90 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[40px] p-4 sm:p-6 md:p-10 lg:p-16 shadow-luxury border-2 sm:border-4 border-gold/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 rounded-3xl md:rounded-[40px]" />
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative mx-auto w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 sm:mb-6 md:mb-8 bg-gradient-to-br from-cta-green to-primary rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl"
          >
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gold" />
          </motion.div>

          <div className="relative space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-tight px-2 sm:px-0">
              Eu sei o que você está passando...
            </h2>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/80 leading-relaxed px-2 sm:px-0">
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
              <p className="pt-2 sm:pt-4 text-primary font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">
                Mas e se eu te disser que existe uma saída?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
