import { Card } from "@/components/ui/card";

const clients = [
  {
    name: "TechFlow Solutions",
    logo: "TF",
    industry: "FinTech",
    description: "Leading financial technology platform serving 100K+ users"
  },
  {
    name: "InnovateLabs",
    logo: "IL", 
    industry: "Healthcare",
    description: "Revolutionary healthcare AI solutions provider"
  },
  {
    name: "GrowthMetrics",
    logo: "GM",
    industry: "Analytics",
    description: "Advanced business intelligence and data analytics"
  },
  {
    name: "CloudFirst Corp",
    logo: "CF",
    industry: "Cloud Services",
    description: "Enterprise cloud infrastructure specialists"
  },
  {
    name: "AutoFlow Systems",
    logo: "AS",
    industry: "Manufacturing",
    description: "Industrial automation and process optimization"
  },
  {
    name: "NextGen Digital",
    logo: "ND",
    industry: "E-commerce",
    description: "Digital commerce platform and marketplace solutions"
  },
  {
    name: "SecureNet Pro",
    logo: "SP",
    industry: "Cybersecurity",
    description: "Advanced cybersecurity and threat protection"
  },
  {
    name: "DataDrive Analytics",
    logo: "DD",
    industry: "Big Data",
    description: "Machine learning and predictive analytics platform"
  }
];

const industries = [
  "FinTech", "Healthcare", "E-commerce", "Manufacturing", 
  "Education", "Real Estate", "Retail", "Logistics"
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-background" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
            Our Clients
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            From startups to Fortune 500 companies, we've helped businesses across 
            industries achieve their technology goals.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-16">
          {clients.map((client, index) => (
            <Card 
              key={index}
              className="group relative p-6 border-0 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Client Logo/Initial */}
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {client.logo}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </h3>
                  <div className="text-sm text-primary font-medium">
                    {client.industry}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-foreground">
            Industries We Serve
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-muted border border-border rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-pointer"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center space-y-6">
          <h3 className="text-3xl font-bold text-foreground">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our proven solutions can accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;