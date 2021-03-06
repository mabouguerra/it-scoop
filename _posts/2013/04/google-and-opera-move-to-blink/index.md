---
author: dzgeek
date: 2013-04-04T14:07:00.000Z
draft: false
title: Google تنشق عن محرك العرض WebKit وتبدأ خاصتها باسم Blink و Opera تتبع
type: post
url: /2013/04/google-and-opera-move-to-blink/
categories:
  - Google
  - Open source
  - Web
  - متصفحات
tags:
  - Blink
  - chrome
  - Chromium
  - Opera
  - WebKit
coverImage: /static/images/google-and-opera-move-to-blink/chromium.jpg
excerpt: >-
  أثار قرار فريق **Chromium** البارحة تعجبا وسط المجتمع التقني، إذ أعلنوا
  انتقالهم إلى محرك عرض خاص جديد لمتصفحهم، منشق عن **WebKit**، يحمل اسم
  **Blink**، بحجج منطقية مقنعة. بين مستبشر ومتشائم، آخرون ساخرون، من Opera
  يستهزئون، حيث لم تلبث إلا حين
---
أثار قرار فريق **Chromium** البارحة تعجبا وسط المجتمع التقني، إذ أعلنوا انتقالهم إلى محرك عرض خاص جديد لمتصفحهم، منشق عن **WebKit**، يحمل اسم **Blink**، بحجج منطقية مقنعة. بين مستبشر ومتشائم، آخرون ساخرون، من Opera يستهزئون، حيث لم تلبث إلا حين برهة لتستمتع وسط جمع WebKit الغفير التي انضمت إليه مؤخرا، لترد هي الأخرى، أني مع أهل Chromium وجماعته، وعلى خطاه أسير، مع [عين غامزة](http://en.wikipedia.org/wiki/Blink) وأخرى [دامعة](https://www.it-scoop.com/2013/02/opera-moves-to-webkit/).

![chromium](/static/images/google-and-opera-move-to-blink/chromium.jpg)

بدأت القصة عام 2001، حين بدأ مشروع سطح المكتب KDE، محرك عرض باسم [KHTML](http://en.wikipedia.org/wiki/KHTML) لمتصفحه Konqueror، ليستغله بعدها متصفح Safari ويبني عليه [WebKit](http://en.wikipedia.org/wiki/WebKit) مع إبقاءه مفتوح المصدر، هذا الأخير، انضمت إلى مشروعه Google واعتمدته في متصفحاتها، ليصبح الـ WebKit على أجهزة الحاسوب المكتبية، الهواتف، واللوحيات، iPad/iPhone وغيرهم..

تميز المحرك بخفته، قوته، ميزاته ودعمه للمعايير القياسية. مع مرور الزمن ازدادت حصته والتطبيقات المبنية عليه أو له، لدرجة تخوف بعضهم من أن يصبح هو المعيار والباقون شواذ، بما فيهم المعيار نفسه، أو أن يتحول الأمر إلى [monoculture](http://en.wikipedia.org/wiki/Monoculture\_%28computer_science%29). خاصة بعد[ انضمام Opera له مؤخرا](https://www.it-scoop.com/2013/02/opera-moves-to-webkit/).

في خضم عالم منشق إلى قسمين أساسيين، أو تقريبا، أحدهم Webkit والآخر الـ non-Webkit، [فاجأت](http://blog.chromium.org/2013/04/blink-rendering-engine-for-chromium.html) بالأمسِ Google أنها لن تبقى عليه بعد الآن...

**السبب؟** تحججت Google أن سبب القرار هو زيادة تعقيد الشفرات البرمجية في Webkit2 لدعم ميزات لا تريدها هي أو لا تخدم مصالحها وهذا أصبح يكلفها غاليا لإدارة هذه الشفرات "الزائدة" بالنسبة لها، أحيانا يسبب لها هذا عملا مضاعفا، فمثلا WebKit2 لديه نظام لفصل خيوط المعالجة لكل لسان تصفح في حين Google طورت نظام  لـ Chromium متعدد خيوط المعالجة خاص بها، كذلك Webkit2 لديه Sandboxing في حين تملك Google آخرا خاص بها منفصل تماما.

من جهة أخرى فمشروع Webkit ليس بحاجة لتغيرات أخرى لتلبي احتياجات Chromium وفقط. من هنا جاء الـ Fork. للتخلي عن مئات الألوف من الشفرات البرمجية الزائدة.

Blink، سيكون في الإصدارات القادمة من متصفح Chrome/Chromium وعلى أجهزة الـ Android وكذلك Opera. واعدا بأن يكون قويا، خفيفا، بسيطا.

**ماذا عن مطوري الويب؟**

أوضحت Google في [F.A.Q خاصة بالمطورين](http://www.chromium.org/blink/developer-faq)، أن لا قلق عليهم  وأن يستبشروا خيرا، لأنهم:

~~~
  * أولا، لن يلاحظوا أي فرق، فمبدئيا Blink هو Webkit كونه منشقا منه.
  * مفتوح المصدر.
  * ثالثا، واقتداءً بـ Mozilla، ستتخلى عن CSS vendor prefixes، إلا ما سيورثه Blink -مبدئيا- من Webkit وسيُعمل على التخلي عنهم في الإصدارات القادمة والامتثال فقط لما تمليه المعايير.
  * وكما أوضحت في الـ F.A.Q فإن هذا سيساهم في زيادة التنوع لمحركات العرض ونبذ ثقافة الـ Monoculture.
~~~

كما سبق وأن أشرنا، لم تلبث Opera يوما، لتعلن ولاءها لمشروع Chromium، [وأكدت](http://www.brucelawson.co.uk/2013/hello-blink/) أنها ستلحق بالركب.

ما رأيك القارئ بكل هذا؟
