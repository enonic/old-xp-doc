Adding regions
==============

To be able to add components like images, component parts, or text to our page via the live edit drag and drop
interface, we need to create at least one region. To do this we will first modify the page descriptor (``page.xml``) to
support one region called ``main``.

.. literalinclude:: code/page-2.xml
   :language: xml

Next, our controller must send the region data to the view.

.. literalinclude:: code/controller-4.js
   :language: javascript

Finally, we need to modify the view to render all components inside the region.
To make live-edit understand that an element is a region, we need an attribute
called ``data-portal-component-type`` with the value ``region``.

.. literalinclude:: code/thymeleaf-3.html
   :language: html

We can now use the live edit drag and drop interface to drag components onto
our page. Lets look into how we can create components.
