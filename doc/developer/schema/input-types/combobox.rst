.. _combobox_type:

ComboBox
--------

A ComboBox needs a list of options.

.. literalinclude:: code/combobox.xml
   :language: xml

option
  This element defines the option label. The ``value`` attribute defines the
  actual value to set when this option is selected. Multiple ``option``
  settings are ordered.

default
  This element specifies the default option for the combo box. It should be equal to one of the ``option`` values.
