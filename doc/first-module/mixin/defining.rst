Defining a Mixin
================

Structures of data that are likely to be repeated in different content types can be defined in a single mixin. For
example, a standard address form might be used in several content types. Each mixin definition file must be placed in the folder
``site/mixins/[name]`` and named ``[name].xml``.

Go ahead and create the file ``us-address.xml`` below in a folder named ``us-address``. The name of this folder will be used later when it is
time to implement the mixin in another content type configuration.

.. literalinclude:: code/mixin.xml
   :language: xml
   
