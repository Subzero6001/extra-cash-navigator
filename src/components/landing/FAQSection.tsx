import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-light-green">
      <div className="container mx-auto max-w-[1000px] px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[43px] font-bold text-center text-primary mb-12 font-[Montserrat]"
        >
          PERGUNTAS FREQUENTES
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border-2 border-primary rounded-[20px] px-6"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-primary hover:text-cta-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
