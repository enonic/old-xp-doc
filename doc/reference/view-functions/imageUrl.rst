imageUrl
========

This generates a URL pointing to an image.

**Parameters:**

_id
  Id to the image.

_path
  Path to the image. If ``_id`` is specified, this parameter is not used.

_format
  Format of the image.

_scale
  Scaling option. Options are width(px), height(px), block(width,height), max(px),
  wide(width,height) and square(px).

_quality
  Quality for JPEG images.

_background
  Background color.

_filter
  Filters to use on the image.

_type
  URL type. Either ``server`` (server-relative URL) or ``absolute``. Default is ``server``.

*everything else*
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/imageUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/imageUrl-xslt.xml
   :language: xml
