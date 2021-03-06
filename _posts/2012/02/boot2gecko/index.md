---
author: يوغرطة بن علي (Youghourta Benali)
date: 2012-02-18T16:49:32.000Z
draft: false
title: ظهور أولى صور نظام Boot2Gecko الخاص بالهواتف الذكية الذي تُطوره Mozilla
type: post
url: /2012/02/boot2gecko/
categories:
  - Web
  - متصفحات
  - هواتف/ أجهزة لوحية
tags:
  - Boot2Gecko
  - Brendan Eich
  - CSS
  - Gaia
  - Gecko
  - Gonk
  - HTML
  - JavaScript
  - Mozilla
  - WebOS
coverImage: /static/images/boot2gecko/b2glock-intro.jpg
excerpt: >-
  من
  [المُنتظر](http://arstechnica.com/business/news/2012/02/first-look-mozillas-boot2gecko-mobile-platform-and-gaia-ui.ars)
  أن تستعرض Mozilla "رسميا" نظامها الخاص بالهواتف الذكية Boot2Gecko خلال مؤتمر
  Mobile World Congress القادم. هذا النظام الذي أعلنت عنه Mozilla بادئ الأمر
  خلال الصيف الماضي يعتمد بشكل أساسي على تقنيات الويب الحديثة (HTML، CSS و
  JavaScript).




  حسب موقع
---
من [المُنتظر](http://arstechnica.com/business/news/2012/02/first-look-mozillas-boot2gecko-mobile-platform-and-gaia-ui.ars) أن تستعرض Mozilla "رسميا" نظامها الخاص بالهواتف الذكية Boot2Gecko خلال مؤتمر Mobile World Congress القادم. هذا النظام الذي أعلنت عنه Mozilla بادئ الأمر خلال الصيف الماضي يعتمد بشكل أساسي على تقنيات الويب الحديثة (HTML، CSS و JavaScript).

![](/static/images/boot2gecko/b2glock-intro.jpg)

حسب موقع Arstechnica الذي حاورت Brendan Eich الأب الروحي للغة Javascript والذي يشغل منصب CTO لدى Mozilla فإن بعض شركاء المؤسسة قد أبدوا اهتماما بالنظام، وأن هناك من بدأ منهم ببناء واجهة بداية خاصة من النظام.

يتكون نظام Boot2Gecko من 3 طبقات رئيسية. الطبقة السُفلى من النظام المُسمّاة [Gonk](https://wiki.mozilla.org/B2G/Roadmap#System\_.28Gonk.29) مسؤولة عن التخاطب بشكل مُباشر مع عتاد الهاتف. تعتمد هذه الطبقة على نواة Linux، كما أنها تستلهم قليلا من نظام Android خاصة ما تعلق بالتعديلات التي يُجريها هذا الأخير على نواة Linux و ذلك لتسهيل المهمة أمام مُصنعي هواتف Android لاعتماد نظام Boot2Gecko.

الطبقة الوسطى تتكون من مُحرك [Gecko](https://wiki.mozilla.org/B2G/Roadmap#Gecko) (المُستعمل على سبيل المثال في مُتصفح Firefox) والذي استفاد من العديد من التحسينات التي أُدخلت عليه مؤخرا والتي تجعله قادرا على التعامل مع مُختلف وظائف الهاتف (مثل الكاميرا). أما الطبقة الثالثة والأخيرة فهي طبقة [Gaia](https://wiki.mozilla.org/B2G/Roadmap#User_Interface\_.28Gaia.29\_2) والتي تُمثل واجهة النظام الرسومية والمكتوبة كُلّية بلغتي HTML و JavaScript.

قام موقع Arstechnica بتجربة طبقة Gaia والتي يُمكن تحميلها [من هنا](https://github.com/andreasgal/gaia). وستجدون في نهاية هذا الخبر (فضلا عن الصورة الموجودة فوق) بضعا من صور هذه الواجهة.

في المقابل إن كان [إقرار](http://www.nytimes.com/2012/01/02/technology/hewlett-packards-touchpad-was-built-on-flawed-software-some-say.html?\_r=1\&pagewant) HP بأن من بين أشنع أخطاء نظام WebOS هو اعتماده على مُحرك webKIT (المُنافس المُباشر لمحرك Gecko) فهل سيشفع محرك Gecko لنظام Mozilla بالرغم من كون النظامين يعتمدان نفس المبدأ؟ أم أن نظام Boot2Gecko سيكون "مجرد نظام ويب للهواتف الذكية آخر" لن يشفع له تفتحه على قواعد الويب الحديثة ليحقق النجاح المرجوَّ له.

بإمكان مستخدمي هواتف Samsung Galaxy S II المتحمسين لنظام  Boot2Geckoتجربته (استبدال نظام Android به) من الآن باتباع الخُطوات المبنية [هنا](http://johnhammink.blogspot.com/2012/01/part-1-setting-up-boot-to-gecko-build.html). لكن بالرغم من التقارب الموجود ما بين النظامين فإنه لا يمكن تشغيل تطبيقات Android عليه.

صور نظام Boot2Gecko (اضغط على الصور لمُشاهدتها بحجمها الكامل):

   ![](/static/images/boot2gecko/b2ghome-intro.jpg)   ![](/static/images/boot2gecko/b2gmaps-intro.jpg)    ![](/static/images/boot2gecko/b2gbrowser-intro.jpg)    ![](/static/images/boot2gecko/b2gdialer-intro.jpg)
