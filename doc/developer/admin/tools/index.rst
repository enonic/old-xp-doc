.. _tools:

Tools
=====

.. note:: **Work In Progress**


Descriptor
----------

The widget **descriptor** is where input fields are defined for custom configuration of the part. The descriptor is not required if the part
does not need any custom configuration. Parts cannot contain regions.

When used, the descriptor file must have the same name as the `part` folder that contains it ``admin/widgets/[widget-name]/[widget-name].xml``:

.. literalinclude:: code/widget.xml
   :language: xml



Controller
----------

To drive the widget, we will need a **controller**. The `controller <../controller/index.html>`_ typically produces the initial widget html. Depending on the widget implementation it may also handle sub-requests from the widget.

  admin/widget/[widget-name]/[widget-name].js

.. literalinclude:: code/controller.js
   :language: javascript
