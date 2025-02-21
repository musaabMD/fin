import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CircleCheck, CreditCard, Calendar, FileText } from 'lucide-react';

const ConsultationFlow = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "استشارة مالية أساسية",
      description: "جلسة استشارية لمدة ساعة مع مدير ثروات معتمد",
      price: "500 ريال"
    },
    {
      id: 2,
      title: "تخطيط مالي شامل",
      description: "خطة مالية مفصلة مع متابعة لمدة 3 أشهر",
      price: "1,500 ريال"
    },
    {
      id: 3,
      title: "إدارة محفظة استثمارية",
      description: "إدارة كاملة للمحفظة مع تقارير شهرية",
      price: "2,500 ريال"
    }
  ];

  const steps = [
    "اختيار الخدمة",
    "الدفع",
    "حجز موعد",
    "تعبئة النموذج",
    "التأكيد"
  ];

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rtl">
            {services.map((service) => (
              <Card key={service.id} className={`cursor-pointer transition-all ${
                selectedService?.id === service.id ? 'border-primary' : ''
              }`}
              onClick={() => setSelectedService(service)}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="text-primary font-bold">{service.price}</div>
                </CardFooter>
              </Card>
            ))}
          </div>
        );
      
      case 2:
        return (
          <Card className="w-full max-w-md mx-auto rtl">
            <CardHeader>
              <CardTitle>إتمام الدفع</CardTitle>
              <CardDescription>الرجاء إدخال تفاصيل البطاقة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <CreditCard className="text-gray-500" />
                  <div className="flex-1">معلومات الدفع</div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="w-full max-w-md mx-auto rtl">
            <CardHeader>
              <CardTitle>حجز موعد</CardTitle>
              <CardDescription>اختر الوقت المناسب للجلسة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Calendar className="text-gray-500" />
                  <div className="flex-1">تقويم المواعيد</div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="w-full max-w-md mx-auto rtl">
            <CardHeader>
              <CardTitle>نموذج KYC</CardTitle>
              <CardDescription>الرجاء تعبئة المعلومات المطلوبة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FileText className="text-gray-500" />
                  <div className="flex-1">معلومات العميل</div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card className="w-full max-w-md mx-auto rtl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CircleCheck className="text-green-500" />
                تم تأكيد الحجز
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertDescription>
                  تم إرسال تفاصيل الحجز إلى بريدك الإلكتروني
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-right mb-8">
        <h1 className="text-3xl font-bold">خدمات الاستشارات المالية</h1>
        <p className="text-gray-500">اختر الخدمة المناسبة لاحتياجاتك</p>
      </div>

      <div className="mb-8">
        <Progress value={(step / steps.length) * 100} className="h-2" />
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          {steps.map((stepName, index) => (
            <div
              key={index}
              className={`${
                index + 1 <= step ? 'text-primary' : ''
              }`}
            >
              {stepName}
            </div>
          ))}
        </div>
      </div>

      {renderStepContent()}

      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
        >
          السابق
        </Button>
        <Button
          onClick={() => setStep(step + 1)}
          disabled={step === 5 || (step === 1 && !selectedService)}
        >
          {step === steps.length - 1 ? 'تأكيد' : 'التالي'}
        </Button>
      </div>
    </div>
  );
};

export default ConsultationFlow;