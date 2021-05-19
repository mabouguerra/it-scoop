---
author: Xacker
date: 2010-04-15T18:03:46.000Z
draft: false
title: هجوم معقّد يصيب خدمات Apache.org
type: post
url: /2010/04/complex-attack-hits-apache-services/
categories:
  - Security
  - أخبار الشركات
tags:
  - Apache
  - Bugzilla
  - Confluence
  - Hacking
  - JIRA
coverImage: /static/images/complex-attack-hits-apache-services/apache_logo_.png
excerpt: "[**هجوم معقّد يصيب خدمات Apache.org**](https://www.it-scoop.com/2010/04/Complex-Attack-Hits-Apache-Services)\n\nأعلنت Apache Software Foundation (ASF) بأن عدداً\_ من خدماتها تعرضت لمحاولات اختراق معقّدة أدت في نهاية المطاف إلى اختراق أحد خوادمها كليّاً وآخر بشكل جزئي. عدد غير قليل من hash كلمات السر غير الآمنة تعرض للسرقة"
---
[**هجوم معقّد يصيب خدمات Apache.org**](https://www.it-scoop.com/2010/04/Complex-Attack-Hits-Apache-Services)

أعلنت Apache Software Foundation (ASF) بأن عدداً  من خدماتها تعرضت لمحاولات اختراق معقّدة أدت في نهاية المطاف إلى اختراق أحد خوادمها كليّاً وآخر بشكل جزئي. عدد غير قليل من hash كلمات السر غير الآمنة تعرض للسرقة من أجهزة المنظمة.

![](/static/images/complex-attack-hits-apache-services/apache_logo\_.png)

بدأ الهجوم حسب التصريحات في 5 أبريل/نيسان عندما قام أحدهم بإنشاء صفحة خطأ وهمية في [JIRA](http://www.atlassian.com/software/jira/)، وهو أحد حلول إدارة المشاريع المطوّر من قبل شركة تدعى [Atlassian](http://www.atlassian.com) والذي يستخدم من قبل ASF. هذه الصفحة الدخيلة احتوت على رابط TinyURL مختصر، والذي إذا تم فتحه، يقوم باستغلال ثغرة XSS غير معلن عنها في JIRA الأمر الذي يسمح من خلاله بسرقة الكوكيز الخاصة بالـ session للمستخدمين المتصلين.

لما نراه من تفاصيل مثيرة حول هذا الاختراق سنقوم بعرض باقي التفاصيل.. تابعوا معنا

Philip Gollucci، نائب مدير المؤسسة المسؤول عن البنية التحتية للمنشأة [أوضح قائلاً](https://blogs.apache.org/infra/entry/apache_org\_04\_09\_2010)..

كما أضاف بأنه في الوقت ذاته كانت صفحة تسجيل الدخول الخاصة بـ JIRA عرضة لهجوم "القوة الغاشمة" brute-force attack والذي يهدف إلى اكتشاف كلمات سر أخرى.

بعد الحصول على مجموعة من كلمات سر مدراء خاصة بالمشروع، قام المهاجمون بتحديد مسار يسمح بالكتابة فيه على السيرفر واستخدموه لتنفيذ سكربتات خبيثة. هذا الأمر مكنهم من تثبيت إضافة خاصة بتسجيل كلمات السر والحصول على المزيد من بيانات تسجيل الدخول لنظام JIRA.

علاوة على ذلك، باستخدام cached SVN passwords وجدت على السيرفر ذو صلاحيات root، تمكن المهاجمون من الدخول في عدة حسابات shell ثانوية أخرى على minotaur.apache.org. هذا السيرفر، المعروف أيضاً بـ people.apache.org، يستضيف حسابات لجميع مطوري Apache وكان هدفاً ل[هجوم آخر](http://news.softpedia.com/news/Apache-org-Compromised-by-Hackers-120420.shtml) في أغسطس/آب العام الماضي. لحسن الحظ، لم يتمكن المهاجمون من الحصول على امتيازات أكثر على هذا الخادم أيضاً.

ننصح مستخدمي Apache JIRA, Bugzilla و Confluence، الذين يعملون على السيرفرات المخترقة، بأن يقوموا بتغيير كلمات السر الخاصة بهم فوراً. مستخدمي JIRA بالتحديد، الذين قاموا بتسجيل الدخول في الفترة الممتدة بين 6 أبريل/نيسان و 9 أبريل/نيسان، يجب أن يعتبروا أن كلمات السر الخاصة بهم لم تعد آمنة على الإطلاق حيث أنهم قاموا بالدخول من خلال صفحة تسجيل الدخول المخترقة.

قام فريق Apache باتخاذ عدة إجراءات احتياطية لمنع المزيد من الهجمات المشابهة في المستقبل وردود الفعل التي ظهرت من مجتمع Apache حتى الآن إيجابية. معظم المستخدمين يهنئون المنظمة على صراحتها مع الإعلام عندما تظهر مثل هذه الحوادث.

لقراءة المزيد من المعلومات حول الخبر يمكن مراجعة [الرابط](http://news.softpedia.com/news/Complex-Attack-Hits-Apache-org-Services-139823.shtml)، أو الإطلاع على [الخبر الرسمي على موقع الشركة](https://blogs.apache.org/infra/entry/apache_org\_04\_09\_2010).