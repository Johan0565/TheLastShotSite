import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 border border-border shadow-xl animate-scale-in">
            <h1 className="text-3xl font-bold mb-6 text-center text-foreground">
              {isLogin ? "Войти в аккаунт" : "Создать аккаунт"}
            </h1>

            <form className="space-y-6">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="username">Имя пользователя</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Введите имя"
                    className="bg-background border-border focus:border-accent"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-background border-border focus:border-accent"
                />
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-white" size="lg">
                {isLogin ? "Войти" : "Зарегистрироваться"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {isLogin ? "Нет аккаунта? Зарегистрируйтесь" : "Уже есть аккаунт? Войдите"}
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-center text-muted-foreground mb-4">
                Или войдите через
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="hover:bg-accent hover:text-white hover:border-accent">
                  Google
                </Button>
                <Button variant="outline" className="hover:bg-accent hover:text-white hover:border-accent">
                  Steam
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
