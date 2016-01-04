.. _layout:

Layout
======

Layouts are used in conjunction with ``regions`` to organize the structure of the various component parts that will be placed on the page
via Live Edit drag and drop. Layouts can be dropped into the page ``regions`` and then ``parts`` can be dragged into the
layout. This allows multiple layouts (two-column, three-column, etc.) on the same page and web editors can change things
around without touching any code. Making a layout is similar to making pages and part
components. Layouts cannot be nested.

Layout contains - like pages and parts - a descriptor, a controller and a view, and should be
placed in the folder ``site/layouts/[layout-name]``


Descriptor
----------

The layout descriptor defines regions within the layout where parts can be placed with Live Edit.
The file must be named ``[layout-name].xml``.

.. literalinclude:: code/layout.xml
   :language: xml


Controller
----------

The layout controller composes the view of the layout based on HTTP requests.
The file must be named ``[layout-name].js``.

.. literalinclude:: code/controller.js
   :language: javascript


View
----

A layout view defines the markup for the layout component. The sample view
below is created in Thymeleaf, but it could be created in any view engine
that is supported.

.. literalinclude:: code/thymeleaf-view.html
   :language: html


Styling
-------

For a layout to have any meaning, some styling must be applied to the view. The desired CSS should
be placed in the ``/assets`` folder of the application, and included in the page where the layout should
be supported. For example, the view my-first-page.html supports Bootstrap layouts:

.. literalinclude:: code/head.html
  :language: html
