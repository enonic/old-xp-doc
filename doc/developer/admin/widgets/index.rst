.. _widgets:

Widgets
=======

Widgets are user interface components that can be used to extend various Admin Tools.
Currently, the only available extension point for widgets are detail panels in the Content Studio tool.


To create a widget, you must create a new folder in your project structure, i.e.  ``admin/widgets/[widget-name]``.
Then you must place a descriptor and a controller there.

Descriptor
----------

The widget ``descriptor`` defines the display name and the interfaces it matches.

An interface is simply a unique identifier that is used to create a link between a tool and the widget.
For example, for your widget to be displayed in the "Content Studio" detail panel, add the interface "com.enonic.xp.content-manager.context-widget"

The descriptor file must match the widget name, i.e. ``admin/widgets/[widget-name]/[widget-name].xml``:

.. literalinclude:: code/descriptor.xml
   :language: xml


Controller
----------

To drive the widget, we will need a ``controller`` (See :ref:`http_controllers`). The controller typically produces the initial widget html.
Depending on the widget implementation it may also handle sub-requests from the widget.

The controller file must match the widget name, i.e. ``admin/widgets/[widget-name]/[widget-name].js``:

.. literalinclude:: code/controller.js
   :language: javascript
