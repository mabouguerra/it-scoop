---
author: يوغرطة بن علي (Youghourta Benali)
date: 2010-09-21T16:27:40.000Z
draft: false
title: 'Twitter يتعرض لهجوم XSS يعيد نشر التغريدات بشكل آلي '
type: post
url: /2010/09/twitter-xss/
categories:
  - Security
  - Web
tags:
  - Security
  - Twitter
  - vulnerability
  - XSS
coverImage: /static/images/twitter-xss/twitter-xss.jpg
excerpt: >-
  **[Twitter يتعرض لهجوم XSS يعيد نشر التغريدات بشكل
  آلي](https://www.it-scoop.com/2010/09/twitter-xss/)**


  تعرضت خدمة التغريد المصغر Twitter منتصف اليوم إلى هجوم XSS يستغل ثغرة في نظام
  تقصير الروابط الجديد الذي تعتمده Twitter، و التي تسمح بنشر شفرة JavaScript
  تظهر نصا مظللا بالأسود و تقوم
---
**[Twitter يتعرض لهجوم XSS يعيد نشر التغريدات بشكل آلي](https://www.it-scoop.com/2010/09/twitter-xss/)**

تعرضت خدمة التغريد المصغر Twitter منتصف اليوم إلى هجوم XSS يستغل ثغرة في نظام تقصير الروابط الجديد الذي تعتمده Twitter، و التي تسمح بنشر شفرة JavaScript تظهر نصا مظللا بالأسود و تقوم بإعادة نشر التغريدة المسبب للمشكل بشكل آلي بمجرد تمرير مؤشر الفأرة عليها.

\[caption id="attachment\_4971" align="aligncenter" width="532" caption="مثال عن التغريدات المصابة"]![](/static/images/twitter-xss/twitter-xss.jpg) \[/caption]

التغريدات المسببة للمشكل كانت مشابهة للتغريدة التالية:

~~~
http://t.co/@"onmouseover="document.getElementById('status').value='RT onesque';$('.status-update-form').submit();"font-size:500pt;/
~~~

و لقد ظهرت بعدها بشكل سريع أنواع عديدة منها بعضها يروج لمواقع إباحية. و بعضها يقوم بإعادة نشر التغريدة بشكل مباشر من دون تمرير مؤشر الفأرة.

و لقد [أعلنت](http://twitter.com/delbius/status/25120366027) Twitter أنها قامت بحل المشكل حوالي الساعة الثانية مساء بتوقيت غرينتش ،و هذا بعد أن أصيبت آلاف الحسابات ، و لم يشمل الأمر سوى المغردين الذين يستعلمون موقع Twitter.com مباشرة لنشر تغريداتهم.

ليست هذه المرة الأولى التي يصاب فيها Twitter بهذا النوع من الهجمات فلقد سبق و أن [نبهت](http://www.securelist.com/en/blog/2276/Twitter_XSS_in_the_wild) Kaspersky إلى وجود استغلال لثغرة مشابهة في الـ 7 من سبتمبر الماضي أصابت زهاء 11 ألف حساب

الفيديو التالية (معدة من طرف Sophos) تلقي نظرة على الثغرة و كيفية انتشارها:

أغتنم الفرصة لأذكر بأنه يمكن متابعة آخر أخبار المجلة التقنية على حسابها على Twitter من [هنا](http://twitter.com/it_scoop_com)
