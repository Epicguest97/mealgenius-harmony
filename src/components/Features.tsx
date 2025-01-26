import { Card } from "@/components/ui/card";
import { LucideIcon, Zap, Shield, Smartphone } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => (
  <Card className="glass-card p-6 hover-lift">
    <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </Card>
);

export const Features = () => {
  const features = [
    {
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized platform.",
      Icon: Zap,
    },
    {
      title: "Secure by Design",
      description: "Your data is protected with enterprise-grade security measures.",
      Icon: Shield,
    },
    {
      title: "Mobile First",
      description: "Perfectly optimized for all devices and screen sizes.",
      Icon: Smartphone,
    },
  ];

  return (
    <section className="section-padding bg-accent/30">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground">Features</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Designed for Excellence</h2>
          <p className="text-muted-foreground text-balance">
            Every feature is crafted with precision and purpose, ensuring an exceptional user experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};