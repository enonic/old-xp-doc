.. _reference-image-styling:

Styling
=======

block
-----

This filter pixelates the image creating a mosaic like effect.

*Arguments:*

size
  The number of pixels squared, that should be combined to one block.
  Default: 2

Example:
  .. literalinclude:: code/block.txt

  .. image:: images/block5.jpg

blur
----

Applies a blur effect.


border
------

Applies a rectangular border around the image.

*Arguments:*

width
  The width of the border in pixels.  Required.

color
  The color of the border as a decimal or hexadecimal number.
  Default: 0x000000

  Example:
    .. literalinclude:: code/border.txt

    .. image:: images/border4_0x777777.jpg
