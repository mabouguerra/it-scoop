---
author: يوغرطة بن علي (Youghourta Benali)
date: 2010-01-11T19:28:01.000Z
draft: false
title: >-
  باحثون أمنيون ينشرون Proof of Concept لثغرة أمنية في إصداري 10.5 و 10.6  من
  Mac OS X
type: post
url: >-
  /2010/01/%d8%a8%d8%a7%d8%ad%d8%ab%d9%88%d9%86-%d8%a3%d9%85%d9%86%d9%8a%d9%88%d9%86-%d9%8a%d9%86%d8%b4%d8%b1%d9%88%d9%86-proof-of-concept-%d9%84%d8%ab%d8%ba%d8%b1%d8%a9-%d8%a3%d9%85%d9%86%d9%8a%d8%a9-%d9%81/
categories:
  - Apple
  - Security
tags:
  - Apple
  - PoC
  - Security
coverImage: >-
  /static/images/باحثون-أمنيون-ينشرون-proof-of-concept-لثغرة-أمنية-ف/apple_chains_security_300.jpg
excerpt: "[**باحثون أمنيون ينشرون Proof of Concept لثغرة أمنية في إصداري 10.5و 10.6\_ من Mac OS X**](https://www.it-scoop.com/2010/01/%d8%a8%d8%a7%d8%ad%d8%ab%d9%88%d9%86-%d8%a3%d9%85%d9%86%d9%8a%d9%88%d9%86-%d9%8a%d9%86%d8%b4%d8%b1%d9%88%d9%86-proof-of-concept-%d9%84%d8%ab%d8%ba%d8%b1%d8%a9-%d8%a3%d9%85%d9%86%d9%8a%d8%a9-%d9%81/)\n\nقامت مجموعة من الباحثين الأمنيين العاملين لدى SecurityReason بنشر Proof Of Concept لثغرة أمنية من نوع buffer overflow في إصداري 10.5 و 10.6\_ من Mac"
---
[**باحثون أمنيون ينشرون Proof of Concept لثغرة أمنية في إصداري 10.5و 10.6  من Mac OS X**](https://www.it-scoop.com/2010/01/%d8%a8%d8%a7%d8%ad%d8%ab%d9%88%d9%86-%d8%a3%d9%85%d9%86%d9%8a%d9%88%d9%86-%d9%8a%d9%86%d8%b4%d8%b1%d9%88%d9%86-proof-of-concept-%d9%84%d8%ab%d8%ba%d8%b1%d8%a9-%d8%a3%d9%85%d9%86%d9%8a%d8%a9-%d9%81/)

قامت مجموعة من الباحثين الأمنيين العاملين لدى SecurityReason بنشر Proof Of Concept لثغرة أمنية من نوع buffer overflow في إصداري 10.5 و 10.6  من Mac OS X تم اكتشافها منذ أكثر من 8 أشهر.

![](/static/images/باحثون-أمنيون-ينشرون-proof-of-concept-لثغرة-أمنية-ف/apple_chains_security\_300.jpg)

الثغرة الأمنية تتواجد في الشيفرة المصدرية لـ libc/gdtoa مفتوحة المصدر ، و المستعملة في كل من أنظمة Mac OS X، OpenBSD، NetBSD وFreeBSD. و أيضا في كل من KDE،K-Meleon،Firefox و Opera لكنه تم تصحيحها.

الهدف من نشر هذا الـ PoC هو دفع Apple لنشر تحديثات أمنية لسد هذه الثغرة ، إذ أنه من المعروف على Apple تأخرها في سد الثغرات على نظامها إن كانت تخص شيفرة مفتوحة المصدر.

في انتظار تصحيح الثغرة، يشير العديد من خبراء الأمن و الحماية إلى أن أنظمة Mac OS X ستكون إحدى الوجهات المفضلة للمخترقين خلال العام الحالي و هو ما يتم الإشارة إليه كل عام.

يمكن الإطلاع على الـ PoC من [هنا](http://securityreason.com/securityalert/6932)
