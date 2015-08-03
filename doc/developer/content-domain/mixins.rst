Mixins
======

Structures of data that are repeated in many content types, like a set of address fields, or a
combobox with a standard set of values, may be defined as mixins and reused in multiple content types.  The
mixin definition file must be placed in the folder ``site/mixins/[name]`` and named ``[name].xml``.
For example, ``site/mixins/us-address/us-address.xml``.

.. literalinclude:: code/mixin.xml
   :language: xml

.. TIP::

  A mixin may optionally have its own specific icon. The icon can be assigned to the mixin by adding a PNG file with
  the same name, in the mixin folder, e.g. ``site/mixins/us-address/us-address.png``

Using a mixin
-------------

Below is an example of a simple contenttype that uses the ``us-address`` mixin.  Notice that the
name of the mixin folder is used and not the mixin's Display Name.

.. literalinclude:: code/content-type-with-mixin.xml
   :language: xml

inline
  The mixin inputs are included with the ``inline`` element and the attribute
  ``mixin`` with the name of the mixin.
