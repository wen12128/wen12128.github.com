---
layout: default
title: wen12128's blog
tagline: Supporting tagline
---
{% include JB/setup %}

 {% for post in site.posts %}
 - ### [{{ post.title }}]({{ post.url }}) <small>{{ post.date | date: '%Y-%m-%d' }}</small>

   {{post.description}} [<span class="label label-info">全文阅读</span> &raquo;]({{ post.url }})

-------------------------------------------------------------

 {% endfor %}
