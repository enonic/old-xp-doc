.. _option_sets:

Option Sets
===========

An option set represents a group of options rendered as either radio-buttons or checkboxes.
Each option may or may not have a form of inputs it consists of. An option can be considered to be a field-set with selectable header.

By default, an option form will only be shown upon selection of the option, but the entire option
set may be configured to have all of its options expanded by default.

It's also possible to pre-select specific options by default.

Here is an example of a multi-select option set with options expanded by default, empty first option and pre-selected second option:

.. literalinclude:: code/option-set-multi.xml
   :language: xml

@name
  The set needs a name for reference in result sets.

label
  The label is displayed as a header of the option set.

expanded
  Optional. Set to ``true`` to expand all of the options by default

occurrences
  Detailed definition of how many times this option set may be repeated inside one content.

options
  Container of options.

   @minimum
      Required. Minimum number of options that must be selected in this option set.

   @maximum
      Required. Maximum number of options that can be selected in this option set.
      Setting this attribute to a value greater than 1 will result in rendering of a multi-select option set with
      options rendered as checkboxes. Setting the attribute value to 1 will render options as radio-buttons (single-select option set).

   option
     Container of the option form.

      @name
         Option name. Must be unique within the option set.

      label
         Label of the option's checkbox or radio button.

      default
         Optional. Set to ``true`` to pre-select the option.

      items
         Optional. Container of the option form's inputs.