import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Cloud, MessageSquare, Bot, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Scalable websites & apps",
    details: "Custom web applications built with cutting-edge frameworks. From responsive websites to complex web platforms that grow with your business.",
    features: ["React & Next.js", "Mobile-First Design", "Performance Optimized", "SEO Ready"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions", 
    description: "Secure hosting & migration",
    details: "Seamless cloud migration and hosting solutions. Leverage AWS, Azure, or Google Cloud for maximum scalability and security.",
    features: ["Cloud Migration", "Auto-Scaling", "Security First", "Cost Optimization"]
  },
  {
    icon: MessageSquare,
    title: "IT Consulting",
    description: "Strategy & tech expertise", 
    details: "Strategic technology consulting to align your IT infrastructure with business goals. Expert guidance for digital transformation.",
    features: ["Digital Strategy", "Tech Audits", "Process Optimization", "Team Training"]
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Smarter processes for efficiency",
    details: "Intelligent automation solutions powered by AI. Streamline operations, reduce costs, and boost productivity with smart workflows.",
    features: ["Process Automation", "AI Integration", "Smart Analytics", "Custom Workflows"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Comprehensive Tech Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            From concept to deployment, we provide end-to-end technology services 
            that drive real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative p-8 border-0 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-glow/20 rounded-full blur-sm group-hover:bg-primary-glow/40 transition-colors duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-primary font-semibold">
                  {service.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {service.details}
                </p>

                {/* Features List */}
                <ul className="space-y-2 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Button 
                  variant="ghost" 
                  className="group/btn mt-6 p-0 h-auto text-primary hover:text-primary-glow font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            Get Custom Solution
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;