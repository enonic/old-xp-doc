Creating a part component
=========================

Creating a component is very similar to creating a page. We need a descriptor, a controller and a view. When they are
done, we can add the part component to the page by using drag and drop in live edit.

Start by creating folders ``part/mypart``, and add a ``mypart.xml`` descriptor. This is very similar to our ``my-first-page.xml``, the
only difference is that a part cannot contain any regions. We want this part to list our favorite things to do, so we
will need to configure some input for the part. We will add a text input which can be repeated up to 5 times.

.. literalinclude:: code/part.xml
   :language: xml

Next, create a controller inside the same folder, ``mypart.js``.

.. literalinclude:: code/controller.js
   :language: javascript

The part needs a root element with the attribute ``data-portal-component-type``. In this case, it will be a ``part``, but we can
also resolve it dynamically as explained in the example. The ``things`` parameter is basically just JSON data, and we can
loop it easily in Thymeleaf and print its value.

.. literalinclude:: code/thymeleaf.html
   :language: html

The part can now be added to the page via drag and drop. You will be able to configure the part in the *context window*
on the right side of live edit. Here is an image of the result.

.. image:: images/my-part.png
