---
author: Xacker
date: 2010-07-24T11:05:30.000Z
draft: false
title: >-
  Microsoft تنشر أداة ترقيعية مؤقتة للتخفيف من وطأة ثغرة الاختصارات المكتشفة
  حديثا
type: post
url: /2010/07/microsoft-temporary-fix-it-windows-shortcut-zero-day-attacks/
categories:
  - Microsoft
  - Security
tags:
  - Fix-it
  - Microsoft
  - Security
coverImage: >-
  /static/images/microsoft-temporary-fix-it-windows-shortcut-zero-day-attacks/Patch-tuesday.jpg
excerpt: >-
  **[Microsoft تنشر أداة ترقيعية مؤقتة للتخفيف من وطأة ثغرة الاختصارات المكتشفة
  حديثا](//www.it-scoop.com/2010/07/microsoft-temporary-fix-it-windows-shortcut-zero-day-attacks)**


  قامت Microsoft بطرح أداة "fix-it" كاحتراز مؤقت لتخفيف من انتشار الهجمات التي
  تستغل ثغرة الاختصارات المكتشف استغلالها حديثاً في فيروس شرس يهاجم أنظمة
  Windows [كتبنا عنه منذ
  فترة](https://www.it-scoop.com/2010/07/rootkit-targets-infrastructure%E2%80%8E-india-iran/).




  إضافة لما
---
**[Microsoft تنشر أداة ترقيعية مؤقتة للتخفيف من وطأة ثغرة الاختصارات المكتشفة حديثا](//www.it-scoop.com/2010/07/microsoft-temporary-fix-it-windows-shortcut-zero-day-attacks)**

قامت Microsoft بطرح أداة "fix-it" كاحتراز مؤقت لتخفيف من انتشار الهجمات التي تستغل ثغرة الاختصارات المكتشف استغلالها حديثاً في فيروس شرس يهاجم أنظمة Windows [كتبنا عنه منذ فترة](https://www.it-scoop.com/2010/07/rootkit-targets-infrastructure%E2%80%8E-india-iran/).

![](/static/images/microsoft-temporary-fix-it-windows-shortcut-zero-day-attacks/Patch-tuesday.jpg)

إضافة لما ذكرناه سابقاً عن طرق الاستغلال المعروفة، فإنه بالإمكان تنفيذ هجمات drive-by downloads ضد مستخدمي متصفح Internet Explorer حيث أن بإمكان المهاجم أن يضع المحتوى الخبيث على موقع أو مجلد مشارك في شبكة. عندما يقوم المستخدم بتصفح ذلك الموقع باستخدام Internet Explorer، فإن نظام Windows سيحاول تحميل الأيقونة الخاصة بملف الاختصار وسيؤدي بذلك إلى تنفيذ الرماز الضار. بالإضافة إلى هذا فإن بإمكان المهاجم دمج الاستغلال في مستند يدعم الاختصارات المدموجة مثل مستندات Microsoft Office على سبيل المثال لا الحصر.

في ظل غياب ترقيع لهذه الثغرة حالياً فإن Microsoft تنصح أن يقوم المستخدمون باستخدام أداة "Fix-it" التي ستقوم بتعطيل ملفات الاختصارات .LNK وملفات .PIF على أنظمة Windows إلى حين صدور الترقيع الرسمي من الشركة.

يمكن تحميل الأداة من [هنا](http://support.microsoft.com/kb/2286198)

أو قراءة المزيد حولها من [هنا](http://www.microsoft.com/technet/security/advisory/2286198.mspx)
