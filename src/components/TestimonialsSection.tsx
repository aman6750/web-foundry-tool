import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    company: "TechFlow Solutions",
    content: "Their AI automation transformed our workflow efficiency by 300%. What used to take hours now happens automatically. Incredible ROI and seamless implementation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO, InnovateLabs",
    company: "InnovateLabs",
    content: "Best cloud migration we've experienced. Zero downtime, 40% cost reduction, and their team guided us through every step. Professional excellence at its finest.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Emily Watson",
    role: "Founder, GrowthMetrics",
    company: "GrowthMetrics",
    content: "Their web development expertise is unmatched. Built us a scalable platform that handles 10x traffic growth. Clean code, beautiful design, flawless execution.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            Real results from real businesses. See how we've helped companies 
            transform their technology and accelerate growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative p-8 border-0 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-foreground leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-primary text-sm font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">99.9%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">1000+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;