import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-gold to-bronze">
      <div className="container mx-auto max-w-[1300px] px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[43px] font-bold text-center text-background mb-12 font-[Montserrat]"
        >
          QUEM JÁ ESTÁ FAZENDO ACONTECER
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-background rounded-[24px] p-8 space-y-4 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gold"
                />
              </div>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-center">
                "{testimonial.text}"
              </p>

              <div className="text-center pt-4 border-t">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
