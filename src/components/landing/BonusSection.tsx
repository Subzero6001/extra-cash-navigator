import { motion } from "framer-motion";
import { CheckCircle, Wrench, Calendar, Gift } from "lucide-react";
import { GoldPattern } from "@/components/effects/GoldPattern";

const bonuses = [
  {
    icon: CheckCircle,
    title: "Bônus 1: Checklist do Dinheiro Rápido",
    description: "Um guia prático em formato checklist para você escolher a ideia certa e começar em até 24h — com tarefas claras, metas e plano de ação.",
  },
  {
    icon: Wrench,
    title: "Bônus 2: Guia das Ferramentas Gratuitas",
    description: "Saiba quais são as melhores ferramentas 100% gratuitas para freelancers, vendas online, marketing e gestão — com tutoriais e links diretos.",
  },
  {
    icon: Calendar,
    title: "Bônus 3: Planner Semanal da Renda Extra",
    description: "Um planner digital com modelo de metas semanais, controle de ganhos, reflexão e hábito para transformar sua rotina e manter a consistência.",
  },
];

export const BonusSection = () => {
  return (
    <section className="relative py-16 md:py-32 bg-gradient-to-b from-background via-light-green to-background overflow-hidden">
      <GoldPattern />
      
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 flex-wrap justify-center">
            <Gift className="w-10 h-10 md:w-12 md:h-12 text-gold" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              BÔNUS EXCLUSIVOS
            </h2>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto px-4">
            Além do guia 51 Formas de Fazer Renda Extra, você vai receber três bônus exclusivos e ainda terá a opção de dois order bumps para turbinar sua oferta.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-pearl/95 backdrop-blur-sm border-4 border-gold/30 group-hover:border-gold/60 rounded-3xl p-6 md:p-8 shadow-premium group-hover:shadow-luxury transition-all h-full">
                <div className="flex flex-col gap-5 h-full">
                  <div className="bg-gradient-to-br from-cta-green to-primary p-4 rounded-2xl shadow-lg self-start">
                    <bonus.icon className="w-8 h-8 md:w-10 md:h-10 text-gold" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 leading-tight">{bonus.title}</h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed flex-1">{bonus.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary via-cta-green to-primary rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-luxury overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/10 pointer-events-none" />
          <div className="relative space-y-4 md:space-y-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-pearl">
              Valor somado desses bônus: <span className="text-gold">R$ 155+</span>
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-pearl">
              MAS VOCÊ NÃO VAI PAGAR NADA A MAIS POR ELES
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
              Hoje você leva tudo por apenas R$ 37,90
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
