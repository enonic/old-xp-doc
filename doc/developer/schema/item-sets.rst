.. _item_sets:

Item Sets
=========

Item sets represent a special capability of forms that allow you to nest other form items hierarchically.

Inputs in item sets are grouped into logical units, allowing them to repeat as a complex input type - since item sets support occurrences too.
Item sets are both visually and semantically grouped as the name of the item set is used in the persisted property structure. An item set actually produces a property set.

Here is an example of an item set with two inputs. The resulting form will allow multiple entries of phone numbers with labels:

.. literalinclude:: code/item-set.xml
   :language: xml

name (required)
  The set needs a name for reference in result sets.

label
  The set label is printed as a header on the box that will surround the group
  in the input form.

label\@i18n
  The key to look up the label text in the localization bundles. (See also :ref:`localization_schemas`)

occurrences
  Occurrence configuration can be done at any level.

.. TIP::

  It is also possible to nest item sets inside each other