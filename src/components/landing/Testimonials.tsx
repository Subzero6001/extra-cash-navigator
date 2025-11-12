import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { LeatherTexture } from "@/components/effects/LeatherTexture";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Carla Mendes",
    location: "São Paulo, SP",
    image: testimonial1,
    text: "Comecei com marketing de afiliados e cashback profissional. Em 3 meses já estava tirando R$ 1.400 extras todo mês. Hoje sustento metade das contas da casa com isso!",
  },
  {
    name: "Roberto Silva",
    location: "Curitiba, PR",
    image: testimonial2,
    text: "Sempre achei que precisava de muito dinheiro pra investir. O guia me mostrou que eu podia começar com R$ 50 no Tesouro Direto. Hoje tenho uma carteira que rende R$ 800 por mês.",
  },
  {
    name: "Juliana Costa",
    location: "Belo Horizonte, MG",
    image: testimonial3,
    text: "Eu trabalhava como assistente virtual nos fins de semana sem nem saber que isso era um serviço. Aprendi a cobrar direito e hoje ganho R$ 1.200 por mês só com isso.",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <LeatherTexture className="absolute inset-0">
        <div className="absolute inset-0" />
      </LeatherTexture>
      
      <div className="container mx-auto max-w-[1400px] px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-pearl mb-16"
        >
          QUEM JÁ ESTÁ FAZENDO ACONTECER
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative transform-3d group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-pearl/95 backdrop-blur-sm rounded-3xl p-8 space-y-6 shadow-luxury border border-gold/20 group-hover:border-gold/40 transition-all duration-300">
                {/* Quote Mark Background */}
                <Quote className="absolute top-8 right-8 w-20 h-20 text-gold/10" />
                
                {/* Photo with Gold Frame */}
                <div className="flex justify-center relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-light to-gold rounded-full blur-md animate-glow-pulse" />
                    <div className="relative bg-gradient-to-br from-gold-light to-bronze p-1.5 rounded-full shadow-luxury">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-28 h-28 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <Star className="w-6 h-6 fill-gold text-gold drop-shadow-lg" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 text-lg leading-relaxed text-center relative z-10 font-[Inter]">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="text-center pt-4 border-t-2 border-gold/20 relative z-10">
                  <p className="font-bold text-xl text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
