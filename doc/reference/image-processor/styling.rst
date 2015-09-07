.. _reference-image-styling:

Styling
=======

Block
-----

Pixelates the image creating a mosaic like effect.

*Arguments:*

size
  The number of pixels squared, that should be combined to one block. Default: 2

Example:
  .. literalinclude:: code/block.txt

  .. image:: images/block5.jpg


Blur
----

Applies a blur effect.

*Arguments:*

radius
  How much blur to apply. Default: 2

Example:
  .. literalinclude:: code/blur.txt

  .. image:: images/blur8.jpg


Border
------

Applies a rectangular border around the image.

*Arguments:*

width
  The width of the border in pixels. Default: 2

color
  The color of the border as a decimal or hexadecimal number.
  Default: 0 / 0x000000 (black)

Example:
  .. literalinclude:: code/border.txt

  .. image:: images/border4_0x777777.jpg


Emboss
------

Applies an embossing effect on the image.

*No arguments*

Example:
  .. literalinclude:: code/emboss.txt

  .. image:: images/emboss.jpg


Grayscale
---------

Creates a grayscale variant of the image.

*No arguments*

Example:
  .. literalinclude:: code/grayscale.txt

  .. image:: images/grayscale.jpg


Invert
------

Inverts the colors in the image.

*No arguments*

Example:
  .. literalinclude:: code/invert.txt

  .. image:: images/invert.jpg


Rounded
-------

Rounds the corners of the image, with an option of adding a border around the
rounded image.

*Arguments:*

radius
  The number of pixels from each corner where the rounding starts.  Default: 10

borderSize
  The width of the border in pixels.  Default: 0

borderColor
  The color of the border as a decimal or hexadecimal number.  Default: 0 / 0x000000 (black)

Example:
  .. literalinclude:: code/rounded.txt

  .. image:: images/rounded8_4_0x777777.jpg


Sharpen
-------

Applies a sharpening filter to the image.

*No arguments*

Example:
  .. literalinclude:: code/sharpen.txt

  .. image:: images/sharpen.jpg


RGB Adjust
----------

Adjust the red, green and blue levels in the image.

*Arguments:*

red
  The adjusted red level for the image. Default: 0

green
  The adjusted green level for the image. Default: 0

blue
  The adjusted blue level for the image. Default: 0

Example:
  .. literalinclude:: code/rgbadjust.txt

  .. image:: images/rgbadjust2_0_n2.jpg


HSB Adjust
----------

Adjust the hue, saturation and brightness levels in the image.

*Arguments:*

hue
  Value from -1 to 1, of how far around the color wheel to move the hue of the
  image.  Default: 0

saturation
  Value from -1 to 1 to adjust the intesity of the colors in the image.
  Default: 0

brightness
  Value from -1 to 1 to adjust the brightness of the image.
  Default: 0


Example:
  .. literalinclude:: code/hsbadjust.txt

  .. image:: images/hsbadjust.jpg

Edge
----

Creates an abstract image by brightening every edge and darkening every even
surface of the image.

*No arguments*

Example:
  .. literalinclude:: code/edge.txt

  .. image:: images/edge.jpg


Bump
----

Creates a 3D looking texture, based on darkening and lighting each side of edges
in the image.

*No arguments*

Example:
  .. literalinclude:: code/bump.txt

  .. image:: images/bump.jpg


Sepia
-----

Creates a grayscale image with a yellow-reddish tint to make it look like an old
photograph.

*Arguments:*

depth
  The brightness of the tint.  Default: 20

Example:
  .. literalinclude:: code/sepia.txt

  .. image:: images/sepia25.jpg


Rotate 90
---------

Rotates an image 90 degrees

*No arguments*

Example:
  .. literalinclude:: code/rotate90.txt

  .. image:: images/rotate90.jpg


Rotate 180
----------

Rotates an image 180 degrees

*No arguments*

Example:
  .. literalinclude:: code/rotate180.txt

  .. image:: images/rotate180.jpg


Rotate 270
----------

Rotates an image 270 degrees

*No arguments*

Example:
  .. literalinclude:: code/rotate270.txt

  .. image:: images/rotate270.jpg


Flip horizontal
---------------

Flips an image horizontally

*No arguments*

Example:
  .. literalinclude:: code/fliph.txt

  .. image:: images/fliph.jpg


Flip vertically
---------------

Flips an image vertically

*No arguments*

Example:
  .. literalinclude:: code/flipv.txt

  .. image:: images/flipv.jpg


Colorize
--------

Makes a grayscale image, then applies a tint, based on the specified color.

*Arguments:*

red
  Red boost value.  Default: 1

green
  Green boost value.  Default: 1

blue
  Blue boost value.  Default: 1

Example:
  .. literalinclude:: code/colorize.txt

  .. image:: images/colorize.jpg

HSB Colorize
------------

Makes a grayscale image, then applies a tint, based on the specified color.

*Arguments:*

color
  The tint color as a decimal or hexadecimal number. Default: 0xFFFFFF

Example:
  .. literalinclude:: code/hsbcolorize.txt

  .. image:: images/hsbcolorize.jpg
