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
  Scaling filter.  Only one scaling filter may be used for each image.
  See Scaling Filters here: :ref:`reference-image-filters` .

_quality
  Quality for JPEG images.

_background
  Background color.

_filter
  Styling filters to use on the image.  More than one filter may be combined with a semicolon.
  All Styling filters are listed here: :ref:`reference-image-filters` .

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
