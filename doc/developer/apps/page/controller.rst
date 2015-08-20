.. _apps-page-controller:

Controller
==========

A page controller handles requests to the page. The controller is a required file written in JavaScript and must be
named ``[page-name].js``. A controller exports a method for each type of HTTP request that should be handled.
The handle method has the request object as a parameter and returns the `response object <../controller/response.html>`_.

.. literalinclude:: code/controller-1.js
   :language: javascript

Here's a simple controller that acts on the ``GET`` request method.

.. literalinclude:: code/controller-2.js
   :language: javascript
