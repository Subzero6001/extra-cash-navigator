import { HeroSection } from "@/components/landing/HeroSection";
import { EmotionalConnection } from "@/components/landing/EmotionalConnection";
import { TargetAudience } from "@/components/landing/TargetAudience";
import { BenefitsGrid } from "@/components/landing/BenefitsGrid";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { Testimonials } from "@/components/landing/Testimonials";
import { BonusSection } from "@/components/landing/BonusSection";
import { PriceSection } from "@/components/landing/PriceSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";

const RendaExtraLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EmotionalConnection />
      <TargetAudience />
      <BenefitsGrid />
      <ComparisonSection />
      <Testimonials />
      <BonusSection />
      <PriceSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA />
      
      <footer className="bg-primary py-8 text-center text-primary-foreground">
        <p className="text-sm">
          © 2024 51 Formas de Fazer Renda Extra. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default RendaExtraLanding;
