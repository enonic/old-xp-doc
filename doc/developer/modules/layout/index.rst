Layout
======

Layouts are used in conjunction with ``regions`` to organize the various component parts that will be placed on the page
via live edit drag and drop. Layouts can be dropped into the page ``regions`` and then ``parts`` can be dragged into the
layout. This allows multiple layouts (two-column, three-column, etc.) on the same page and web editors can change things
around without touching any code. Layouts can even be nested. Making a layout is similar to making pages and part
components.

Layout contains - like pages and parts - a descriptor, a view and a controller, and should be
placed in under the layouts-folder in the module: ``layouts/<layoutname>/``


Descriptor
----------

The layout descriptor defines regions within the layout where parts can be placed with live edit.

.. literalinclude:: code/layout.xml
   :language: xml


Controller
----------

The layout controller composes the view of the layout based on http-requests.

.. literalinclude:: code/controller.js
   :language: javascript


View
----

A layout view defines the markup for the layout-component. The sample view
below is created in Thymeleaf, but you could create it in any view
that's supported.

.. literalinclude:: code/thymeleaf-view.html
   :language: html


Styling
-------

For a layout to have any meaning, some styling must be applied to the view. Depending on preferences, the needed css should
be placed in the ``/assets``-folder of the module, and included in the page where the layout should
be supported, e.g the view my-first-page.html should support bootstrap layouts:

.. literalinclude:: code/head.html
  :language: html
