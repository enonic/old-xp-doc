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
  The color of the border as a decimal or hexadecimal number. Default: Default: 0 / 0x000000 (black)

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
