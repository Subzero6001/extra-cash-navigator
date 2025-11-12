import { motion } from "framer-motion";
import { BarChart3, CheckSquare, MessageSquare, GraduationCap, Gift } from "lucide-react";

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
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-light-green to-background">
      <div className="container mx-auto max-w-[1400px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Gift className="w-12 h-12 text-gold" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              BÔNUS EXCLUSIVOS
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Que vão turbinar seus resultados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
              <div className="relative bg-pearl border-4 border-gold/30 group-hover:border-gold/60 rounded-3xl p-8 shadow-premium group-hover:shadow-luxury transition-all">
                <div className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-cta-green to-primary p-4 rounded-2xl shadow-lg">
                    <bonus.icon className="w-10 h-10 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{bonus.title}</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">{bonus.description}</p>
                    <p className="text-2xl font-bold text-gold">Valor: {bonus.value}</p>
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
          className="relative bg-gradient-to-br from-primary via-cta-green to-primary rounded-3xl p-8 md:p-12 text-center shadow-luxury overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/10 pointer-events-none" />
          <div className="relative">
            <p className="text-3xl md:text-4xl font-bold text-pearl mb-4">
              VALOR TOTAL DOS BÔNUS: <span className="text-gold">R$ 248,00</span>
            </p>
            <p className="text-2xl md:text-3xl font-bold text-pearl mb-6">
              MAS VOCÊ NÃO VAI PAGAR NADA A MAIS POR ELES
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gold">
              Tudo isso por apenas R$ 37,90
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
