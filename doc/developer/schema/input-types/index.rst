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

label\@i18n
  The key to look up the label text in the localization bundles. (See also :ref:`localization_schemas`)

help-text
  This optional text will be shown next to the input field and can be used for explanation of the field's purpose.

help-text\@i18n
  The key to look up the help text in the localization bundles. (See also :ref:`localization_schemas`)

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
    media-selector
    radiobutton
    tag
    textarea
    textline
    time
