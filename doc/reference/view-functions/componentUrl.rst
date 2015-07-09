componentUrl
============

This generates a URL pointing to a component.

**Parameters:**

_id
  Id to the page.

_path
  Path to the page.

_component
  Path to the component. If not set, the current path is set.

*everything else*
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/componentUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/componentUrl-xslt.xml
   :language: xml
