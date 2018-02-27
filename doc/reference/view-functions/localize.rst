.. _portal-localize:

localize
========

This localizes a phrase.

**Parameters:**

key
  The property key.

locale
  A string-representation of a locale. If the locale is not set, the
  site language is used.

values
  Optional placeholder values (comma separated).

**Usage in Thymeleaf:**

.. literalinclude:: code/localize-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/localize-xslt.xml
   :language: xml
