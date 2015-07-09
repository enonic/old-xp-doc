assetUrl
========

This generates a URL pointing to a static file. 

**Parameters:**

_path
  Path to the asset.

_module
  Other module to reference to. Defaults to current module.

*everything else*
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/assetUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/assetUrl-xslt.xml
   :language: xml
