'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { CircleCheck, CreditCard, Calendar, FileText, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

const WazanConsultation = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [otp, setOtp] = useState(['', '', '', '']);

  const services = [
    {
      id: 1,
      title: "استشارة مالية أساسية",
      description: "جلسة استشارية لمدة ساعة مع مدير ثروات معتمد",
      price: "500 ريال",
      features: ["تحليل مالي شامل", "خطة استثمارية", "متابعة لمدة شهر"]
    },
    {
      id: 2,
      title: "تخطيط مالي شامل",
      description: "خطة مالية مفصلة مع متابعة لمدة 3 أشهر",
      price: "1,500 ريال",
      features: ["تحليل محفظة كامل", "خطة ادخار", "استشارات غير محدودة"]
    },
    {
      id: 3,
      title: "إدارة محفظة استثمارية",
      description: "إدارة كاملة للمحفظة مع تقارير شهرية",
      price: "2,500 ريال",
      features: ["إدارة محفظة احترافية", "تقارير أسبوعية", "دعم مستمر"]
    }
  ];

  const steps = [
    "اختيار الخدمة",
    "التحقق",
    "الدفع",
    "حجز موعد",
    "تعبئة النموذج",
    "التأكيد"
  ];

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Move to next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const Logo = () => (
    <div className="flex items-center gap-2 text-4xl font-bold text-primary">
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
        W
      </div>
      <span>وزان</span>
    </div>
  );

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">اختر الخدمة المناسبة لاحتياجاتك المالية</h2>
              <p className="text-gray-500 text-lg">نقدم لك مجموعة من الخدمات المالية المتكاملة</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rtl">
              {services.map((service) => (
                <Card 
                  key={service.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedService?.id === service.id ? 'border-primary border-2' : ''
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CircleCheck className="text-primary h-5 w-5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="text-primary font-bold text-xl">{service.price}</div>
                    <Button>اختيار الخدمة</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <Card className="w-full max-w-md mx-auto rtl">
            <CardHeader>
              <CardTitle className="text-2xl">التحقق من رقم الجوال</CardTitle>
              <CardDescription className="text-lg">أدخل رمز التحقق المرسل إلى جوالك</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center items-center gap-4">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    className="w-14 h-14 text-center text-2xl"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                  />
                ))}
              </div>
              <div className="text-center">
                <Button variant="link" className="text-primary">
                  إعادة إرسال الرمز
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      
      case 3:
        return (
          <Card className="w-full max-w-md mx-auto rtl">
            <CardHeader>
              <CardTitle className="text-2xl">إتمام الدفع</CardTitle>
              <CardDescription className="text-lg">الرجاء إدخال تفاصيل البطاقة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-6 border rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <CreditCard className="text-primary h-6 w-6" />
                    <div className="font-bold">معلومات الدفع</div>
                  </div>
                  <div className="space-y-4">
                    <Input placeholder="رقم البطاقة" />
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="MM/YY" />
                      <Input placeholder="CVV" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      // ... (Keep other cases similar to previous implementation but with enhanced styling)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <Logo />
            <Button variant="outline">تسجيل الدخول</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        <div className="max-w-4xl mx-auto">
          <Progress value={(step / steps.length) * 100} className="h-3" />
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            {steps.map((stepName, index) => (
              <div
                key={index}
                className={`${
                  index + 1 <= step ? 'text-primary font-bold' : ''
                }`}
              >
                {stepName}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          {renderStepContent()}
        </div>

        <div className="flex justify-between mt-8 max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className="flex items-center gap-2"
          >
            <ChevronRight className="h-4 w-4" />
            السابق
          </Button>
          <Button
            onClick={() => setStep(step + 1)}
            disabled={step === 6 || (step === 1 && !selectedService)}
            className="flex items-center gap-2"
          >
            {step === steps.length ? 'تأكيد' : 'التالي'}
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default WazanConsultation;