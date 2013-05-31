---
layout: default
title: wen12128's blog
tagline: Supporting tagline
---
{% include JB/setup %}

<div class="blog_list clearfix">
 {% for post in site.posts %}

   <div class="blog_teaser box">
      <p class="blog_date">{{ post.date | date: '%d' }}<br><span>{{ post.date | date: '%Y-%m' }}</span></p>
      - ### [{{ post.title }}]({{ post.url }})
      <div class="blog_teaser_bar">
        <p class="user"><a href="#"><span class="icon-user"></span>by Eric</a></p>
        <p class="tags"><span class="icon-tag"></span><a class="last" href="http://caishanchun.cn/tags.html#jekyll-ref">jeklly</a></p>
        <p class="comments"><span class="icon-comments"></span><a href="/en/blog/2013/05/30/237-and-242-released/#disqus_thread" data-disqus-identifier="idguid=blogpost-51">0 Comments and 0 Reactions</a></p>
      </div>
      <p></p><p>{{post.description}}</p><p></p>
      <a href="{{ post.url }}" title="全文阅读">全文阅读</a>
   </div>

 {% endfor %}
</div>
