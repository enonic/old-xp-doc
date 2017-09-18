.. _textline_type:

TextLine
--------

A field for inputting a single line of text.

.. literalinclude:: code/textline.xml
   :language: xml

common fields
  All Input Types have these :ref:`Common Fields <input_types_common_fields>`

default
  This element specifies a default string value for the TextLine.

config
   regexp
      A regular expression that restricts the valid values for the input. Optional, if not set any text is a valid value.

   max-length
      Maximum number of characters allowed in the field. If not specified the length is unrestricted.

