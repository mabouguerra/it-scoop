---
author: يوغرطة بن علي (Youghourta Benali)
date: 2019-06-16T17:49:13.000Z
draft: false
title: >-
  ما هو الاستيثاق الثنائي Two-Factor Authentication (2FA) ولماذا يجب عليك تفعيله
  لحماية حساباتك من الاختراق
type: post
url: /2019/06/2fa-two-factor-authentication/
categories:
  - Security
  - مقالات
coverImage: /static/images/2fa-two-factor-authentication/two-factor-authentication.png
excerpt: >-
  إليك هذا المثال: لديك حساب على gmail أو على فيس بوك أو على أية خدمة أخرى،
  وتستخدم كلمة سر كنت تعتقد بأنّها قويّة وغير قابلة للتخمين (ربما استخدمت كلمة
  سر من 36 محرفًا احتوت أرقاما وحروفًا وعلامات خاصة)، لكن بعد
---
إليك هذا المثال: لديك حساب على gmail أو على فيس بوك أو على أية خدمة أخرى، وتستخدم كلمة سر كنت تعتقد بأنّها قويّة وغير قابلة للتخمين (ربما استخدمت كلمة سر من 36 محرفًا احتوت أرقاما وحروفًا وعلامات خاصة)، لكن بعد فترة ولسبب تجهله يتعرّض حسابك للاختراق ولا تجد طريقة لاسترجاعه. ربما بعد بحث طويل تكتشف بأنّك كنت تستخدم كلمة السّر نفسها على خدمة أخرى تعرّضت هي للاختراق، وقام أحد المُخترقين بتجربة كلمة السر تلك التي كنت تعتقد أنه لا يُمكن لأحد أن يخمّنها على بريدك الإلكتروني (أو حسابك على فيس بوك) وتحكّم بشكل كامل فيه. وربما أصابك الإحباط أيضًا لأنه حتى كلمات المرور القوية والطويلة قد لا تسلم من الاختراق. فما الحل إذن؟

![](/static/images/2fa-two-factor-authentication/two-factor-authentication.png)

بداية أودّ أن أشير إلى أن الحماية التّامة من الاختراق هو أمر صعب التّحقيق إن لم يكن مستحيلًا، ولو وضعتك جهة ما نصب عينيها، ولو كانت تلك الجهة تملك ما يكفي من الموارد (خاصّة إذا كانت حكومية) فإن اختراق حسابك قد يكون مجرّد مسألة وقت، ربما ليس عبر تخمين كلمة السّر الخاصة بك بالضرورة، لكن عبر طرق أخرى. لكن رغم ذلك لا يعني بأنه لا يجب أن نحاول حماية حساباتنا بكل ما أوتينا من قوّة، فقد لا تكون عرضة للاختراق من جهات حكومية أو قوّية، لكن هناك الكثير من العابثين على الإنترنت ممن لا يهمّهم من تكون بالضرورة بقدر ما يهمّهم اختراق أكبر قدر من الحسابات، وعادة يكفي أن تجعل من مهمة اختراق حسابك أعقد بقليل (أو بكثير) ليدعوك وشأنك وينتقلون إلى ضحيّة أخرى.

نعود إلى مثالنا السّابق، هل يمكن جعل اختراق الحساب مهمّة أصعب/أعقد؟ الجواب يكمن في استخدام **الاستيثاق الثنائي **Two-Factor** Authentication** أو ما يُعرف عادة اختصارًا بـ **2FA**.

## لكن ما هو الاستيثاق الثنائي Two-Factor Authentication؟

هناك عدّة تعريفات للاستيثاق الثنائي Two-Factor Authentication (تُترجم إلى Authentification à deux facteurs بالفرنسية)، وعدّة طُرق لاستخدام الاستيثاق الثنائي. لكن دعنا نركّز على أبسط أشكاله (وهو الشكل الذي يُستعمل عادة وعلى نطاق واسع). الاستيثاق الثنائي عبارة عن تسجيل الدخول عبر مرحلتين. في المرحلة الأولى يُطلب منك استخدام "شيء تعرفه" وعادة ما يكون ذلك كلمة السر التي تحفظها في رأسك (أو تحفظها عبر تطبيق/خدمة إدارة كلمات السر)، وبعد أن يتم التّحقّق من صحتها، يُطلب منك (في المرحلة الثانية) استخدام "شيء تملكه" وعادة ما يكون هذا الأمر هاتفك، حيث يتم إما توليد رقم سري قصير عبر تطبيق خاص (سنتحدث عن الأمر بعد قليل) أو إرساله كرسالة نصيّة قصيرة SMS إلى هاتفك. هذا الرقم السري عادة ما يكون صالحًا لفترة قصيرة جدًا (30 ثانية أو أقل) ويجب توليد رقم جديد بعد مرور هذه الفترة.

![](/static/images/2fa-two-factor-authentication/2fa-knowhave.png)

أي أنه ولكي تُسجّل حسابك يتم التّحقق فعلًا من هويتك: تعرف كلمة السر وبإمكانك توليد/الحصول على رقم سري قصير على هاتفك. بعبارة أخرى، **لكي يتم اختراق حسابك الذي تستخدم عليه الاستيثاق الثنائي فإننا نحتاج أن نخترق**\*\*/نعرف/نُخمّن كلمة المرور الخاصة بك، إضافة إلى إمكانية الوصول "الفيزيائي" إلى هاتفك في اللحظة التي يتم فيها توليد الرقم السري \*\*(أو إيجاد آلية لقراءة الرسالة النّصّيّة القصيرة التي ستصلك واستخدامها).

\[caption id="attachment\_20544" align="aligncenter" width="374"]![رقم سري صالح للاستعمال لأقل من 30 ثانية فقط](/static/images/2fa-two-factor-authentication/expiring-token.png) رقم سري صالح للاستعمال لأقل من 30 ثانية فقط\[/caption]

## كيف يتم تفعيل الاستيثاق الثنائي على حسابك

هناك حالتان. الاستيثاق الثنائي اعتمادًا على رسائل SMS والاستيثاق الثنائي اعتمادًا على توليد أرقام سرّيّة مؤقّتة باستخدام تطبيق خاص بذلك.

فيما يخص الطّريقة الأولى (التي تعتمد SMS) فإنه كل ما ستحتاجه عادة هو تحديث ملفّك الشخصي (في الموقع الذي ترغب في تفعيل الاستيثاق الثنائي عليه)، ومن ثم يتم التّحقق من أنّك صاحب ذلك الرقم، حيث يتم إرسال رسالة نصّيّة قصيرة إلى هاتفك تحتوي رقمًا سرّيّا يُطلب منك إدخاله على الصفحة التي أمامك.

\[caption id="attachment\_20547" align="aligncenter" width="658"]![مثال لتفعيل الاستيثاق الثنائي على تويتر](/static/images/2fa-two-factor-authentication/twitter-2fa-first-step.png) مثال لتفعيل الاستيثاق الثنائي على تويتر\[/caption]

بعد ذلك، وفي كل مرة ترغب في تسجيل الدخول فيها إلى حسابك، وبعد أن تُدخل كلمة المرور الخاصة بك سيُرسل إلى هاتفك رقم سري قصير يُطلب منك إدخاله للتّحقق من هويّتك ومن ثم السّماح لك بتسجيل الدخول.

![](/static/images/2fa-two-factor-authentication/2fa-sms-1.png)

أما فيما يخص الطّريقة الثانية، فعادة ما تتطلّب استخدام أحد تطبيقات الاستيثاق الثنائي (سنضرب أمثلة بعد قليل)، وفي صفحة الإعدادات وبدل أن يتم إرسال رقم سري قصير إلى هاتفك، فإنه سيُطلب منك استخدام التطبيق لمسح/تصوير QR Code يُعرض على الشاشة وهو ما سيربط هاتفك (عبر هذا التطبيق) بحسابك، وسيقوم التطبيق بتوليد أرقام سرّيّة قصيرة لك كل مرة ترغب في تسجيل الدخول فيها. إن لم يكن هذا الوصف واضحًا لك فسيتّضح بالأمثلة التي سأشير إليها في نهاية هذا المقال.

![](/static/images/2fa-two-factor-authentication/add-2fa.png)

## تطبيقات الاستيثاق الثنائي

هناك عدّة تطبيقات وستجد أغلبها متوفّرا على كل من نظامي أندرويد و iOS، لكن سأكتفي بذكر أبرزها:

[Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2\&hl=en_us): تطبيق من تطوير Google ويُعتبر الخيار "القياسي" للعديد من المُستخدمين. في رأيي أحد أكبر عيوبه هو عدم إمكانية نقل الحسابات بسهولة إلى هاتفك آخر (في حال رغبت في الانتقال إلى هاتف آخر)، إضافة إلى عدم إمكانية استخدامه على أكثر من جهاز في نفس الوقت.

![](/static/images/2fa-two-factor-authentication/Google-Authenticator.png)

[FreeOTP+](https://play.google.com/store/apps/details?id=org.liberty.android.freeotpplus\&hl=en_US) (مُتوفّر على F-Droid أيضا من [هنا](https://www.f-droid.org/en/packages/org.liberty.android.freeotpplus/)): تطبيق مُشابه لـ Google Authenticator، لكن يمتاز عنه بأنه مفتوح المصدر، إضافة إلى إمكانية تصدير واستيراد الحسابات، مما يجعله خيارًا أفضل من تطبيق Google آنف الذكر.

![](/static/images/2fa-two-factor-authentication/freeOTP.png)

[Authy 2-Factor Authentication](https://play.google.com/store/apps/details?id=com.authy.authy\&hl=en_US): ما يُميّز تطبيق Authy عن باقي التطبيقات هو إمكانية استخدام نفس الحساب على أكثر من جهاز في نفس الوقت، مع إمكانية توليد تلك الأرقام السّرّيّة باستخدام تطبيق سطح مكتب أيضًا.

![](/static/images/2fa-two-factor-authentication/authy-01-1.png)

### لكن بأي تطبيق تنصحني؟

إن لم تكن لدي سابق تجربة مع الاستيثاق الثنائي فأنصحك باستخدام Authy كبداية، وبعد أن تألف الأمر وإن لم تكن تشعر بالارتياح من خاصية المُزامنة التي توفرها Authy، أو إن كنت ترغب في الاعتماد بشكل كلي على المصادر المفتوحة فيُمكنك حينها الانتقال إلى FreeOTP+. بالمناسبة لاحظ وجود + في نهاية اسم التطبيق، حيث يُعتبر هذا التطبيق نسخة مُطوّرة من تطبيق FreeOTP (من دون +) والذي لا يُوفّر خاصّيّة التصدير والاستيراد.

## كيف أفعّل الاستيثاق الثنائي على حسابي؟

يتمّ الاعتماد على نفس الطريقة في جميع الحالات. الاختلاف الوحيد هو أن تجد صفحة التفعيل تلك. يوفّر موقع authy جملة من الأمثلة بالصّور (خطوة بخطوة) على مُختلف المنصات التي يُمكن تفعيل الاستيثاق الثنائي عليها. الصفحات بالإنجليزية، لكن حتى وإن لم تكن تُتقنها يكفي أن تتّبع الخطوات المُبيّنة في الصور.

بضعة أمثلة:

~~~
  * فيس بوك: [https://authy.com/guides/facebook/](https://authy.com/guides/facebook/)
  * إنتساجرام: [https://authy.com/guides/instagram/](https://authy.com/guides/instagram/)
  * تويتر: [https://authy.com/guides/twitter/](https://authy.com/guides/twitter/)
  * بريد جيميل: [https://authy.com/guides/gmail/](https://authy.com/guides/gmail/)
~~~

**ملاحظة**: حتى وإن طلبت منك الخدمة التي تفعّل عليها الاستيثاق الثنائي استخدام تطبيق بعينه كـ Google Authenticator فهذا لا يُلزمك باستخدام هذا التطبيق بالذّات، فمبدأ العمل نفسه على جميع التطبيقات.

## ماذا لو فقدت هاتفي؟

ماذا سيحدث لو فقدت هاتفك؟ هل يعني ذلك أنه لن تتمكن من تسجيل الدخول إلى حسابك من جديد؟

في العديد من الحالات سيكون استرجاع حسابك أو إعادة تعيين حسابك من جديد مُعقّدًا. في العديد من الخدمات مثل بريد gmail فإنه وبعد تفعيلك لهذه الخاصّيّة، سيتم توليد مجموعة من الأرقام السّرّيّة التي يُطلب منك طباعتها وحفظها في مكان آمن واستخدامها في حال ما إذا فقدت هاتفك (أو حذفت تطبيق الاستيثاق الثنائي دون تصدير الحسابات التي عليه). هذه الأرقام السّرّيّة ستسمح لك بتسجيل الدخول في مثل هذه الحالات الطارئة.

\[caption id="attachment\_20540" align="aligncenter" width="238"]![أرقام سرّيّة لاسترجاع حسابات gmail](/static/images/2fa-two-factor-authentication/google-authenticator-recovery-238x300.png) أرقام سرّيّة لاسترجاع حسابات gmail\[/caption]

أما لو كنت تستخدم خدمة مثل Authy فمن المُفترض أن لا يُواجهك هذا المُشكل، بحكم أنه يكفي أن تفتح حسابك على التطبيق لتجد كامل حساباتك.

تجدر الإشارة إلى أن authy تقوم بتشفير البيانات قبل حفظها، بعبارة أخرى يجب عليك أن لا تنسى كلمة السر الخاصة بالتطبيق/التشفير، لأنه وفي حال نسيتها فلن يكون بمقدورك استرجاع تلك الحسابات، لأنه -وبكل بساطة- التشفير هنا يعني أنه حتى Authy نفسها لن يكون بمقدورها قراءة حساباتك/بياناتك.

## استخدام التطبيق يبدو مُعقّدًا، هل يُمكن أن أكتفي باستقبال الأرقام السّرّية عبر SMS؟

من ناحية "نظرية" الجواب هو "نعم" فستحصل على نفس النتيجة، سواء اعتمدت على رسائل SMS أو استخدمت التطبيق. لكن من ناحية عملية، يُعتبر الاعتماد على رسائل SMS أمرًا غير عملي، وفي بعض الحالات يُعتبر حلًا غير آمن.

فعلى سبيل المثال قد يُقرر مُتعامل الهاتف الذي تستخدمه "حجب" تلك الرسائل وعدم تسليمها، خاصّة إن كان يمنع وصول أية رسائل نصّيّة لا تحتوي رقم هاتف المُرسل (مجرد اسم). قد تتعرّض تلك الرسائل إلى تأخر في التسليم أيضًا (مشاكل تقنية في الشبكة)، وقد تكون في مكان لا تتوفّر فيه الشّبكة أو أن تكون مُسافرًا لبلد لا يُمكنك استقبال الاتصالات أو الرسائل فيه.

يُمكن أيضًا اختراق رقم هاتفك (وليس بالضرورة هاتفك نفسه بل الرّقم فقط)، أو تنصيب تطبيق يقرأ الرسائل النّصّية التي تصلك (بالمناسبة، هل تحقّقت من جميع التطبيقات التي أعطيتها صلاحيات قراءة رسائل SMS على هاتفك؟) وهو ما سيُضعّف من الحماية التي يُمكن أن تحصل عليها.

في المقابل إن كنت تستخدم تطبيقًا مثل Authy وكنت فعّلت حماية التطبيق بكلمة سر، إضافة إلى استخدامك قفلًا لهاتفك، فكل هذا سيوفّر حماية أقوى.
