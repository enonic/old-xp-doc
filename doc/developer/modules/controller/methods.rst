Methods
=======

A controller must have one or more functions to handle requests, one for each different http method: ``GET``, ``POST``, ``DELETE``, etc.
For every request sent to the controller the appropriate function will be called.

The functions that handle the requests can be exposed with the ``exports`` keyword.

.. literalinclude:: code/controller-1.js
   :language: javascript

A handler function receives a parameter with a ``request`` object, and returns a ``response`` object.

.. literalinclude:: code/controller-2.js
   :language: javascript
