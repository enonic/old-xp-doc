.. _input_types:

Input Types
===========

Input types are specified by XML snippets and used in combinations to build forms. An input type has both a front-end and a back-end.
Each input type will return a property with a specific value type.

The following XML configuration is common for all input types:

.. literalinclude:: code/input-type.xml
   :language: xml

.. _input_types_common_fields:

@name (required)
  The ``name`` attribute is the technical name used in templates and result
  sets to refer to this value.

@type (required)
  The type refers to one of the many input types which are explained below.

label (required)
  The label text will become the label for the input field in the editable form of
  the admin console.

help-text
  This optional text will be shown next to the input field and can be used for explanation of the field's purpose.

occurrences
  Detailed definition of how many times this field may be repeated inside one content.
  Set ``minimum`` to zero for fields that are not required, and ``maximum`` to zero for
  fields that have no restriction on the number of values.
  This element is optional, if omitted the default will be ``minimum="0"`` and ``maximum="1"``.

config
  Optional configuration that is used by some of the input-types. The config
  consists of elements with optional attributes. Each element/attribute name
  with dashes is automatically camel-cased
  (``relationship-type`` -> ``relationshipType``).

default
  Optional element that contains a default value for the particular input type. Currently it is only supported by some input types.
  See below for value formats for each input type. Invalid values for a given input type will be ignored.



.. toctree::
    :maxdepth: 1

    attachment-uploader
    checkbox
    combobox
    content-selector
    contenttypefilter
    custom-selector
    date
    datetime
    double
    geopoint
    htmlarea
    image-selector
    long
    radiobutton
    tag
    textarea
    textline
    time
