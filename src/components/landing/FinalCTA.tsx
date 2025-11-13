import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary via-cta-green to-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.1)_0%,_transparent_70%)]" />
      <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 md:space-y-8"
        >
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-primary-foreground leading-relaxed space-y-4 sm:space-y-5 md:space-y-6">
            <p>
              Olha, eu não sei exatamente qual é a sua situação agora.
            </p>
            <p>
              Mas sei que se você chegou até aqui, é porque algo dentro de você ainda acredita que é possível mudar.
            </p>
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
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
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
              Esse recomeço financeiro começa com uma escolha.
            </p>
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
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
            className="pt-6 md:pt-8"
          >
            <Button 
              variant="liquid-glass" 
              size="xl" 
              className="w-full sm:w-auto sm:min-w-[350px] text-base sm:text-lg h-14 sm:h-16" 
              asChild
            >
              <a href="#preco">QUERO MUDAR MINHA VIDA AGORA</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
