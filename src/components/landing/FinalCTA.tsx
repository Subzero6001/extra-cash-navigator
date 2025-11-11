import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto max-w-[1000px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="text-xl md:text-[28px] text-primary-foreground leading-relaxed space-y-6">
            <p>
              Olha, eu não sei exatamente qual é a sua situação agora.
            </p>
            <p>
              Mas sei que se você chegou até aqui, é porque algo dentro de você ainda acredita que é possível mudar.
            </p>
            <p className="font-bold text-2xl md:text-3xl">
              E é.
            </p>
            <p>
              Este momento é a sua virada de chave.
            </p>
            <p>
              Você pode continuar na mesma rotina — acordar, trabalhar, se preocupar, dormir angustiado. Ou pode decidir que hoje é o dia em que você pega o controle da sua vida financeira.
            </p>
            <p>
              Não estou falando de ficar rico da noite pro dia. Estou falando de respirar aliviado no final do mês. De não passar vergonha quando falta dinheiro. De poder dizer "sim" quando seu filho pede um passeio. De dormir tranquilo sabendo que tem uma segunda, terceira, quarta fonte de renda te protegendo.
            </p>
            <p className="font-bold text-2xl md:text-3xl">
              Esse recomeço financeiro começa com uma escolha.
            </p>
            <p className="font-bold text-2xl md:text-3xl">
              E essa escolha está na sua mão agora.
            </p>
            <p>
              As 51 formas estão prontas. O caminho está traçado. Falta só você dar o primeiro passo.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-8"
          >
            <Button variant="cta-gold" size="xl" className="min-w-[350px]" asChild>
              <a href="#preco">QUERO MUDAR MINHA VIDA AGORA</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
