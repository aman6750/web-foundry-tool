import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern tech workspace with digital interfaces and AI automation"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent-foreground/20 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Hook Line */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm">
              ✨ Transform Your Business with Smart Technology
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-foreground">Innovate.</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Scale.
            </span>
            <span className="block text-foreground">Dominate.</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We craft cutting-edge digital solutions that propel your business into the future. 
            From AI-powered automation to cloud-native applications, we make technology work for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              className="group px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              Book a 15 Min Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/5 transition-all duration-300"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 space-y-4">
            <p className="text-muted-foreground font-medium">Trusted by 500+ businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-2xl font-bold text-primary">24/7</div>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <span>Projects Delivered</span>
              <span>Uptime Guarantee</span>
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;