import { Apple, Smartphone, Gamepad2 } from "lucide-react";

const PlatformLogos = () => {
  const platforms = [
    { name: "iOS", icon: Apple, delay: "0ms" },
    { name: "Android", icon: Smartphone, delay: "100ms" },
    { name: "Nintendo", icon: Gamepad2, delay: "200ms" },
  ];

  return (
    <div className="flex items-center justify-center gap-8 mt-8">
      {platforms.map((platform) => (
        <div
          key={platform.name}
          className="flex flex-col items-center gap-2 animate-fade-in-up opacity-0"
          style={{ 
            animationDelay: platform.delay,
            animationFillMode: "forwards"
          }}
        >
          <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110">
            <platform.icon className="w-6 h-6 text-foreground" />
          </div>
          <span className="text-xs text-muted-foreground">{platform.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PlatformLogos;
