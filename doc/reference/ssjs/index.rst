Serverside Javascript
=====================

Enonic XP relies heavily on Serverside Javascripting. Controllers are standalone JavaScripts executed on the server that processes and
responds to HTTP requests.

Every :ref:`page`, :ref:`part`, :ref:`layout` and :ref:`service` must have a controller which consists of a JavaScript file named ``[component-name].js`` where
`component-name` is also the name of the folder that the controller resides in. For example, the controller for a part named "things" would
be ``site/parts/things/things.js``.

.. toctree::
   :maxdepth: 1

   app
   log
   resolve
   require
   exports
   request
   response
   cookies
   contributions
