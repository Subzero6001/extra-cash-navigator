import { motion } from "framer-motion";
import { X, Check, Swords } from "lucide-react";

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
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-cream to-background">
      <div className="container mx-auto max-w-[1400px] px-4">
        {/* VS Badge Central */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl animate-glow-pulse" />
            <div className="relative bg-gradient-to-br from-gold-light via-gold to-bronze p-6 rounded-full shadow-luxury">
              <Swords className="w-16 h-16 text-primary" />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Linha Vertical Divisória */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold/50 to-transparent -translate-x-1/2" />

          {/* Lado NEGATIVO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-4 border-red-300 rounded-[32px] p-8 md:p-12 space-y-6 h-full shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-8">
                OUTROS CURSOS DE RENDA EXTRA
              </h3>
              <div className="space-y-5">
                {otherProducts.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-4 bg-white/50 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="bg-red-500 p-2 rounded-full flex-shrink-0">
                      <X className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed pt-1">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lado POSITIVO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-light-green to-cta-green/20 border-4 border-cta-green rounded-[32px] p-8 md:p-12 space-y-6 h-full shadow-luxury relative overflow-hidden">
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent pointer-events-none" />
              
              <h3 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 relative">
                51 FORMAS DE FAZER RENDA EXTRA
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                />
              </h3>
              <div className="space-y-5 relative">
                {ourProduct.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-cta-green/20 hover:border-gold/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-cta-green to-primary p-2 rounded-full flex-shrink-0 shadow-md">
                      <Check className="w-6 h-6 text-gold" />
                    </div>
                    <p className="text-lg text-foreground font-semibold leading-relaxed pt-1">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Banner Resultado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative mt-12"
        >
          <LeatherTexture className="rounded-3xl overflow-hidden shadow-luxury">
            <div className="relative bg-gradient-to-r from-primary via-cta-green to-primary p-8 md:p-12 text-center">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/10 pointer-events-none" />
              
              <div className="relative flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="bg-gold p-3 rounded-full shadow-gold-glow">
                  <Swords className="w-10 h-10 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-pearl leading-tight max-w-[900px]">
                  <span className="text-gold">RESULTADO:</span> Enquanto outros complicam e cobram caro, nós entregamos 51 caminhos reais por menos de R$ 40.
                </p>
              </div>
            </div>
          </LeatherTexture>
        </motion.div>
      </div>
    </section>
  );
};

const LeatherTexture = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};
