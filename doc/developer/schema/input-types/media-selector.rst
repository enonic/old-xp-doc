.. _mediaselector_type:

MediaSelector
-------------

Allows selecting one or several content items of :ref:`content_media_types` or uploading a new content of :ref:`content_media_types`.

.. literalinclude:: code/mediaselector.xml
   :language: xml

common fields
  Same :ref:`common Fields <input_types_common_fields>` that are supported by other Input Types

allowPath
  This is used to limit the path of the images that may be selected for this input. The site on which the content exists, can be wildcarded with ${site} Use one setting for path expression.
  For some examples of how to use this, please see **allowPath** of  :ref:`contentselector_type` .
