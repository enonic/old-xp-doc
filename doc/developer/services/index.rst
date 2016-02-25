.. _services:

Services
========

Services allow the creation of http endpoints without binding them to specific paths.

Services typically consist of a single JavaScript file which bares the name of the service. This controller must be in a folder with the
same name and must be located in the ``/src/main/resources/services`` folder. For example, a logout service would look like this:
``/src/main/resources/services/logout/logout.js``

The service can then be accessed on a relatively mounted URL, as seen below, where ``application`` is the application name (without version)::

  */_/service/[application]/[service-name]

The portal function ``serviceUrl()`` will create a dynamic URL for a service.

.. js:function:: serviceUrl(name [,application] [,type] [,params])

  :param string name: Name of the service.
  :param string application: Application where the service exists. Default is current application.
  :param string type: URL type. Either server (server-relative URL) or absolute. Default is server.
  :param object params: Custom parameters to append to the url.
  :returns: The the relative or absolute URL to the service.

.. ATTENTION::

  For sites, you may only access the services of the apps that have been added to that site.
..

The following example is a simple service that returns a JSON object with the date and a counter.

.. literalinclude:: code/service.js
   :language: javascript
