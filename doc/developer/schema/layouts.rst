.. _schema_layouts:

Schema Layouts
==============

To shape the presentation of a form, one can use layouts. Currently, only one layout exists.

Field set
---------

In order to group items visually, a field set may be used.  This is an XML element with a label that will
cause the form in the admin console to group the inputs inside the set under a heading from the label of
the field set.

.. literalinclude:: code/field-set.xml
   :language: xml

@name
  The field set needs a name for reference.

label
  The label will appear as a heading above the inputs that are grouped inside.

items
  The fields inside the set must be listed inside an ``items`` element.

