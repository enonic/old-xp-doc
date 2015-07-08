Mixins
======

Structures of data that are repeated in many content types, like a set of address fields, or a
combobox with a standard set of values, may be defined as mixins and reused in multiple content types.  The
mixin definition file must be named ``mixin.xml`` and placed in the folder ``cms/mixins/[name]``.
For example, ``cms/mixins/us-address/mixin.xml``.

.. literalinclude:: code/mixin.xml
   :language: xml


Using a mixin
-------------

Below is an example of a simple contenttype that uses the ``us-address`` mixin.  Notice that the
name of the mixin folder is used and not the mixin's Display Name.

.. literalinclude:: code/content-type-with-mixin.xml
   :language: xml

inline
  The mixin inputs are included with the ``inline`` element and the attribute
  ``mixin`` with the name of the mixin.
