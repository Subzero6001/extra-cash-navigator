import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid md:grid-cols-[40%_60%] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gold to-bronze flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-2">
                  <Shield className="w-20 h-20 text-background mx-auto" />
                  <p className="text-2xl font-bold text-background">GARANTIA</p>
                  <p className="text-xl font-bold text-background">INCONDICIONAL</p>
                  <p className="text-4xl font-bold text-background">7 DIAS</p>
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
