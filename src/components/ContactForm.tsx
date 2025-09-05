import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    problem: '',
    agreement: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 15 минут",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        district: '',
        problem: '',
        agreement: false
      });
    }, 1000);
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.startsWith('8')) {
      return '+7' + cleaned.slice(1);
    }
    if (cleaned.startsWith('7')) {
      return '+' + cleaned;
    }
    if (cleaned.length <= 10) {
      return '+7' + cleaned;
    }
    return '+' + cleaned;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-large">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Вызвать мастера
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Ответим за 5 минут, приедем за 2 часа
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя</Label>
            <Input
              id="name"
              type="text"
              placeholder="Как к вам обращаться?"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              className="focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="district">Район</Label>
            <Select 
              value={formData.district} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, district: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите район" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="центр">Центральный</SelectItem>
                <SelectItem value="север">Северный</SelectItem>
                <SelectItem value="юг">Южный</SelectItem>
                <SelectItem value="восток">Восточный</SelectItem>
                <SelectItem value="запад">Западный</SelectItem>
                <SelectItem value="удаленка">Удалённая работа</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem">Опишите проблему</Label>
            <Select 
              value={formData.problem} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, problem: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Что случилось с техникой?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="не_включается">Не включается</SelectItem>
                <SelectItem value="тормозит">Медленно работает</SelectItem>
                <SelectItem value="вирусы">Вирусы/реклама</SelectItem>
                <SelectItem value="wifi">Проблемы с Wi-Fi</SelectItem>
                <SelectItem value="синий_экран">Синий экран</SelectItem>
                <SelectItem value="установка">Установка программ</SelectItem>
                <SelectItem value="backup">Настройка резервного копирования</SelectItem>
                <SelectItem value="другое">Другое</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="agreement"
              checked={formData.agreement}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, agreement: checked === true }))
              }
            />
            <Label 
              htmlFor="agreement" 
              className="text-sm text-muted-foreground cursor-pointer"
            >
              Согласен на обработку персональных данных
            </Label>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            variant="hero" 
            size="lg" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправляем...' : 'Вызвать мастера'}
          </Button>

          <div className="text-center text-xs text-muted-foreground">
            Или позвоните прямо сейчас: 
            <a href="tel:+79001234567" className="text-primary font-medium"> +7 (900) 123-45-67</a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;