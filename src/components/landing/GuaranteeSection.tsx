import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-cta-green to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 pointer-events-none" />
      <div className="container mx-auto max-w-[1300px] px-4 relative z-10">
        <div className="grid md:grid-cols-[40%_60%] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gold/30 rounded-full blur-3xl animate-glow-pulse" />
              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-gold-light via-gold to-bronze flex items-center justify-center shadow-luxury border-8 border-pearl/20 animate-rotate-slow">
                <div className="text-center space-y-3">
                  <Shield className="w-24 h-24 text-primary mx-auto drop-shadow-2xl" />
                  <p className="text-3xl font-bold text-primary">GARANTIA</p>
                  <p className="text-2xl font-bold text-primary">INCONDICIONAL</p>
                  <p className="text-6xl font-bold text-primary">7 DIAS</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-[40px] font-bold text-primary-foreground font-[Montserrat]">
              GARANTIA TOTAL DE 7 DIAS
            </h2>
            <div className="text-xl md:text-[33px] text-primary-foreground leading-relaxed space-y-4">
              <p>
                Se em 7 dias você acessar o guia, testar as estratégias e achar que não é para você — por qualquer motivo — basta enviar um único e-mail e devolvemos 100% do seu dinheiro.
              </p>
              <p className="font-bold">
                Sem perguntas. Sem burocracia. Sem enrolação.
              </p>
              <p>
                O risco é todo nosso. Você só tem a ganhar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
