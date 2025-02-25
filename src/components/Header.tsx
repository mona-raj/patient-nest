
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Button variant="ghost" onClick={() => handleNavigation("/auth")}>
                    Login
                  </Button>
                  <Button variant="ghost" onClick={() => handleNavigation("/auth")}>
                    Register
                  </Button>
                  <Button variant="ghost" onClick={() => handleNavigation("/learn-more")}>
                    Learn More
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
            <h1 className="text-xl font-semibold text-foreground">MediSync</h1>
          </div>
          <nav className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/learn-more")}>
              Learn More
            </Button>
            <Button variant="default" onClick={() => navigate("/auth")}>
              Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
