Regions
=======

To be able to add components like images, component parts, or text to our page via the live edit drag and drop
interface, we need to create at least one region. Regions can be declared in the page descriptor.

.. literalinclude:: code/page-2.xml
   :language: xml

You will also need to handle regions in your controller.

.. literalinclude:: code/controller-4.js
   :language: javascript

To make live-edit understand that an element is a region, we need an attribute
called ``data-portal-component-type`` with the value ``region`` in our HTML.

.. literalinclude:: code/thymeleaf-3.html
   :language: html

We can now use the live edit drag and drop interface to drag components onto
our page.
