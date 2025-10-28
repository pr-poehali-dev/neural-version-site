import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Brain",
      title: "Claude 3.5 Sonnet",
      description: "Последняя версия языковой модели от Anthropic"
    },
    {
      icon: "Zap",
      title: "200K токенов",
      description: "Контекстное окно для работы с большими объёмами данных"
    },
    {
      icon: "Code",
      title: "Программирование",
      description: "Специализация на разработке и анализе кода"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Встроенные механизмы защиты и этические принципы"
    }
  ];

  const specs = [
    { label: "Модель", value: "Claude 3.5 Sonnet" },
    { label: "Разработчик", value: "Anthropic" },
    { label: "Контекст", value: "200,000 токенов" },
    { label: "Релиз", value: "2024" },
    { label: "Специализация", value: "Code & Analysis" },
    { label: "Версия API", value: "2023-06-01" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full mb-6 border border-border">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">AI Assistant</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Claude 3.5 Sonnet
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Современная языковая модель с расширенными возможностями для программирования, анализа и творческих задач
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon as any} size={24} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-card border-border animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
            Технические характеристики
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div 
                key={index}
                className="flex justify-between items-center p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <span className="text-muted-foreground font-medium">
                  {spec.label}
                </span>
                <span className="font-montserrat font-semibold text-foreground">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={20} className="text-primary mt-1" />
              <div>
                <h3 className="font-montserrat font-semibold mb-2">
                  О версии
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Claude 3.5 Sonnet представляет собой баланс между производительностью и качеством ответов. 
                  Модель оптимизирована для решения сложных задач программирования, аналитики и работы с большими объёмами текста.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Powered by{" "}
            <span className="text-primary font-semibold font-montserrat">
              Anthropic
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
