import { motion } from "framer-motion";
import { X, Clock, Users, Globe, Frown } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";
import { GoldPattern } from "@/components/effects/GoldPattern";

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
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cream to-background opacity-50" />
      
      <div className="container mx-auto max-w-[1400px] px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-16"
        >
          ESTE GUIA É PARA VOCÊ QUE:
        </motion.h2>

        <div className="grid md:grid-cols-[45%_55%] gap-12 md:gap-16 items-center">
          {/* Ebook 3D */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative transform-3d order-1 md:order-1"
          >
            <GoldPattern>
              <div className="relative p-8 rounded-3xl">
                {/* 3D Shadow Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-cta-green/30 rounded-3xl transform translate-y-8 translate-x-8 blur-2xl" />
                
                {/* Ebook com Frame Dourado */}
                <div className="relative bg-gradient-to-br from-gold-light to-bronze p-2 rounded-2xl shadow-luxury animate-float">
                  <img
                    src={ebookCover}
                    alt="51 Formas de Fazer Renda Extra - Capa do eBook"
                    className="w-full rounded-xl shadow-2xl"
                  />
                  
                  {/* Reflexo no "chão" */}
                  <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-b from-primary/20 to-transparent blur-xl transform scale-y-[-1] opacity-40" />
                </div>

                {/* Badge 3D Flutuante */}
                <motion.div
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-gold-light via-gold to-bronze rounded-full p-2 sm:p-4 shadow-luxury"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center">
                    <p className="text-2xl sm:text-3xl font-bold text-gold">51</p>
                  </div>
                </motion.div>
              </div>
            </GoldPattern>
          </motion.div>

          {/* Lista de Pain Points */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-2">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-start gap-3 sm:gap-5 bg-background/80 backdrop-blur-sm border-2 border-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-premium hover:shadow-luxury transition-all duration-300">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                    <div className="relative bg-gradient-to-br from-cta-green to-primary p-2 sm:p-3 rounded-full">
                      <point.icon className="w-5 h-5 sm:w-7 sm:h-7 text-gold" />
                    </div>
                  </div>
                  
                  <p className="text-base sm:text-xl md:text-2xl text-foreground font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
