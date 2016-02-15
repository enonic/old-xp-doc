.. _widgets:

Widget
======

.. note:: **Work In Progress**

Widgets are user interface components that can be used by the various administrative tools.


Descriptor
----------

The widget **descriptor** is where is defined the display name and its interfaces.
The interfaces are used to create a link between a tool and the widget.
For example, for your widget to be displayed in the context panel of the tool "Content Studio", add the interface "com.enonic.xp.content-manager.context-widget"

The descriptor file must have the same name as the `widget` folder that contains it ``admin/widgets/[widget-name]/[widget-name].xml``:

.. literalinclude:: code/descriptor.xml
   :language: xml


Controller
----------

To drive the widget, we will need a **controller** (See :ref:`http_controllers`). The controller typically produces the initial widget html.
Depending on the widget implementation it may also handle sub-requests from the widget.

The descriptor file must have the same name as the `widget` folder that contains it ``admin/widgets/[widget-name]/[widget-name].js``:

.. literalinclude:: code/controller.js
   :language: javascript
