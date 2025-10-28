import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Базовая",
      price: "Бесплатно",
      features: [
        "Доступ к основной игре",
        "Одиночный режим",
        "Базовые персонажи",
        "Рекламная поддержка",
      ],
      cta: "Скачать",
      highlighted: false,
    },
    {
      name: "Премиум",
      price: "999₽",
      period: "/месяц",
      features: [
        "Все функции базовой версии",
        "Без рекламы",
        "Эксклюзивные персонажи",
        "Приоритетная поддержка",
        "Ранний доступ к обновлениям",
      ],
      cta: "Начать",
      highlighted: true,
    },
    {
      name: "Легенда",
      price: "2499₽",
      period: "/месяц",
      features: [
        "Все функции премиум",
        "Уникальные скины",
        "VIP статус в сообществе",
        "Персональный менеджер",
        "Закрытые турниры",
      ],
      cta: "Стать легендой",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Выберите свой план</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Начните играть бесплатно или разблокируйте премиум возможности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-card rounded-2xl p-8 border-2 transition-all hover:scale-105 animate-fade-in-up ${
                  plan.highlighted
                    ? "border-accent shadow-2xl"
                    : "border-border hover:border-accent"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.highlighted && (
                  <div className="bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Популярный
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-accent hover:bg-accent/90 text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
