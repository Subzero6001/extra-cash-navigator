import { motion } from "framer-motion";
import { X, Check, Target } from "lucide-react";

const otherProducts = [
  "Cursos de R$ 1.000+ que não cabem no seu bolso",
  "Métodos complicados que só funcionam na teoria",
  "Exigem capital alto pra começar",
  'Promessas irreais de "fique rico em 30 dias"',
  "Linguagem técnica que você não entende",
];

const ourProduct = [
  "Investimento de apenas R$ 37,90",
  "51 estratégias práticas e testadas",
  "Começa com pouco ou nenhum capital",
  "Resultados realistas e alcançáveis",
  "Linguagem clara e direta",
];

export const ComparisonSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFE5E5] rounded-[25px] p-8 md:p-12 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#E05757] text-center font-[Montserrat]">
              OUTROS CURSOS DE RENDA EXTRA
            </h3>
            <div className="space-y-4">
              {otherProducts.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-6 h-6 text-[#E05757] flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-light-green border-4 border-cta-green rounded-[25px] p-8 md:p-12 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center font-[Montserrat]">
              51 FORMAS DE FAZER RENDA EXTRA
            </h3>
            <div className="space-y-4">
              {ourProduct.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-cta-green flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[20px] p-8 mt-8 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <Target className="w-8 h-8 text-primary-foreground" />
            <p className="text-xl md:text-[30px] font-bold text-primary-foreground">
              RESULTADO: Enquanto outros complicam e cobram caro, nós entregamos 51 caminhos reais por menos de R$ 40.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
