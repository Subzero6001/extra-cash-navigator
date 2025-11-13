import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GoldPattern } from "@/components/effects/GoldPattern";

const faqs = [
  {
    question: "Preciso investir dinheiro para começar?",
    answer: "Não necessariamente. Das 51 formas, mais de 30 podem ser iniciadas com zero investimento ou menos de R$ 50. Você escolhe as que cabem no seu bolso agora e pode escalar depois.",
  },
  {
    question: "Funciona mesmo sem experiência?",
    answer: "Sim! O guia foi criado exatamente para quem está começando do zero. Cada estratégia tem explicação clara, sem jargões técnicos, e com exemplos práticos de como dar os primeiros passos.",
  },
  {
    question: "Quanto tempo leva para ver resultado?",
    answer: "Depende da estratégia que você escolher e da sua dedicação. Mas muitas pessoas conseguem o primeiro pagamento entre 7 e 30 dias. Não é mágica, é método.",
  },
  {
    question: "Preciso largar meu emprego?",
    answer: "De jeito nenhum! O objetivo é justamente complementar sua renda atual. A maioria das estratégias pode ser feita nos fins de semana, à noite ou em horários livres — sem atrapalhar seu trabalho.",
  },
  {
    question: "Isso é pirâmide ou esquema?",
    answer: "Não! Todas as 51 formas são legais, éticas e baseadas em trabalho real: investimentos regulamentados, prestação de serviços, venda de produtos ou criação de conteúdo. Zero esquemas ou promessas falsas.",
  },
  {
    question: "E se eu não souber usar computador direito?",
    answer: "Sem problemas! Existem estratégias 100% offline e presenciais (como revenda, comida sob encomenda, serviços locais). E mesmo as digitais são explicadas de forma simples, para qualquer pessoa conseguir.",
  },
  {
    question: "Como eu recebo o guia?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com seu acesso completo à área de membros, onde estará o guia em PDF + todos os bônus. Tudo 100% digital.",
  },
  {
    question: "A garantia é real?",
    answer: "Sim, 100% real. Você tem 7 dias completos para acessar todo o conteúdo. Se não gostar, basta enviar um e-mail para [suporte] e devolvemos seu dinheiro integralmente. Sem burocracia.",
  },
];

export const FAQSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-pearl to-cream overflow-hidden">
      <GoldPattern />
      
      <div className="container mx-auto max-w-[1000px] px-3 sm:px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 leading-tight px-2 sm:px-0">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 px-2 sm:px-0">
            Tire suas dúvidas antes de começar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="relative bg-background/90 backdrop-blur-sm border-2 border-gold/20 hover:border-gold/40 rounded-xl sm:rounded-2xl md:rounded-3xl px-3 sm:px-4 md:px-6 lg:px-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <AccordionTrigger className="relative text-left text-sm sm:text-base md:text-lg lg:text-xl font-bold text-primary hover:text-cta-green py-4 sm:py-5 md:py-6 transition-colors [&>svg]:text-gold [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                    <span className="pr-3 sm:pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  
                  <AccordionContent className="relative text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed pt-2 pb-4 sm:pb-6">
                    {faq.answer}
                  </AccordionContent>
                  
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl sm:rounded-l-2xl" />
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
