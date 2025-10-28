import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-wider text-foreground hover:text-accent transition-colors animate-slide-in-left"
          >
            THE LAST SHOT
          </Link>
          
          <div className="flex items-center gap-8 animate-slide-in-right">
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/pricing") ? "text-accent" : "text-foreground"
              }`}
            >
              Цены
            </Link>
            <Link
              to="/community"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/community") ? "text-accent" : "text-foreground"
              }`}
            >
              Сообщество
            </Link>
            <Link to="/auth">
              <Button variant="outline" size="sm" className="hover:bg-accent hover:text-white hover:border-accent transition-all">
                Войти
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
