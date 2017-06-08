.. _portal-localize:

localize
========

This localizes a phrase.

**Parameters:**

_key
  The property key.

_locale
  A string-representation of a locale. If the locale is not set, the
  site language is used.

_values
  Optional placeholder values (comma separated).

**Usage in Thymeleaf:**

.. literalinclude:: code/localize-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/localize-xslt.xml
   :language: xml
