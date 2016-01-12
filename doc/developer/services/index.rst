.. _services:

Services
========

With services you can create http endpoints without binding it to specific paths.

Create a folder in your project named ``/src/main/resources/services/[service-name]`` and
place a ``[service-name].js`` file within this folder.

The service can then be accessed on a relatively mounted url::

  */_/service/[application]/[service-name]

Where ``application`` is the application name (without version).

.. ATTENTION::

  For sites specifically, you may only access the services of the apps that have been added to that site.
..

Here's a simple service that increments a counter and returns it as JSON.

.. literalinclude:: code/service.js
   :language: javascript
