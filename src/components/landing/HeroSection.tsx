import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-person.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[819px] bg-background py-12 md:py-24">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[51px] font-bold font-[Montserrat] leading-tight text-primary">
              51 Formas Reais de Fazer{" "}
              <span className="text-cta-green">Renda Extra</span>{" "}
              Começando Ainda Este Mês
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-[26px] font-medium font-[Montserrat] leading-relaxed text-muted-foreground">
              Um guia completo e prático para brasileiros que querem sair do aperto financeiro — com estratégias testadas que funcionam mesmo começando do zero, sem promessas mágicas ou fórmulas impossíveis.
            </h2>

            <Button 
              variant="cta-primary" 
              size="xl" 
              className="w-full md:w-auto md:min-w-[82%] mt-8"
              asChild
            >
              <a href="#preco">QUERO COMEÇAR A GANHAR AGORA</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Pessoa confiante e bem-sucedida trabalhando"
              className="rounded-3xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
