.. _htmlarea_type:

HtmlArea
--------

A field for inputting multi-line text, with formatting options.

.. literalinclude:: code/htmlarea.xml
   :language: xml

default
  This element specifies a default value. The value can contain any HTML elements, but tags must be correctly closed since the input type is defined inside an XML.

.. tip:: HTML Area is configured with default set of tools but the toolbar can be customized.
   Using the config setting you can exclude specific tools from being shown (use "*" to exclude all tools at once) and/or include those that you want to have in the toolbar.
   Separate tools with a space and use "|" character to group tool buttons together.
   Complete list of supported tools can be found in description of :ref:`editing_input_types_text`.

.. literalinclude:: code/htmlarea-customized.xml
   :language: xml

.. image:: images/htmlarea-customized.jpg



Default configuration of the HTML Area toolbar is shown below:

::

   styleselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | charmap anchor image macro link unlink | table | pastetext

