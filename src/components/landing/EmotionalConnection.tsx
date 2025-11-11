import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const EmotionalConnection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary py-16 md:py-24"
    >
      <div className="container mx-auto max-w-[1000px] px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <MessageCircle className="w-12 h-12 text-primary-foreground" />
          
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground font-[Montserrat]">
            E aí? Tudo bem?
          </h2>
          
          <div className="text-lg md:text-xl text-primary-foreground space-y-4 leading-relaxed max-w-[900px]">
            <p>
              Tô aqui pra te ajudar com algo que eu sei que tá te tirando o sono: aquela sensação de que não importa quanto você trabalhe, o dinheiro nunca é suficiente, né?
            </p>
            <p>
              Olha, eu sei bem como é. Já vi MUITA gente passando pelo mesmo perrengue que você. Querendo ganhar mais, mas sem ter capital pra investir alto. Sem tempo pra fazer faculdade de novo. Sem saber por onde começar.
            </p>
            <p className="font-bold text-xl md:text-2xl">
              A boa notícia? Você não precisa de nada disso pra virar esse jogo.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
