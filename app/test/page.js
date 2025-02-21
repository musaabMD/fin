"use client"
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Upload, Download, Calendar as CalendarIcon, User, Edit, Clock } from 'lucide-react';

const ClientPortal = () => {
  const [date, setDate] = useState(new Date());
  const [selectedManager, setSelectedManager] = useState(null);

  const wealthManagers = [
    { id: 1, name: "أحمد محمد", specialization: "التخطيط المالي", availability: "متاح", rating: "4.8" },
    { id: 2, name: "سارة خالد", specialization: "إدارة المحافظ", availability: "متاح", rating: "4.9" },
    { id: 3, name: "عمر علي", specialization: "استشارات الثروات", availability: "غير متاح", rating: "4.7" },
  ];

  const coachingSessions = [
    { id: 1, title: "جلسة استشارية فردية", duration: "60 دقيقة", price: "500 ريال" },
    { id: 2, title: "تخطيط مالي شامل", duration: "90 دقيقة", price: "750 ريال" },
    { id: 3, title: "مراجعة المحفظة", duration: "45 دقيقة", price: "400 ريال" },
  ];

  const myFiles = [
    { id: 1, name: "خطة مالية.pdf", type: "PDF", date: "2024/02/15" },
    { id: 2, name: "تقرير المحفظة.xlsx", type: "Excel", date: "2024/02/20" },
    { id: 3, name: "توصيات استثمارية.pdf", type: "PDF", date: "2024/02/25" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6" dir="rtl">
      <h1 className="text-3xl font-bold mb-6">بوابة العميل</h1>

      <Tabs defaultValue="sessions" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="sessions">المواعيد</TabsTrigger>
          <TabsTrigger value="files">الملفات</TabsTrigger>
          <TabsTrigger value="booking">حجز جلسة</TabsTrigger>
          <TabsTrigger value="kyc">تحديث البيانات</TabsTrigger>
          <TabsTrigger value="manager">مدير الثروات</TabsTrigger>
        </TabsList>

        <TabsContent value="sessions">
          <Card>
            <CardHeader>
              <CardTitle>تغيير موعد الجلسة</CardTitle>
              <CardDescription>اختر التاريخ المناسب لموعدك القادم</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files">
          <Card>
            <CardHeader>
              <CardTitle>ملفاتي</CardTitle>
              <CardDescription>عرض وتحميل الملفات</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myFiles.map(file => (
                  <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="text-gray-500" />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-gray-500">{file.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <Button className="w-full">
                    <Upload className="ml-2" /> رفع ملف جديد
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booking">
          <Card>
            <CardHeader>
              <CardTitle>حجز جلسة جديدة</CardTitle>
              <CardDescription>اختر نوع الجلسة المناسبة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {coachingSessions.map(session => (
                  <Card key={session.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{session.title}</CardTitle>
                      <CardDescription>
                        <Clock className="inline ml-1" size={16} />
                        {session.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <span className="font-bold">{session.price}</span>
                      <Button>حجز</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kyc">
          <Card>
            <CardHeader>
              <CardTitle>تحديث البيانات الشخصية</CardTitle>
              <CardDescription>يرجى تحديث بياناتك بشكل دوري</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>الاسم الكامل</Label>
                    <Input placeholder="الاسم الكامل" defaultValue="محمد أحمد" />
                  </div>
                  <div className="space-y-2">
                    <Label>رقم الهوية</Label>
                    <Input placeholder="رقم الهوية" defaultValue="1234567890" />
                  </div>
                  <div className="space-y-2">
                    <Label>البريد الإلكتروني</Label>
                    <Input type="email" placeholder="البريد الإلكتروني" defaultValue="example@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>رقم الجوال</Label>
                    <Input placeholder="رقم الجوال" defaultValue="+966500000000" />
                  </div>
                </div>
                <Button className="w-full">حفظ التغييرات</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manager">
          <Card>
            <CardHeader>
              <CardTitle>اختيار مدير الثروات</CardTitle>
              <CardDescription>اختر مدير الثروات المناسب لك</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {wealthManagers.map(manager => (
                  <Card 
                    key={manager.id}
                    className={`cursor-pointer transition-all ${
                      selectedManager?.id === manager.id ? 'border-primary' : ''
                    }`}
                    onClick={() => setSelectedManager(manager)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{manager.name}</CardTitle>
                      <CardDescription>{manager.specialization}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm">
                        <span className={manager.availability === "متاح" ? "text-green-500" : "text-red-500"}>
                          {manager.availability}
                        </span>
                        <span>⭐ {manager.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full"
                        disabled={manager.availability !== "متاح"}
                      >
                        اختيار
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientPortal;