import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { LeatherTexture } from "@/components/effects/LeatherTexture";

export const EmotionalConnection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-20 md:py-32"
    >
      <LeatherTexture className="absolute inset-0">
        <div className="absolute inset-0" />
      </LeatherTexture>
      
      <div className="container mx-auto max-w-[1100px] px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-pearl/95 backdrop-blur-xl rounded-[32px] p-8 md:p-16 shadow-luxury border border-gold/20"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/30 rounded-tl-[32px]" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/30 rounded-br-[32px]" />
          
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl animate-glow-pulse" />
              <div className="relative bg-gradient-to-br from-cta-green to-primary p-4 rounded-full">
                <MessageCircle className="w-12 h-12 text-gold" />
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              E aí? Tudo bem?
            </h2>
            
            <div className="text-lg md:text-xl text-foreground/80 space-y-6 leading-relaxed max-w-[950px] font-[Inter]">
              <p>
                Tô aqui pra te ajudar com algo que eu sei que tá te tirando o sono: aquela sensação de que não importa quanto você trabalhe, o dinheiro nunca é suficiente, né?
              </p>
              <p>
                Olha, eu sei bem como é. Já vi MUITA gente passando pelo mesmo perrengue que você. Querendo ganhar mais, mas sem ter capital pra investir alto. Sem tempo pra fazer faculdade de novo. Sem saber por onde começar.
              </p>
              <motion.p 
                className="font-bold text-2xl md:text-3xl text-primary relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                A boa notícia?{" "}
                <span className="text-gold">Você não precisa de nada disso pra virar esse jogo.</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
