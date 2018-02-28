.. _schema_layouts:

Schema Layouts
==============

To shape the presentation of a form, one can use layouts. Currently, only one layout exists.

Field set
---------

A field set may be used to group items visually. The example below will create a form in the admin console with the inputs grouped under the
label of the field set.

.. literalinclude:: code/field-set.xml
   :language: xml

@name (required)
  The field set needs a name for reference.

label
  The label will appear as a heading above the inputs that are grouped inside.

label\@i18n
  The key to look up the label text in the localization bundles. (See also :ref:`localization_schemas`)

items
  The fields inside the set must be listed inside an ``items`` element.

