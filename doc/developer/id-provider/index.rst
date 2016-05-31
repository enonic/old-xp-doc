.. _widgets:

ID Providers
============

.. WARNING::
  ID Providers support is experimental.

TODO Explanation about ID Providers

To create an ID provider, you must create a new folder in your project structure, i.e.  ``idprovider``.
Then you must place a descriptor and a controller there.

Descriptor
----------

The ID Provider descriptor is an XML file that that is used to define the mode and the configuration required by the provider.

The descriptor file must have the following path: ``idprovider/idprovider.xml``:

.. literalinclude:: code/descriptor.xml
   :language: xml
   
mode
  Specifies how the provider uses the user store.
  
  LOCAL: Both the users and groups are stored in the user store.
  
  EXTERNAL: Both the users and groups are stored in a remote system.
  The user store is only a snapshot view of this remote system and therefore the users and groups are not editable in the Users Manager.
  
  MIXED: The users are stored in a remote system and the groups in the user store.
  The users in the user store are only a snapshot view of this remote system and therefore the users are not editable in the Users Manager.

config
  Specifies the input fields of the configuration required by the ID provider.


Controller
----------

To drive the widget, we will need a ``controller`` (See :ref:`http_controllers`). The controller typically produces the initial widget html.
Depending on the widget implementation it may also handle sub-requests from the widget.

The controller file must match the widget name, i.e. ``admin/widgets/[widget-name]/[widget-name].js``:

.. literalinclude:: code/controller.js
   :language: javascript
