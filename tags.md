---
layout: page
title: Tag
header: Posts By Tag
group: navigation
keywords: PLC
description: caishanchun's blog
tagline: PLC
---
{% include JB/setup %}

<div class="blog_list clearfix">
 <div class="content">
  <ul class="tag_box inline">
  {% assign tags_list = site.tags %}  
  {% include JB/tags_list %}
  </ul>
  <hr/>
  {% for tag in site.tags %} 
  <h2 id="{{ tag[0] }}-ref">{{ tag[0] }}</h2>
  <ul>
  {% assign pages_list = tag[1] %}  
  {% include JB/pages_list %}
  </ul>
  {% endfor %}
 </div>
</div>
