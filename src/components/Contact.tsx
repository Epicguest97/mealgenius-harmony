import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-muted-foreground">Contact</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input placeholder="Name" className="glass-card" />
              <Input type="email" placeholder="Email" className="glass-card" />
              <Textarea placeholder="Message" className="glass-card min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full hover-lift">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};