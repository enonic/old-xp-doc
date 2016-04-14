.. _radiobutton_type:

RadioButton
-----------

An input type for selecting one of several options, defined in the ``config`` element.

.. literalinclude:: code/radiobutton.xml
   :language: xml

option
  This element defines the option label. ``value`` attribute defines the
  actual value to set when this option is selected. Multiple ``option``
  settings are ordered.

default
  This element specifies the default option for the radio button. It should be equal to one of the ``option`` values.
