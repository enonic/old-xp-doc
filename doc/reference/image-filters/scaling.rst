Scaling
=======

Scale Max
---------

Scales the image proportionally, so the longest edge has the given number of pixels.

*Arguments:*

size
  The length of the longest edge.  Required

Example:
  .. literalinclude:: code/scalemax.txt

Scale Wide
----------

Scales the image to fit the given width of the picture.  If the image is higher
than the given height, it is cropped on top and bottom.

*Arguments:*

width
  Width in pixels

height
  maximum height in pixels

Example:
  .. literalinclude:: code/scalewide.txt
