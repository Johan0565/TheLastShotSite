import Navigation from "@/components/Navigation";
import PlatformLogos from "@/components/PlatformLogos";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import gamePoster from "@/assets/game-poster.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
            <div className="w-full max-w-5xl mx-auto animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img
                  src={gamePoster}
                  alt="THE LAST SHOT Game Poster"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-12 text-center">
                  <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up tracking-tight">
                    THE LAST SHOT
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "200ms" }}>
                    Выживайте в мире зомби-апокалипсиса. Каждый выстрел может стать последним.
                  </p>
                  
                  <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Скачать игру
                    </Button>
                  </div>
                  
                  <PlatformLogos />
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl animate-fade-in" style={{ animationDelay: "600ms" }}>
              <div className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground">Обширный геймплей</h3>
                <p className="text-muted-foreground">Захватывающие сражения в режиме реального времени</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground">Простая Low Poly графика</h3>
                <p className="text-muted-foreground">Стильные визуальные эффекты в минималистичном стиле</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground">Мультиплеер</h3>
                <p className="text-muted-foreground">Соревнуйтесь с игроками со всего мира</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
