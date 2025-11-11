import { motion } from "framer-motion";
import { BarChart3, CheckSquare, MessageSquare, GraduationCap } from "lucide-react";

const bonuses = [
  {
    icon: BarChart3,
    title: "Planilha Financeira Inteligente",
    description: "Controle suas rendas extras, despesas e crescimento mensal de forma simples e visual.",
    value: "R$ 47,00",
  },
  {
    icon: CheckSquare,
    title: 'Guia "Primeiros R$ 500 em 30 Dias"',
    description: "Passo a passo resumido das 5 estratégias mais rápidas para gerar sua primeira renda extra ainda este mês.",
    value: "R$ 37,00",
  },
  {
    icon: MessageSquare,
    title: "Grupo VIP no Telegram",
    description: "Acesso ao grupo exclusivo para tirar dúvidas, trocar experiências e receber atualizações constantes.",
    value: "R$ 97,00",
  },
  {
    icon: GraduationCap,
    title: 'Mini-Curso "Como Vender Seus Serviços"',
    description: "5 vídeo-aulas práticas ensinando como precificar, divulgar e fechar vendas dos seus serviços.",
    value: "R$ 67,00",
  },
];

export const BonusSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-[1300px] px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[42px] font-bold text-center text-muted-foreground mb-12 font-[Montserrat]"
        >
          BÔNUS EXCLUSIVOS QUE VÃO TURBINAR SEUS RESULTADOS:
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-background border-4 border-primary rounded-[32px] p-8 space-y-4 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <bonus.icon className="w-12 h-12 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{bonus.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{bonus.description}</p>
                  <p className="text-lg font-bold text-gold">Valor: {bonus.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[20px] p-8 text-center"
        >
          <p className="text-2xl md:text-[32px] font-bold text-primary-foreground">
            VALOR TOTAL DOS BÔNUS: R$ 248,00
          </p>
          <p className="text-xl md:text-[28px] font-bold text-primary-foreground mt-2">
            MAS VOCÊ NÃO VAI PAGAR NADA A MAIS POR ELES
          </p>
          <p className="text-2xl font-bold text-gold mt-4">
            Tudo isso por apenas R$ 37,90
          </p>
        </motion.div>
      </div>
    </section>
  );
};
