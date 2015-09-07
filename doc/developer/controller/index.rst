Controllers
===========

A controller is a fragment of JavaScript code executed on the server that processes and
responds to HTTP requests.

Every page, part, layout and service must have a controller which consists of a JavaScript file named ``[component-name].js`` where
`component-name` is also the name of the folder that the controller resides in. For example, the controller for a part named "things" would
be ``site/parts/things/things.js``.

.. toctree::
   :maxdepth: 1

   methods
   request
   response
   contributions
