import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center section-padding relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block animate-fade-down px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent text-accent-foreground">
            Introducing Innovation
          </span>
          <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance mb-6">
            Transform Your Digital Experience
          </h1>
          <p className="animate-fade-up animation-delay-150 text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
            Experience the perfect blend of design and functionality. Create something extraordinary with our innovative platform.
          </p>
          <div className="animate-fade-up animation-delay-300 space-x-4">
            <Button size="lg" className="hover-lift">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    </section>
  );
};