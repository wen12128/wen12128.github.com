---
layout: default
title: caishanchun
keywords: PLC
description: caishanchun's blog
tagline: ��ҵ�Զ���
---
{% include JB/setup %}

<div class="blog_list blog_clearfix">
 {% for post in site.posts %}

   <div class="blog_teaser box">
      <p class="blog_date">{{ post.date | date: '%d' }}<br><span>{{ post.date | date: '%Y-%m' }}</span></p>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div class="blog_teaser_bar">
        <p class="user"><span class="cus-user"></span><a href="#">by {{post.author}}</a></p>
        <p class="tags"><span class="cus-tag"></span><a class="last" href="#">{{post.tags}}</a></p>
      </div>
      <p></p><p>{{post.description}}</p><p></p>
      <a href="{{ post.url }}" title="Read more">Read more</a>
   </div>

 {% endfor %}
</div>
