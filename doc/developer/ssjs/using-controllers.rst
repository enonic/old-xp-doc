Using Controllers
=================

Every :ref:`page`, :ref:`part`, :ref:`layout` and :ref:`service` must have a controller which consists of a JavaScript file named
``[component-name].js`` where `component-name` is also the name of the folder that the controller resides in. For example, the controller
for a part named "things" would be ``site/parts/things/things.js``.

Javascript controllers specifically, are invoked from the portal by exporting functions matching the desired HTTP Method it implements.
As such, any controller must explicitly declare one or more export in order to handle requests:
``GET``, ``POST``, ``DELETE`` are examples of such methods.

For every request sent to the controller, the appropriate function will be called.

Example usage

.. literalinclude:: code/controller-1.js
    :language: javascript

A handler function receives a parameter with a ``request`` object, and returns a ``response`` object.

.. literalinclude:: code/controller-2.js
    :language: javascript
