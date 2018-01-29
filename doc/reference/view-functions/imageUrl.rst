.. _reference-image-url:

imageUrl
========

This generates a URL pointing to an image.

**Parameters:**

id
  Id to the image.

path
  Path to the image. If ``_id`` is specified, this parameter is not used.

format
  Format of the image.

scale
  Resize and crop the image to fit the available area.  See: :ref:`reference-image-scaling`

quality
  Quality for JPEG images, ranges from 0 (max compression) to 100 (min compression). Default is 85.

background
  Background color.

filter
  Styling filters to use on the image.  More than one filter may be combined
  with a semicolon.  See: :ref:`reference-image-styling`

type
  URL type. Either ``server`` (server-relative URL) or ``absolute``. Default is ``server``.

params
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/imageUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/imageUrl-xslt.xml
   :language: xml
