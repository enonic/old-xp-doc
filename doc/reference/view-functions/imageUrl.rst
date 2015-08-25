imageUrl
========

This generates a URL pointing to an image.

**Parameters:**

_path
  Path to the asset.

_scale
Required. Options are width(px), height(px), block(width,height), max(px), wide(width,height) and square(px).

_module
  Other module to reference to.  Default is current module.

_type
  URL type. Either "server" (server-relative URL) or "absolute". Default is "server"

*everything else*
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/imageUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/imageUrl-xslt.xml
   :language: xml
