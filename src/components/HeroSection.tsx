
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-gradient min-h-screen pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Smart Hospital Bed Management
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Optimize patient care with our intelligent bed allocation system.
            Real-time updates and AI-powered recommendations at your fingertips.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="animate-slide-up" 
              style={{ animationDelay: "0.2s" }}
              onClick={() => navigate("/auth")}
            >
              Login Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="animate-slide-up" 
              style={{ animationDelay: "0.4s" }}
              onClick={() => navigate("/learn-more")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
