---
author: يوغرطة بن علي (Youghourta Benali)
date: 2013-02-01T10:34:39.000Z
draft: false
title: >-
  فيدورا وOpenSuse تنضمان إلى قائمة توزيعات لِينكس التي تتخلى عن MySql لصالح
  MariaDB
type: post
url: /2013/02/fedora-opensuse-replace-mysql-mariadb/
categories:
  - Open source
  - Unix/Linux
  - برمجيات
tags:
  - fedora
  - Linux
  - MariaDB
  - Mysql
  - OpenSuse
coverImage: /static/images/fedora-opensuse-replace-mysql-mariadb/MariaDB.png
excerpt: "قررت كل من توزيعتي **فيدورا** و **OpenSuse** التخلي عن نظام إدارة قواعد البيانات **MySql** الذي تملكه وتتولى تطويره Oracle لصالح **MariaDB** والذي يُعتبر Fork لنظام MySql في الإصدارات القادمة من التوزيعتين.\n\n![MariaDB](/static/images/fedora-opensuse-replace-mysql-mariadb/MariaDB.png)\n\nنظام إدارة قواعد البيانات MariaDB [عبارة عن Fork لنظام MySql](https://www.it-scoop.com/2010/01/%d8%a5%d8%b7%d9%84%d8%a7%d9%82-mariadb-5-1-%d8%a7%d9%84%d9%85%d8%b4%d8%a7%d8%a8%d9%87-%d9%88-%d8%a7%d9%84%d9%85%d9%86%d8%a7%d9%81%d8%b3-%d9%84%d9%80-mysql-%d8%b0%d9%88-4-storage-engine/)\_"
---
قررت كل من توزيعتي **فيدورا** و **OpenSuse** التخلي عن نظام إدارة قواعد البيانات **MySql** الذي تملكه وتتولى تطويره Oracle لصالح **MariaDB** والذي يُعتبر Fork لنظام MySql في الإصدارات القادمة من التوزيعتين.

![MariaDB](/static/images/fedora-opensuse-replace-mysql-mariadb/MariaDB.png)

نظام إدارة قواعد البيانات MariaDB [عبارة عن Fork لنظام MySql](https://www.it-scoop.com/2010/01/%d8%a5%d8%b7%d9%84%d8%a7%d9%82-mariadb-5-1-%d8%a7%d9%84%d9%85%d8%b4%d8%a7%d8%a8%d9%87-%d9%88-%d8%a7%d9%84%d9%85%d9%86%d8%a7%d9%81%d8%b3-%d9%84%d9%80-mysql-%d8%b0%d9%88-4-storage-engine/)  أطلقه مؤسس MySql AB (المؤسسة التي طورت MySql) وذلك بعد أن اشترت Oracle شركة Sun التي سبق لها أن اشترت MySql AB وذلك لمواصلة العمل على نظام إدارة قواعد بيانات مفتوح بشكل كلي، خاصة بعد اتجاه Oracle إلى جعل MySql أكثر انغلاقا حسب العديد من مناصري حركة المصادر المفتوحة.

حسب مطوري التوزيعتين فإن المستخدم النهائي للنظام لن يلحظ أي اختلاف، حيث أن كلا النظامين (MySql و MariaDB) يستعمل نفس الواجهة البرمجية ويدعم نفس قواعد البيانات ويستخدم نفس أنواع الملفات، وبالتالي فإنه لن تحدث أية مشاكل من هذا الانتقال. وهو ما يدفع إلى التساؤل عن جدوى التغيير في حد ذاته.

هناك من يقول بأن الأمر راجع فقط إلى "كبرياء" RedHat المطورة لتوزيعة فيدورا والمنافسة لشركة Oracle، مما يعني بأن التغيير استراتيجي فقط، في حين يرى آخرون بأن الأمر راجع إلى الطريق التي تسلكه MySql نحو جعله مغلوقا، [فحسب](http://lists.fedoraproject.org/pipermail/devel-announce/2013-January/001037.html) Jaroslav Reznik المسؤول عن تطوير فيدورا فإن Oracle لم تعد تنشر أي معلومات مفيدة حول الثغرات الأمنية الخاصة بـ MySql، كما أنها توقفت عن نشر regression tests كاملة، إضافة إلى أن قسما كبيرا من العلل البرمجية لنظام إدارة قواعد البيانات لم يعد متوفرا للجميع.

لم يُعجب هذا القرار Oracle -والتي [ردت](http://lists.fedoraproject.org/pipermail/devel-announce/2013-January/001037.html) في القائمة البريدية التي تم الإعلان فيها عن الأمر- قائلة على لسان Andrew Rist  مهندس التوافقية لديها بأن التحول إلى MariaDB عبارة عن رجوع إلى الوراء، حيث أن تحديثات MariaDB تصدر ستة أشهر بعد إصدارات MySql كما أن هناك –حسب قوله- اختلافات كبيرة ما بين الإصدار 5.5 من MariaDB والإصدار 5.6 من MySql خاصة من حيث الأداء والثبات. وللحيول من دون القيام بهذا الأمر اقترحت Oracle أن تساعد في تضمين أحدث إصدارات MySql في توزيعات فيدورا القادمة إضافة إلى اقتراحها بأن تصبح package maintainer مثلما تفعله مع توزيعة Ubuntu.

من المنتظر أن يتم إطلاق الإصدار 12.3 من OpenSuse المتضمنة على MariaDB شهر مارس القادم، وسيليها الإصدار 19 من فيدورا نهاية شهر ماي القادم.

في رأيك ما التغييرات التي ستترتب على هذه الخطوة؟ هل ستدق MariaDB مسمارا آخر في نعش MySql على الطريقة التي فعلتها  LibreOffice مع OpenOffice.org؟
