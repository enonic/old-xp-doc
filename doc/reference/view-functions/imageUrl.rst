.. _reference-image-url:

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
  Resize and crop the image to fit the available area.  See: :ref:`reference-image-scaling`

_quality
  Quality for JPEG images, ranges from 0 (max compression) to 100 (min compression). Default is 85.

_background
  Background color.

_filter
  Styling filters to use on the image.  More than one filter may be combined
  with a semicolon.  See: :ref:`reference-image-styling`

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
