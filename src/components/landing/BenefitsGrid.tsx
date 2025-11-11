import { motion } from "framer-motion";
import { DollarSign, Home, TrendingUp, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: DollarSign,
    text: "Ganhar R$ 500, R$ 1.000 ou mais por mês",
  },
  {
    icon: Home,
    text: "Trabalhar de onde quiser, no seu ritmo",
  },
  {
    icon: TrendingUp,
    text: "Ter múltiplas fontes de renda protegendo você",
  },
  {
    icon: Smile,
    text: "Dormir sem ansiedade financeira todo mês",
  },
];

export const BenefitsGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-[1300px] px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[43px] font-bold text-center text-muted-foreground mb-12 font-[Montserrat]"
        >
          AGORA, IMAGINA SÓ:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gold to-bronze rounded-[24px] p-8 text-center space-y-4 shadow-lg hover:shadow-2xl transition-all"
            >
              <benefit.icon className="w-12 h-12 text-background mx-auto" />
              <p className="text-lg font-bold text-background leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button variant="cta-primary" size="xl" className="min-w-[300px]" asChild>
            <a href="#preco">QUERO COMEÇAR A GANHAR AGORA</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
