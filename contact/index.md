---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

[대학원생·학부연구생 모집 안내 등]

{%
  include button.html
  type="email"
  text="[email@university.ac.kr]"
  link="[email@university.ac.kr]"
%}
{%
  include button.html
  type="phone"
  text="[+82-XX-XXXX-XXXX]"
  link="[+82-XX-XXXX-XXXX]"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.com/maps"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="[사진 설명]"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="[사진 설명]"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
[내용]
{% endcapture %}

{% capture col2 %}
[내용]
{% endcapture %}

{% capture col3 %}
[내용]
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
