.. _reference-image-filters:

Image Filters
=============

Enonic XP includes a number of image filters that may be used to set the size or
add style to the images.

Scaling filters
---------------

**Scale Max**

Scales the image proportionally, so the longest edge has the given number of pixels.

*Arguments:*

size
  The length of the longest edge.  Required

Example:
  .. literalinclude:: code/scalemax.txt

**Scale Wide**

Scales the image to fit the given width of the picture.  If the image is higher
than the given height, it is cropped on top and bottom.

*Arguments:*

width
  Width in pixels

height
  maximum height in pixels

Example:
  .. literalinclude:: code/scalewide.txt


Styling filters
---------------

**block**

This filter pixelates the image creating a mosaic like effect.

*Arguments:*

size
  The number of pixels squared, that should be combined to one block.
  Default: 2

Example:
  .. literalinclude:: code/block.txt

  .. image:: images/block5.jpg

**blur**

Applies a blur effect.


**border**

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
