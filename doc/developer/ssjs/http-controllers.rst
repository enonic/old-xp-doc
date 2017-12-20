.. _http_controllers:

HTTP Controllers
================

Serverside JavaScript is used in the http controllers of Enonic XP.
Every :ref:`page`, :ref:`part`, :ref:`layout`, :ref:`services`, :ref:`controller_mappings` etc. must have a controller.

An application may also contain an :ref:`app_controller`.

JavaScript controllers are invoked from the portal by exporting functions matching the desired HTTP Method it implements.
As such, any controller must explicitly declare one or more "exports" in order to handle requests:
``get``, ``post``, ``delete`` are examples of such methods.

A controller can also export a special function ``all`` which will handle requests with any HTTP method, unless there is a function exported for the specific method.

The appropriate function will automatically be invoked for every request sent to the controller.

Example usage

.. literalinclude:: code/controller-1.js
    :language: javascript

A handler function receives a parameter with a ``request`` object, and returns a ``response`` object.

.. literalinclude:: code/controller-2.js
    :language: javascript
