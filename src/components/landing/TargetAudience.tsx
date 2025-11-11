import { motion } from "framer-motion";
import { X, Clock, Users, Globe, Frown } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";

const painPoints = [
  {
    icon: X,
    text: "Tá cansado de ganhar pouco e trabalhar demais",
  },
  {
    icon: Clock,
    text: "Não tem tempo nem dinheiro pra investir em cursos caros",
  },
  {
    icon: Users,
    text: "Quer independência financeira mas não sabe por onde começar",
  },
  {
    icon: Globe,
    text: "Precisa de algo que funcione no mundo real, não na teoria",
  },
  {
    icon: Frown,
    text: 'Tá de saco cheio de promessas vazias e "fique rico rápido"',
  },
];

export const TargetAudience = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-[1300px] px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[43px] font-bold text-center text-primary mb-12 font-[Montserrat]"
        >
          ESTE GUIA É PARA VOCÊ QUE:
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-cta-green to-primary rounded-[32px] p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center">
              <img
                src={ebookCover}
                alt="51 Formas de Fazer Renda Extra - Capa do eBook"
                className="w-full max-w-[400px] rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-4 group"
                >
                  <point.icon className="w-8 h-8 text-gold flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                  <p className="text-lg md:text-xl text-primary-foreground font-medium leading-relaxed">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
