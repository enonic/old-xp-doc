.. _item_sets:

Item Sets
=========

Item sets represent a special capability of forms that allow you to nest other form items hierarchically. This enables the 


It is possible to group inputs into logical units, either to allow them to repeat as a complex input type - since item sets support occurences too.
Item sets are both visually and semantically grouped as the name of the item set is used in the persisted property structure. An item set actually produces a property set.

Here is an example of an item set with a regular input type before and after:

.. literalinclude:: code/item-set.xml
   :language: xml

name
  The set needs a name for reference in result sets.

label
  The set label is printed as a header on the box that will surround the group
  in the input form.

occurrences
  Occurrence configuration can be done at any level.

.. TIP::

  It is also possible to nest item sets inside each other