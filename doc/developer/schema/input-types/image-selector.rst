.. _imageselector_type:

ImageSelector
-------------

Pick a reference to another existing image or upload a new image.
Supported image types are:

* Jpeg
* Png
* Gif
* Svg

.. literalinclude:: code/imageselector.xml
   :language: xml

common fields
  All Input Types have these :ref:`Common Fields <input_types_common_fields>`

allowContentType
  Same as for :ref:`contentselector_type` .

allowPath
  Same as for :ref:`contentselector_type` .

treeMode
  Same as for :ref:`contentselector_type` .
  When not in tree mode, Image Selector will show images in gallery mode, 3 images per row.

hideToggleIcon
  Same as for :ref:`contentselector_type` .
