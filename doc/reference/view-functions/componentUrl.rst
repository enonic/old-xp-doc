componentUrl
============

This generates a URL pointing to a component.

**Parameters:**

id
  Id to the page.

path
  Path to the page.

component
  Path to the component. If not set, the current path is set.

type
  URL type. Either ``server`` (server-relative URL) or ``absolute``. Default is ``server``.

params
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/componentUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/componentUrl-xslt.xml
   :language: xml
