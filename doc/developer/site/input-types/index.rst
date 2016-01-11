.. _site_input_types:


Site Input Types
================

For the content manager and sites, several custom input types have been created. These may freely be used by any schema in the site domain, such as content types - page, part, and site descriptors.


ContentSelector
---------------

References to other content are specified by this input type.

.. literalinclude:: code/content-selector-type.xml
   :language: xml

relationship
  This setting defines the name of which relationship-type to use.
  Default is ``system:reference``.

allowType
  This is used to limit the content types that may be selected for this input.
  Use one setting for each content-type.

allowPath
  This is used to limit the path of the content that may be selected for this input.
  The site on which the content exists, can be wildcarded with ``${site}``
  Use one setting for path expression.
  
.. literalinclude:: code/allowPath-samples.xml
   :caption: allowPath samples
   :language: xml


HtmlArea
--------

A field for entering html in a WYSIWYG HTML editor, supports inserting images and linking to media content in general.
More configuration options will be available here soon!
   
   
ImageSelector
-------------

An ImageSelector is used to add images to a form.  Existing image content may be selected, or a new image may be uploaded from
the file system.

.. literalinclude:: code/image-selector-type.xml
   :language: xml

allowPath
  This is used to limit the path of the images that may be selected for this input.
  The site on which the content exists, can be wildcarded with ``${site}``
  Use one setting for path expression.
  
   