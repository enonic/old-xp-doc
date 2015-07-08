Controller
==========

A page controller handles requests to the page. The controller is written in JavaScript and must be
named ``controller.js``. A controller exports a set of methods, one for each HTTP method that should be handled.
The handle method has a request object as parameter and returns the result.

.. literalinclude:: code/controller-1.js
   :language: javascript

Here's a simple controller that acts on the ``GET`` request method.

.. literalinclude:: code/controller-2.js
   :language: javascript
