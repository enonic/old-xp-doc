processHtml
===========

This function replaces abstract internal links contained in an HTML
text by generated URLs.

**Parameters:**

value
  Html value string to process.

type
  URL type. Either "server" (server-relative URL) or "absolute". Default is "server"

**Usage in Thymeleaf:**

.. literalinclude:: code/processHtml-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/processHtml-xslt.xml
   :language: xml
