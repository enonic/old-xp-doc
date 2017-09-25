.. _services:

Services
========

Services allow the creation of http endpoints without binding them to specific paths.
Each service must have a JavaScript controller file and optionally an XML descriptor placed in the folder ``services/[service-name]``


Descriptor
----------

The service descriptor is an XML file that is used to define which rights are required to access the service.

The descriptor file must have the same name as the service, i.e. ``services/[service-name]/[service-name].xml``:

.. literalinclude:: code/service.xml
   :language: xml


Controller
----------

A service controller handles requests to the service.
The controller is a required file written in JavaScript and must have the same name as the service, i.e. ``services/[service-name]/[service-name].js``.

A controller exports a method for each type of HTTP request that should be handled.
The handle method has the request object as a parameter and returns the response object (see :ref:`http_controllers`).

The following example is a simple service that returns a JSON object with the date and a counter.

.. literalinclude:: code/service.js
   :language: javascript


Access
------

The service can then be accessed on a relatively mounted URL, as seen below, where ``application`` is the application name (without version)::

  */_/service/[application]/[service-name]

The portal function ``serviceUrl()`` will create a dynamic URL for a service.

.. js:function:: serviceUrl({service [,application] [,type] [,params]})

  :param string service: Name of the service.
  :param string application: Application where the service exists. Default is current application.
  :param string type: URL type. Either server (server-relative URL) or absolute. Default is server.
  :param object params: Custom parameters to append to the url.
  :returns: The relative or absolute URL to the service.

API
---
The detailed API documentation may be `found here`_.

.. _found here: http://repo.enonic.com/public/com/enonic/xp/docs/${release}/docs-${release}-libdoc.zip!/module-portal.html#.serviceUrl .
