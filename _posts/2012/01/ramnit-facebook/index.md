---
author: Xacker
date: 2012-01-11T17:38:35.000Z
draft: false
title: ظهور إصدار جديد من دودة Ramnit يقوم بسرقة بيانات الدخول إلى Facebook
type: post
url: /2012/01/ramnit-facebook/
categories:
  - Security
  - Web
tags:
  - facebook
  - Ramnit
  - Seculert
coverImage: /static/images/ramnit-facebook/ramnit-facebook-300x225.jpg
excerpt: >-
  على الرغم من قدمها، إلا أن استمرار انتشار أشكال مختلفة منها جعلها تستحوذ على
  ما يقارب 17.3% من نسبة الإصابات ببرمجيات خبيثة جديدة وذلك في
  [تقرير](http://www.symanteccloud.com/mlireport/SYMCINT\_2011\_07\_July_FINAL-EN.pdf)أعدته
  Symantec في يوليو الماضي. حاليا، تعود دودة Ramnit من جديد بشكل آخر مستهدفة أحد
---
على الرغم من قدمها، إلا أن استمرار انتشار أشكال مختلفة منها جعلها تستحوذ على ما يقارب 17.3% من نسبة الإصابات ببرمجيات خبيثة جديدة وذلك في [تقرير](http://www.symanteccloud.com/mlireport/SYMCINT\_2011\_07\_July_FINAL-EN.pdf)أعدته Symantec في يوليو الماضي. حاليا، تعود دودة Ramnit من جديد بشكل آخر مستهدفة أحد أهم مواقع الشبكات الاجتماعية، موقع Facebook.

![](/static/images/ramnit-facebook/ramnit-facebook-300x225.jpg)

يقوم هذا الإصدار من دودة Ramnit بسرقة أسماء وكلمات المرور لحسابات مستخدمي Facebook، حيث تم اكتشاف مخدم تحكم Command & Control server  يحتوي على ما يقارب من 45000 حساب Facebook، معظمهم من فرنسا و بريطانيا وذلك في [تقرير](http://blog.seculert.com/2012/01/ramnit-goes-social.html) نشره باحثون من Seculert.

![](/static/images/ramnit-facebook/ramnitbycountry-300x180.png) على ما يبدو، فإن القائمين خلف هذه النسخة من Ramnit يقومون بدخول الحسابات المسروقة ويعملون على نشرها مجدداً من خلال هذه الحسابات إلى أصدقائهم وعائلاتهم.

![](/static/images/ramnit-facebook/ramnitfacebook-300x189.png)

تعمل Ramnit على إصابة الملفات التنفيذية وملفات HTML وملفات Office، وتقوم بسرقة الأسماء وكلمات المرور وبيانات الـ cookies ويمكنها أيضاً أن تعمل كـ backdoor يسمح للقراصنة بتنفيذ نشاطات خبيثة أخرى باستخدام الجهاز المصاب.

هل استهداف مستخدمي الشبكات الاجتماعية هو "الموضة" الرائجة الآن؟ ما الخطر الذي قد يمثله هذا النوع من الهجوم برأيك؟
