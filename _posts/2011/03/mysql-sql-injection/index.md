---
author: Xacker
date: 2011-03-28T09:19:13.000Z
draft: false
title: الموقع الرسمي لـ MySQL يتعرض للقرصنة عن طريق ثغرة SQL injection
type: post
url: /2011/03/mysql-sql-injection/
categories:
  - Security
  - Web
tags:
  - Mysql
  - SQL injection
coverImage: /static/images/mysql-sql-injection/SQL-Injection-Attack.jpg
excerpt: >-
  [**الموقع الرسمي لـ MySQL يتعرض للقرصنة عن طريق ثغرة SQL
  injection**](https://www.it-scoop.com/2011/03/mysql-sql-injection/)


  تعرض موقع MySQL.com -الموقع الرسمي لقواعد بيانات MySQL- البارحة [لهجوم SQL
  injection](http://securingsqlserver.com/mysql-com-compromised-via-sql-injection-attack-someone-should-have-read-chapter-6)
  أدى إلى حصول المخترقين على نسخة كاملة عن قاعدة البيانات الموجودة لديهم، وذلك
  وفقاً لما قاموا بعرضه عبر
---
[**الموقع الرسمي لـ MySQL يتعرض للقرصنة عن طريق ثغرة SQL injection**](https://www.it-scoop.com/2011/03/mysql-sql-injection/)

تعرض موقع MySQL.com -الموقع الرسمي لقواعد بيانات MySQL- البارحة [لهجوم SQL injection](http://securingsqlserver.com/mysql-com-compromised-via-sql-injection-attack-someone-should-have-read-chapter-6) أدى إلى حصول المخترقين على نسخة كاملة عن قاعدة البيانات الموجودة لديهم، وذلك وفقاً لما قاموا بعرضه عبر [قائمة المراسلة البريدية الخاصة بموقع seclists.org](http://seclists.org/fulldisclosure/2011/Mar/309).

![](/static/images/mysql-sql-injection/SQL-Injection-Attack.jpg)

لم يكتف المخترقون بهذا بل قاموا بنشر كلمات السر المشفرة التي حصلوا عليها، الأمر الذي دفع بالكثيرين إلى العمل على فك تشفير كلمات السر هذه والتي ظهر أن بعضها ضعيف جداً من الناحية الأمنية (مثلاً كلمة السر للحساب المسمى sysadm وجدت بأنها “qa” !)

يظهر أيضاً من خلال كلمات السر المنشورة بأن مدير قسم تطوير البرمجيات والذي لديه خبرة أكثر من 20 عام مع قواعد البيانات، يستخدم كلمة سر مكونة من 4 أرقام فقط!

لا داعي للتذكير، إن كان لديك حساب على موقع Mysql.com وكنت تستخدم كلمة السر المسجّل بها في مواقع أخرى، فسارع إلى تغيير باقي كلمات السر لديك على الفور.
