Require()
=========

The globally available function ``exports()`` is used to expose funtionality from a given Javascript file (controllers, libraries etc).
This is part of the require.js spec.

The functions that handle the requests can be exposed with the ``exports`` keyword.

.. literalinclude:: code/controller-1.js
   :language: javascript

A handler function receives a parameter with a ``request`` object, and returns a ``response`` object.

.. literalinclude:: code/controller-2.js
   :language: javascript


Controller Methods
------------------

Javascript controllers are triggered through by exporting functions matching the desired HTTP Method it implements.
As such, any controller must explicitly declare one or more export in order to handle requests:
``GET``, ``POST``, ``DELETE`` are examples of such methods.

For every request sent to the controller, the appropriate function will be called.
