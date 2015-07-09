imageUrl
========

This generates a URL pointing to an image.

**Parameters:**

_path
  Path to the asset.

_module
  Other module to reference to.  Default is current module.

*everything else*
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/imageUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/imageUrl-xslt.xml
   :language: xml
