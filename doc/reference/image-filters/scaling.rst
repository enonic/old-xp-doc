.. _reference-image-scaling:

Scaling
=======

Scale Max
---------

Scales the image proportionally, so the longest edge has the given number of
pixels.

*Arguments:*

size
  The length of the longest edge.  Required

Example:
  .. literalinclude:: code/scalemax.txt

Scale Wide
----------

Scales the image to fit the given width of the picture.  If the image is higher
than the given height, it is cropped on top and bottom, based on the focal
point position.

*Arguments:*

width
  Width in pixels

height
  maximum height in pixels

Example:
  .. literalinclude:: code/scalewide.txt

Scale Block
-----------

Scales the image, while keeping the aspect ratio, so it fills the rectangle
specified by width and height. Then crops the overflowing axis based on the
focal point position. The result of a call to this method will be an image that
always has the exact size of the specified input.

*Arguments:*

width
  Width in pixels

height
  Height in pixels

Example:
  .. literalinclude:: code/scaleblock.txt


Scale Square
------------

Scales the image proprtionally to match the shortest edge.  The longest edge
will be cropped based on the focal point position.

*Arguments:*

size
  The length of both sides in pixels

Example:
  .. literalinclude:: code/scalesquare.txt


Scale Height
------------

Scales the image proportionally to match the given height.

*Arguments:*

height
  Height in pixels

Example:
  .. literalinclude:: code/scaleheight.txt

Scale Width
-----------

Scales the image proportionally to match the given height.

*Arguments:*

width
  Width in pixels

Example:
  .. literalinclude:: code/scalewidth.txt
