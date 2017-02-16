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

allowPath
  This is used to limit the path of the images that may be selected for this input. The site on which the content exists, can be wildcarded with ${site} Use one setting for path expression.
  For some examples of how to use this, please see **allowPath** of  :ref:`contentselector_type` .
