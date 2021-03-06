---
author: Xacker
date: 2012-08-01T20:05:03.000Z
draft: false
title: >-
  باحثان أمنيان يكشفان عن ثغرات خطيرة في أجهزة Routers الخاصة بـ Huawei خلال
  مؤتمر Defcon
type: post
url: /2012/08/defcon-hackers-reveal-critical-vulnerabilities-huawei-routers/
categories:
  - Security
tags:
  - Defcon
  - Huawei
  - routers
coverImage: >-
  /static/images/defcon-hackers-reveal-critical-vulnerabilities-huawei-routers/huawei-logo.jpg
excerpt: "أعلن باحثان أمنيان في مؤتمر Defcon الذي عقد الأحد الماضي عن الكشف عن ثغرات حرجة في أجهزة routers التي تنتجها\_الشركة الصينية العملاقة \_Huawei.\n\n\n\n[ووفقاً](http://www.computerworld.com/s/article/9229785/Hackers_reveal_critical_vulnerabilities_in_Huawei_routers_at_Defcon) لأحد الباحثين Felix Linder، فإن الثغرات المكونة من: session hijack, heap overflow, stack overflow -- تم اكتشافها"
---
أعلن باحثان أمنيان في مؤتمر Defcon الذي عقد الأحد الماضي عن الكشف عن ثغرات حرجة في أجهزة routers التي تنتجها الشركة الصينية العملاقة  Huawei.

![](/static/images/defcon-hackers-reveal-critical-vulnerabilities-huawei-routers/huawei-logo.jpg)

[ووفقاً](http://www.computerworld.com/s/article/9229785/Hackers_reveal_critical_vulnerabilities_in_Huawei_routers_at_Defcon) لأحد الباحثين Felix Linder، فإن الثغرات المكونة من: session hijack, heap overflow, stack overflow -- تم اكتشافها في التجهيزات التي حملت الأرقام AR18 و AR29 ومن المحتمل أن يكون بإمكان المهاجم استغلالها عن بعد للسيطرة على التجهيزة عبر الانترنت.

هذا وقد وصف Felix الثغرات التي وجدها في تجهيزات Huawei بأنها "الأسوأ على الإطلاق" ويحتمل أن التجهيزات ما زالت تحوي على العديد من الثغرات الأخرى.

وتعقيباً على كلامه فقد أشار الباحثان إلى أن شفرة الـ firmware تحوي على أكثر من 10,000 استدعاء لتابع sprintf() المعروف بضعفه من الناحية الأمنية.

ولم تنتهي Huawei من انتقادات Felix السلبية حتى بادرها Dan Kaminsky -المعروف في اكتشافه لأخطر ثغرة معروفة حتى الآن في تصميم بروتوكول DNS- بقوله "إن كنت أريد تعليم أحد ما كيفية كتابة استغلال خبيث من الصفر، فإني سأستخدم هذه الراوترات للتجربة بها"

هذا وقد أشار كل من Linder و Kopf خلال حديثهما إلى أنه لم يتم اختبار أي من التجهيزات "الضخمة" مثل إصدارات Huawei NE المخصصة لتسيير بيانات شبكات الاتصالات لأنهم لم يتمكنوا من الحصول عليها.

 إضافة لما سبق، فوجه الباحثان انتقادهما لـ Huawei من ناحية عدم الشفافية فيما يتعلق بالثغرات الأمنية حيث لا توفر الشركة أي جهة اتصال للتبليغ عن الثغرات الأمنية، ولا تقوم بنشر أي نشرات أمنية حول منتجاتها ولا تذكر أي ثغرات تم إصلاحها في تحديثات الـ firmwares.

ويأمل الباحثان بأن يكون حديثهم من خلال المؤتمر "بلاغ صحوة" لزبائن شركة Huawei حيث يشيران إلى أن الطريقة الوحيدة لإجبار شركة على اتخاذ تدابير أمنية صارمة في منتجاتها تكون من خلال دفع زبائنها إلى طلبها، كما حصل من قبل مع Microsoft, Cisco أو Apple.
