import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Trophy, Calendar } from "lucide-react";

const Community = () => {
  const stats = [
    { icon: Users, label: "Активных игроков", value: "250K+" },
    { icon: MessageCircle, label: "Сообщений в день", value: "15K+" },
    { icon: Trophy, label: "Турниров проведено", value: "500+" },
    { icon: Calendar, label: "Ежедневных событий", value: "10+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Присоединяйтесь к сообществу</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Миллионы игроков по всему миру уже играют вместе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-all hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-accent mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent transition-all animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Discord сервер</h3>
              <p className="text-muted-foreground mb-6">
                Общайтесь с другими игроками, находите союзников и участвуйте в эксклюзивных событиях
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Присоединиться
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent transition-all animate-fade-in-up" style={{ animationDelay: "500ms" }}>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Форум</h3>
              <p className="text-muted-foreground mb-6">
                Обсуждайте стратегии, делитесь опытом и получайте помощь от сообщества
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Открыть форум
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-12 text-center border border-accent/20 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Следите за нами в соцсетях</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Будьте в курсе последних новостей, обновлений и эксклюзивного контента
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {["Twitter", "Instagram", "YouTube", "Twitch"].map((social) => (
                <Button
                  key={social}
                  variant="outline"
                  className="hover:bg-accent hover:text-white hover:border-accent transition-all"
                >
                  {social}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
