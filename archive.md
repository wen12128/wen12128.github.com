---
layout: page
title: Archive
header: Post Archive
group: navigation
keywords: PLC
description: caishanchun's blog
tagline: ��ҵ�Զ���
---
{% include JB/setup %}

<div class="blog_list clearfix">
 <div class="content">
  {% for post in site.posts %}

  - {{ post.date | date: "%Y-%m-%d"}} &raquo; [{{ post.title }}]({{ post.url }})

  {% endfor %}
 </div>
</div>
