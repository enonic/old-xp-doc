.. _checkbox_type:

CheckBox
--------

A checkbox field has a value if it is checked, or no value if it is not checked.  Therefore, the only values for occurrences
that makes sense is a minimum of zero and a maximum of one.

.. literalinclude:: code/checkbox.xml
   :language: xml

default
  This element specifies the default value. Set it to ``checked`` to check it, otherwise it will be left unchecked.

config
   alignment
      This config setting can be used to configure checkbox position in relation to its label. Default alignment is to the left of the label.
      Supported values are: "left", "right", "top", "bottom".
