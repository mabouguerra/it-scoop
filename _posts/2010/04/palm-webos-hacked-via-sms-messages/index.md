---
author: يوغرطة بن علي (Youghourta Benali)
date: 2010-04-21T12:21:02.000Z
draft: false
title: باحثون أمنيون يخترقون نظام WebOS الخاص بأجهزة Palm برسائل SMS بسيطة
type: post
url: /2010/04/palm-webos-hacked-via-sms-messages/
categories:
  - Security
  - Web
  - هواتف/ أجهزة لوحية
tags:
  - Palm
  - WebOS
coverImage: /static/images/palm-webos-hacked-via-sms-messages/palm-pre.jpg
excerpt: "[**باحثون أمنيون يخترقون نظام WebOS الخاص بأجهزة Palm برسائل SMS بسيطة**](https://www.it-scoop.com/2010/04/Palm-WebOS-Hacked-Via-SMS-Messages)\n\nكشف باحثون أمنيون يعملون لدىIntrepidus \_عن ثغرة أمنية تسمح باختراق نظام تشغيل WebOS المستخدم على أجهزة Palm و هذا بإرسال رسائل SMS إلى جهاز الضحية.\n\n![palm pre](/static/images/palm-webos-hacked-via-sms-messages/palm-pre.jpg)\n\nالثغرة تكمن في مستوى الوحدة"
---
[**باحثون أمنيون يخترقون نظام WebOS الخاص بأجهزة Palm برسائل SMS بسيطة**](https://www.it-scoop.com/2010/04/Palm-WebOS-Hacked-Via-SMS-Messages)

كشف باحثون أمنيون يعملون لدىIntrepidus  عن ثغرة أمنية تسمح باختراق نظام تشغيل WebOS المستخدم على أجهزة Palm و هذا بإرسال رسائل SMS إلى جهاز الضحية.

![palm pre](/static/images/palm-webos-hacked-via-sms-messages/palm-pre.jpg)

الثغرة تكمن في مستوى الوحدة المسؤولة عن الـ SMS في الإصدار 1.3.5 من نظام WebOS حيث أنها لا تقوم بفلترة محتوى الرسائل كما يجب قبل فتحها و هو ما يمكن من إرسال أي نوع من المحتويات عبر الـ SMS، حيث تمكن الباحثون من حقن شيفرات HTML داخل الرسائل تمكنهم من الحصول على مبتغاهم.

حسب ما نشره الباحثون، فإن المشكل يرجع في جذوره إلى كون نظام WebOS عبارة عن متصفح ويب قبل كل شيء، و أن تطبيقاته مكتوبة بالـ HTML و الـ Javascript، مما يسمح لدى حقن شيفرات HTML من فتح مواقع معينة، أو تنفيذ بعض الأوامر.

للتذكير فإن الإصدار الحالي من نظام WebOS  هو [1.4.1.1](http://kb.palm.com/wps/portal/kb/na/pre/p100eww/sprint/solutions/article/50607\_en.html#141) و التي لا تحتوي على هذه الثغرة، بحكم أن الباحثين لم يكشفوا عنها إلا بعد أن تم إبلاغ Palm و قامت بتصحيح الثغرة.

الفيديو التالية توضح 6 سيناريوهات مختلفة طبقها الباحثون لتوضيح الثغرة و كيفية استغلالها:

يمكن قراءة المزيد عن الثغرة من [هنا](http://intrepidusgroup.com/insight/2010/04/webos-examples-of-sms-delivered-injection-flaws/)
