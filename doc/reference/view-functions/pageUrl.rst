pageUrl
=======

This generates a URL pointing to a page.

**Parameters:**

_id
  Id to the page. If id is set, then path is not used.

_path
  Path to the page. Relative paths is resolved using the context page.

_type
  URL type. Either "server" (server-relative URL) or "absolute". Default is "server"

*everything else*
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/pageUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/pageUrl-xslt.xml
   :language: xml
