---
author: Xacker
date: 2009-12-03T21:17:38.000Z
draft: false
title: مدونات WordPress تتعرض لهجمات BF موزّعة
type: post
url: >-
  /2009/12/%d9%85%d8%af%d9%88%d9%86%d8%a7%d8%aa-wordpress-%d8%aa%d8%aa%d8%b9%d8%b1%d8%b6-%d9%84%d9%87%d8%ac%d9%85%d8%a7%d8%aa-bf-%d9%85%d9%88%d8%b2%d9%91%d8%b9%d8%a9-2/
categories:
  - Security
  - Web
  - برمجيات
tags:
  - Brute Force Attack
  - Brute-Force
  - WordPress
  - WordPress brute force
  - WordPress cracking
coverImage: /static/images/مدونات-wordpress-تتعرض-لهجمات-bf-موزّعة-2/wp-bruteforce11.png
excerpt: >-
  تم الاستحواذ على سكربت PHP لدى مستخدم في سيرفر VPS يستخدمه للقيام بمحاولات كسر
  كلمات سر مدراء مدونات WordPress من خلال هجمات Brute-Force موزّعة مخالفاً بهذا
  TOS السيرفر، كما يظهر في الصورة التالية:




  يستخدم التابع wp_brute_attempt() ثلاث بارامترات، $ch الذي يأخذ
---
تم الاستحواذ على سكربت PHP لدى مستخدم في سيرفر VPS يستخدمه للقيام بمحاولات كسر كلمات سر مدراء مدونات WordPress من خلال هجمات Brute-Force موزّعة مخالفاً بهذا TOS السيرفر، كما يظهر في الصورة التالية:

![](/static/images/مدونات-wordpress-تتعرض-لهجمات-bf-موزّعة-2/wp-bruteforce11.png)

يستخدم التابع wp_brute_attempt() ثلاث بارامترات، $ch الذي يأخذ كتلة cURL، والبارامترين الآخرين يحددان الموقع المراد مهاجمته وكلمة السر التي سيتم تجريبها. إن نجح السكربت في محاولته لكسر كلمة السر، فالصفحة التي ستظهر ستحوي على كلمة "Log Out" وهي الطريقة التي يستخدمها السكربت لتحديد النجاح من الفشل، وعندها يتم إعادة القيمة true.

المثير للاهتمام في هذا السكربت أنه يسمح بهجوم موزّع distributed attack. المعلومات يتم حفظها في قاعدة بيانات mySQL والتي يتصل بها السكربت بشكل مباشر، مما يسمح للمهاجم بتشغيل نسخ متعددة من السكربت ليشكل هجمات موزعة. كل سكربت يأخذ 200 عنوان مدونة ويتم تحديدهم باسم السكربت المسؤول عن معالجتهم، يتم هذا من خلال الوسيط $colo

![](/static/images/مدونات-wordpress-تتعرض-لهجمات-bf-موزّعة-2/wp-bruteforce21.png)

بعدها يقوم السكربت بأخذ كل كلمة سر موجودة ضمن ملف لكلمات السر ويقوم بتجريبها على كل موقع. حتى أنه بالإمكان إيقافه ومن ثم إعادة تشغيله في وقت لاحق وسيقوم بمتابعة عمله من حيث انتهى :)

ننصح انطلاقاً من هذه التدوينة جميع من يملك مدونة WP أن يضمن أن يكون الوصول إلى صفحة المدير محدود قدر الإمكان، ابتداء من استخدام كلمة سر قوية وانتهاء بإنشاء مستخدمين بسماحيات معينة للكتابة فيها (حتى لصاحب المدونة نفسه) وترك حساب المدير فقط للإدارة بحيث يبقى اسم المستخدم مجهولاً لمن يحاول مهاجمة المدونة.

هناك بعض النصائح الأخرى التي مررت بها خلال البحث أكثر في الموضوع، أقتبس منها ما أشعر بأنه ضروري وملح:

~~~
  * استخدام إضافة Login LockDown والتي تقوم بتسجيل IP من قام بتجربة محاولة فاشلة، و تاريخ ووقت محاولة الدخول، ومن ثم بعد بضع محاولات فاشلة (3 محاولات فاشلة خلال 5 دقائق) تقوم بشكل تلقائي بمنع مجال هذا الـ IP من تسجيل الدخول (الزمن الافتراضي 1 ساعة ويمكن التعديل عليه من خيارات لوحة التحكم الخاصة بها)، ويمكن لمدير المدونة أن يقوم بتحرير القفل على هذا المجال بشكل يدوي متى أرادو من لوحة التحكم. يمكن الحصول عليها من الرابط، [هنــــــا](http://wordpress.org/extend/plugins/login-lockdown/)
  * مجلد wp-content يحوي على مجلد plug-ins والذي بمحاولة الوصول إليه يعرض قائمة بالـ plug-ins المستخدمة في الموقع، هذا الأمر قد يعطي المهاجم فرصة الحصول على معلومات أكبر عن ما يتم استخدامه في موقعك، ينصح بوضع صفحة HTML فارغة في هذا المجلد لعرضها بدلاً من السماح بعرض صفحة WP الافتراضية. يمكنك أيضاً استخدام ملف .htaccess
  * [بعض النصائح الأخرى](http://blogsecurity.net/wordpress/article-210607).
~~~

هذا الأمر لا يتوقف فقط على WP، فهجمات BF على مثل هذه الخدمات كانت في الساحة منذ بعض الوقت (على سبيل المثال الهجمات على خدمات SSH والتي تتلقى جهة SANS يومياً بلاغات عنها).

المصدر:

<http://isc.sans.org/diary.html?storyid=7663>
