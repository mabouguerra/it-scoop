---
author: Xacker
date: 2011-01-29T18:37:42.000Z
draft: false
title: Soundminer - تطبيق آمن أم دليل على مشكلة أمنية في أنظمة Android؟
type: post
url: /2011/01/soundminer-android-trojan/
categories:
  - Security
  - هواتف/ أجهزة لوحية
tags:
  - Android
  - Soundminer
  - trojan
coverImage: /static/images/soundminer-android-trojan/Android-Trojan.jpg
excerpt: "**[Soundminer - تطبيق آمن أم دليل على مشكلة أمنية في أنظمة Android؟](https://www.it-scoop.com/2011/01/soundminer-android-trojan/)**\n\nفي حين أنه فقط Proof-of-Concept على وجود مشكلة، إلا أن الحقيقة تبقى مخيفة،\_فقد قام فريق من الباحثين الأمنيين بكتابة Trojan لهواتف أندرويد Andriod قادر على تسجيل أرقام بطاقات الاعتماد"
---
**[Soundminer - تطبيق آمن أم دليل على مشكلة أمنية في أنظمة Android؟](https://www.it-scoop.com/2011/01/soundminer-android-trojan/)**

في حين أنه فقط Proof-of-Concept على وجود مشكلة، إلا أن الحقيقة تبقى مخيفة، فقد قام فريق من الباحثين الأمنيين بكتابة Trojan لهواتف أندرويد Andriod قادر على تسجيل أرقام بطاقات الاعتماد المدخلة صوتياً أو عبر لوحة المفاتيح، ومن ثم إرسال ما تم جمعه إلى من قام بكتابته.

![](/static/images/soundminer-android-trojan/Android-Trojan.jpg)

التطبيقات المكتوبة لهواتف Android تحتاج إلى طلب الإذن لكل وظيفة نظام تقوم بطلبها. لكن مع الكثير من هذه الطلبات، فقد تم تصميم النظام بحيث يتم تجميعها في مجموعات وعرضها على المستخدم دفعة واحدة لكل مجموعة عند تنصيب التطبيق، الأمر الذي يقلل من فرصة تسلل Trojan خبيث إلى النظام.

Soundminer – التطبيق الذي قام الباحثون بكتابته، يقوم فقط بطلب الوصول إلى ‘مكالمات الهاتف’ لقراءة حالة الهاتف والمعرّف، إلى ‘المعلومات الشخصية’ لقراءة قائمة الأسماء، وإلى ‘عناصر التحكم بالعتاد’ لتسجيل الصوت; أياً من طلبات الوصول هذه لن تشعر المستخدم بوجود شئ مريب إن تم طرح البرنامج على أنه "أداة لتسجيل المكالمات".

يمكن الوصول إلى ورقة البحث [عبر الرابط](https://www.cs.indiana.edu/%7Ekapadia/papers/soundminer-ndss11.pdf)، أو مشاهدة الفيديو التالية التي تشرح مبدأ عمله:
