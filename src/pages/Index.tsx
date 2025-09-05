/*
ПЕРЕМЕННЫЕ ДЛЯ БЫСТРОГО ОНБОРДИНГА:
{бренд}: "ПК-Доктор" - название компании
{город}: "Москва" - основной город обслуживания  
{районы_обслуживания}: "ЦАО, САО, СВАО, ВАО, ЮВАО, ЮАО, ЮЗАО, ЗАО, СЗАО" - районы города
{телефон}: "+7 (900) 123-45-67" - основной телефон
{whatsapp}: "+79001234567" - WhatsApp номер
{telegram}: "@pc_doctor_help" - Telegram username
{email}: "info@pc-doctor.ru" - email для связи
{адрес}: "г. Москва, ул. Профсоюзная, 4" - юридический адрес
{часы_работы}: "Пн-Вс: 08:00-22:00" - график работы
{время_выезда_часы}: "2" - время выезда в часах
{гарантия_дни}: "30" - гарантия в днях
{ставка_час}: "1500" - стоимость за час работы
{UTM_источник}: "landing_cta" - метка для аналитики
*/

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ContactForm from '@/components/ContactForm';
import { Icons } from '@/components/Icons';
import heroImage from '@/assets/hero-image.jpg';
import serviceIcon from '@/assets/service-icon.jpg';

const Index = () => {
  const [timeToArrival, setTimeToArrival] = useState(2);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme toggle functionality
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Simulate dynamic arrival time calculation
  const calculateArrivalTime = (district: string) => {
    const times = {
      'центр': 1,
      'север': 2,
      'юг': 2,
      'восток': 3,
      'запад': 2,
      'удаленка': 0.25 // 15 minutes for remote help
    };
    return times[district as keyof typeof times] || 2;
  };

  const services = [
    {
      icon: <Icons.Computer className="w-8 h-8" />,
      title: "Не включается компьютер",
      description: "Диагностика и ремонт проблем с запуском",
      price: "от 1500",
      popular: true
    },
    {
      icon: <Icons.Activity className="w-8 h-8" />,
      title: "Медленно работает",
      description: "Ускорение системы, очистка от мусора",
      price: "от 1200",
      popular: true
    },
    {
      icon: <Icons.Shield className="w-8 h-8" />,
      title: "Удаление вирусов",
      description: "Полная очистка от вредоносных программ",
      price: "от 1800",
      urgent: true
    },
    {
      icon: <Icons.Wifi className="w-8 h-8" />,
      title: "Настройка Wi-Fi",
      description: "Подключение к интернету, настройка роутера",
      price: "от 1000"
    },
    {
      icon: <Icons.AlertTriangle className="w-8 h-8" />,
      title: "Синий экран (BSOD)",
      description: "Устранение критических ошибок системы",
      price: "от 2000",
      urgent: true
    },
    {
      icon: <Icons.HardDrive className="w-8 h-8" />,
      title: "Замена SSD диска",
      description: "Установка нового диска + перенос данных",
      price: "от 2500"
    },
    {
      icon: <Icons.Laptop className="w-8 h-8" />,
      title: "Установка Windows",
      description: "Чистая установка с сохранением файлов",
      price: "от 2000",
      popular: true
    },
    {
      icon: <Icons.Tools className="w-8 h-8" />,
      title: "Настройка программ",
      description: "Office, 1С, специализированное ПО",
      price: "от 1500"
    }
  ];

  const testimonials = [
    {
      name: "Елена Петрова",
      district: "Центральный район",
      problem: "Установка Windows 11",
      result: "Все установили за час, данные сохранили. Очень довольна!",
      rating: 5
    },
    {
      name: "Михаил Сергеев",
      district: "Северный район",
      problem: "Медленно работал ноутбук",
      result: "Поменяли HDD на SSD, теперь летает как новый. Спасибо!",
      rating: 5
    },
    {
      name: "Анна Кузнецова",
      district: "Восточный район",
      problem: "Вирусы и реклама",
      result: "Почистили от всех вирусов, поставили защиту. Работает отлично!",
      rating: 5
    },
    {
      name: "Владимир Николаев",
      district: "Удалённая помощь",
      problem: "Настройка 1С",
      result: "Помогли удалённо за 30 минут. Очень удобно!",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "Как быстро приедет мастер?",
      answer: "В пределах МКАД — за 1-3 часа в зависимости от района. Точное время сообщим при звонке. Для удалённой помощи подключаемся через 10-15 минут."
    },
    {
      question: "Сколько стоит выезд мастера?",
      answer: "Выезд и диагностика — бесплатно! Оплачиваете только выполненные работы. Если проблему не решили — не платите."
    },
    {
      question: "Какая гарантия на работы?",
      answer: "Даём гарантию 30 дней на все виды работ. Если проблема повторится — устраним бесплатно."
    },
    {
      question: "Безопасно ли давать доступ к компьютеру?",
      answer: "Абсолютно! Мы не получаем доступ к личным файлам без вашего разрешения. При необходимости подписываем соглашение о неразглашении."
    },
    {
      question: "Работаете с лицензионным ПО?",
      answer: "Да, устанавливаем только лицензионные программы. Помогаем с покупкой ключей Office, Windows по льготным ценам."
    },
    {
      question: "Можно ли оплатить картой?",
      answer: "Конечно! Принимаем оплату наличными, картой, переводом на карту или через СБП."
    },
    {
      question: "Что делать, если компьютер вообще не включается?",
      answer: "Не пытайтесь чинить сами! Отключите от сети и дождитесь мастера. Возможна проблема с блоком питания или материнской платой."
    },
    {
      question: "Работаете ли в выходные?",
      answer: "Да, работаем без выходных с 8:00 до 22:00. В праздники — по предварительной договорённости."
    }
  ];

  const workSteps = [
    {
      step: 1,
      title: "Заявка",
      description: "Звоните или заполняете форму",
      icon: <Icons.Phone className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Диагностика",
      description: "Бесплатно определяем проблему",
      icon: <Icons.Tools className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Ремонт",
      description: "Устраняем неисправность",
      icon: <Icons.CheckCircle className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Гарантия",
      description: "30 дней на все работы",
      icon: <Icons.Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={serviceIcon} alt="ПК-Доктор" className="w-8 h-8 rounded" />
            <h1 className="text-xl font-bold text-primary">ПК-Доктор</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Приедем за 2 часа</span>
            <Badge variant="secondary" className="text-xs">Гарантия 30 дней</Badge>
          </div>

          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              aria-label="Переключить тему"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </Button>
            <Button variant="call" size="sm" asChild>
              <a href="tel:+79001234567" aria-label="Позвонить сейчас">
                <Icons.Phone className="w-4 h-4" />
                Позвонить
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Компьютерная помощь на дому в Москве
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Приедем за 2 часа или подключимся удалённо за 15 минут
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg shadow-soft">
                <Icons.Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">Выезд за 2 часа</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg shadow-soft">
                <Icons.Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm">Гарантия 30 дней</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg shadow-soft">
                <Icons.CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">Не починили — не платите</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+79001234567">
                  <Icons.Phone className="w-5 h-5" />
                  Позвонить сейчас
                </a>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a 
                  href="https://wa.me/79001234567?text=Здравствуйте! Нужна помощь с компьютером. Источник: landing_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.WhatsApp className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="telegram" size="xl" asChild>
                <a 
                  href="https://t.me/pc_doctor_help"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.Telegram className="w-5 h-5" />
                  Telegram
                </a>
              </Button>
            </div>

            {/* Arrival Time Calculator */}
            <Card className="max-w-md mx-auto shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Калькулятор времени приезда</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    {['центр', 'север', 'юг', 'восток', 'запад', 'удаленка'].map((district) => (
                      <Button
                        key={district}
                        variant="outline"
                        size="sm"
                        onClick={() => setTimeToArrival(calculateArrivalTime(district))}
                        className="capitalize"
                      >
                        {district === 'удаленка' ? 'Удалённо' : district}
                      </Button>
                    ))}
                  </div>
                  <div className="text-center p-4 bg-primary-light rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {timeToArrival < 1 ? '15 минут' : `${timeToArrival} ${timeToArrival === 1 ? 'час' : 'часа'}`}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Время {timeToArrival < 1 ? 'подключения' : 'приезда'} мастера
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Какие проблемы мы решаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От простых настроек до сложного ремонта — справимся с любой задачей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="relative hover:shadow-medium transition-all duration-300 group cursor-pointer">
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-gradient-hero text-white">
                    Популярно
                  </Badge>
                )}
                {service.urgent && (
                  <Badge className="absolute -top-2 -right-2 bg-gradient-accent text-white">
                    Срочно
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 p-3 bg-primary-light rounded-full text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-xl font-bold text-primary mb-4">{service.price} ₽</div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Решить проблему
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">Простой и понятный процесс решения проблем</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {step.step}
                </div>
                <div className="w-12 h-12 mx-auto mb-4 p-2 bg-primary-light rounded-full text-primary">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < workSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Help Section */}
      <section className="py-16 bg-accent-light/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto text-center shadow-large border-accent/20">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center text-white">
                <Icons.Clock className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl md:text-3xl text-accent">Срочная компьютерная помощь</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-6">
                Компьютер сломался в самый неподходящий момент? Выезжаем в течение 2 часов!
                Для удалённой помощи подключаемся через 10-15 минут.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="call" size="xl" asChild>
                  <a href="tel:+79001234567">
                    <Icons.Phone className="w-5 h-5" />
                    Позвонить прямо сейчас
                  </a>
                </Button>
                <Button variant="whatsapp" size="xl" asChild>
                  <a 
                    href="https://wa.me/79001234567?text=СРОЧНО! Нужна компьютерная помощь!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.WhatsApp className="w-5 h-5" />
                    Срочно в WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-muted-foreground">Реальные отзывы, контакты по запросу</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.district}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icons.Star key={i} className="w-4 h-4 text-yellow-500" filled />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium mb-2">Проблема: {testimonial.problem}</p>
                  <p className="text-sm text-muted-foreground">"{testimonial.result}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании ПК-Доктор</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">7 лет опыта</strong> в сфере компьютерной помощи на дому. 
                    Помогли уже более 3000 клиентов в Москве и области.
                  </p>
                  <p>
                    Наши мастера имеют профильное образование и сертификаты Microsoft, что гарантирует 
                    качественное решение любых проблем с техникой.
                  </p>
                  <div className="grid grid-cols-2 gap-4 my-6">
                    <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                      <div className="text-2xl font-bold text-primary">3000+</div>
                      <div className="text-sm">Довольных клиентов</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                      <div className="text-2xl font-bold text-secondary">7</div>
                      <div className="text-sm">Лет на рынке</div>
                    </div>
                  </div>
                  <p>
                    <strong className="text-foreground">Принципы работы:</strong> честность, прозрачность цен, 
                    конфиденциальность. Не получаем доступ к личным файлам без разрешения. 
                    При необходимости подписываем соглашение о неразглашении.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src={serviceIcon} 
                  alt="Сертифицированный мастер ПК-Доктор" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-large"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Гарантии и безопасность</h2>
            <p className="text-xl text-muted-foreground">Ваше спокойствие — наш приоритет</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <Icons.Shield className="w-12 h-12 mx-auto text-secondary mb-4" />
                <CardTitle>Гарантия 30 дней</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  На все виды работ даём гарантию 30 дней. Если проблема повторится — 
                  устраним бесплатно.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <Icons.CheckCircle className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>No Fix — No Fee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Если не смогли решить проблему — не платите за работу. 
                  Диагностика всегда бесплатна.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <Icons.HardDrive className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle>Безопасность данных</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Делаем резервные копии перед любыми изменениями. 
                  Конфиденциальность гарантирована.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы наших клиентов</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 shadow-soft">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Зона обслуживания</h2>
            <p className="text-xl text-muted-foreground">Работаем по всей Москве и области</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Icons.MapPin className="w-6 h-6 text-primary" />
                  Районы Москвы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-primary-light rounded-lg">
                    <h4 className="font-semibold mb-2">Центральный АО</h4>
                    <p className="text-sm text-muted-foreground">Время выезда: 1 час</p>
                  </div>
                  <div className="p-4 bg-primary-light rounded-lg">
                    <h4 className="font-semibold mb-2">Северный АО</h4>
                    <p className="text-sm text-muted-foreground">Время выезда: 2 часа</p>
                  </div>
                  <div className="p-4 bg-primary-light rounded-lg">
                    <h4 className="font-semibold mb-2">Восточный АО</h4>
                    <p className="text-sm text-muted-foreground">Время выезда: 3 часа</p>
                  </div>
                  <div className="p-4 bg-primary-light rounded-lg">
                    <h4 className="font-semibold mb-2">Южный АО</h4>
                    <p className="text-sm text-muted-foreground">Время выезда: 2 часа</p>
                  </div>
                  <div className="p-4 bg-primary-light rounded-lg">
                    <h4 className="font-semibold mb-2">Западный АО</h4>
                    <p className="text-sm text-muted-foreground">Время выезда: 2 часа</p>
                  </div>
                  <div className="p-4 bg-accent-light rounded-lg">
                    <h4 className="font-semibold mb-2">Удалённая помощь</h4>
                    <p className="text-sm text-muted-foreground">Подключение: 15 минут</p>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    <strong>Адрес:</strong> г. Москва, ул. Профсоюзная, 4<br />
                    <strong>График работы:</strong> Пн-Вс: 08:00-22:00
                  </p>
                  <Badge variant="secondary">Также работаем в Московской области</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Contacts */}
      <section id="contact-form" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Выберите удобный способ связи</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icons.Phone className="w-5 h-5 text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">+7 (900) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Звоните круглосуточно, ответим в рабочее время</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="shadow-soft">
                  <CardContent className="p-4 text-center">
                    <Icons.WhatsApp className="w-8 h-8 mx-auto mb-2 text-[#25D366]" />
                    <Button variant="whatsapp" size="sm" className="w-full" asChild>
                      <a href="https://wa.me/79001234567?text=Здравствуйте! Нужна компьютерная помощь">
                        WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-4 text-center">
                    <Icons.Telegram className="w-8 h-8 mx-auto mb-2 text-[#0088cc]" />
                    <Button variant="telegram" size="sm" className="w-full" asChild>
                      <a href="https://t.me/pc_doctor_help">
                        Telegram
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <strong>Email:</strong> info@pc-doctor.ru
                    </div>
                    <div>
                      <strong>Адрес:</strong> г. Москва, ул. Профсоюзная, 4
                    </div>
                    <div>
                      <strong>График работы:</strong> Пн-Вс: 08:00-22:00
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center p-4 bg-secondary-light rounded-lg">
                <p className="text-sm font-medium text-secondary">
                  🔒 Гарантируем конфиденциальность ваших данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={serviceIcon} alt="ПК-Доктор" className="w-8 h-8 rounded" />
                <h3 className="text-lg font-bold">ПК-Доктор</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Профессиональная компьютерная помощь на дому в Москве с 2017 года
              </p>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://wa.me/79001234567" aria-label="WhatsApp">
                    <Icons.WhatsApp className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://t.me/pc_doctor_help" aria-label="Telegram">
                    <Icons.Telegram className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Ремонт компьютеров</li>
                <li>Установка Windows</li>
                <li>Удаление вирусов</li>
                <li>Настройка Wi-Fi</li>
                <li>Замена SSD</li>
                <li>Удалённая помощь</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (900) 123-45-67</li>
                <li>info@pc-doctor.ru</li>
                <li>ул. Профсоюзная, 4</li>
                <li>Пн-Вс: 08:00-22:00</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-foreground">Публичная оферта</a></li>
                <li><a href="#" className="hover:text-foreground">Гарантии</a></li>
                <li><a href="#" className="hover:text-foreground">О компании</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ПК-Доктор. Все права защищены.</p>
            <p className="mt-2">
              ИП Иванов И.И. | ИНН: 123456789012 | ОГРНИП: 123456789012345
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t shadow-large">
        <div className="grid grid-cols-3 gap-1 p-2">
          <Button variant="call" size="sm" className="text-xs" asChild>
            <a href="tel:+79001234567">
              <Icons.Phone className="w-4 h-4" />
              Позвонить
            </a>
          </Button>
          <Button variant="whatsapp" size="sm" className="text-xs" asChild>
            <a href="https://wa.me/79001234567?text=Нужна помощь с компьютером">
              <Icons.WhatsApp className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
          <Button variant="telegram" size="sm" className="text-xs" asChild>
            <a href="https://t.me/pc_doctor_help">
              <Icons.Telegram className="w-4 h-4" />
              Telegram
            </a>
          </Button>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ПК-Доктор",
          "description": "Профессиональная компьютерная помощь на дому в Москве. Выезд мастера за 2 часа, гарантия 30 дней.",
          "url": "https://pc-doctor.ru",
          "telephone": "+7-900-123-45-67",
          "email": "info@pc-doctor.ru",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Профсоюзная, 4",
            "addressLocality": "Москва",
            "addressCountry": "RU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "55.7558",
            "longitude": "37.6176"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "22:00"
          },
          "serviceArea": {
            "@type": "Place",
            "name": "Москва и Московская область"
          },
          "priceRange": "от 1000₽",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "156"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Компьютерные услуги",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ремонт компьютеров на дому"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Установка Windows"
                }
              }
            ]
          }
        })}
      </script>
    </div>
  );
};

export default Index;

/*
ИНСТРУКЦИИ ПО КАСТОМИЗАЦИИ:

1. ЗАМЕНА ПЕРЕМЕННЫХ:
   - Найти и заменить все {переменные} на актуальные данные
   - Обновить номера телефонов, ссылки на мессенджеры
   - Изменить название компании, города, районы

2. НАСТРОЙКА ЦЕН:
   - Изменить массив services - цены и описания услуг
   - Обновить {ставка_час} и {фикс_цены}

3. ВКЛЮЧЕНИЕ/ВЫКЛЮЧЕНИЕ БЛОКОВ:
   - Закомментировать ненужные секции
   - Изменить порядок блоков
   - Добавить новые услуги в массив services

4. НАСТРОЙКА ФОРМ:
   - Заменить Formspree URL или настроить backend
   - Обновить валидацию полей
   - Изменить список районов в селекте

ЧЕКЛИСТ ПУБЛИКАЦИИ:

□ Заменить все переменные на реальные данные
□ Настроить домен и SSL сертификат  
□ Проверить все ссылки и номера телефонов
□ Настроить аналитику (GTM, Яндекс.Метрика)
□ Проверить Lighthouse (должно быть >90 по всем метрикам)
□ Валидировать HTML и структурированные данные
□ Протестировать на мобильных устройствах
□ Настроить редиректы и 404 страницу
□ Добавить в Google Search Console и Яндекс.Вебмастер
□ Создать карту сайта (sitemap.xml)
*/