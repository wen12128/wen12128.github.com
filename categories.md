---
layout: default
title: Category
header: Posts By Category
group: navigation
keywords: PLC
description: caishanchun's blog
tagline: 工业自动化
---
{% include JB/setup %}

<div class="blog_list clearfix">
 <div class="content">
  <ul class="tag_box inline">
  {% assign categories_list = site.categories %}
  {% include JB/categories_list %}
  </ul>
  
  {% for category in site.categories %} 
  <h2 id="{{ category[0] }}-ref">{{ category[0] | join: "/" }}</h2>
  <ul>
  {% assign pages_list = category[1] %}  
  {% include JB/pages_list %}
  </ul>
  {% endfor %}
 </div>
</div>
