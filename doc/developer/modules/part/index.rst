Part
====

A part is a building block that can be placed on a page or into a region. As
with pages, a part is composed of a descriptor, a controller and
and optionally - a view. It should be placed in the folder ``site/parts/[part-name]``


The part descriptor is required to register the part and allows us to set up user input fields to configure the part.
A part cannot contain any regions.
The file must be named ``[part-name].xml``.

.. literalinclude:: code/part.xml
   :language: xml

To drive this part, we will also need a controller ``[part-name].js``.

.. literalinclude:: code/controller.js
   :language: javascript

The part needs a root element with the attribute ``data-portal-component-type``. In this case, it will be a ``part``, but we can
also resolve it dynamically as explained in the example. The ``things`` parameter is basically just JSON data, and we can
loop it easily in Thymeleaf and print its value.

.. literalinclude:: code/thymeleaf.html
   :language: html

The part can now be added to the page via drag and drop. You will be able to configure the part in the *context window*
in live-edit.
