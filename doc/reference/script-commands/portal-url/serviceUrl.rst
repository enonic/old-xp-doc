.. _script-commands-serviceUrl:

portal.serviceUrl
=================

This command generates a URL pointing to a service.

Arguments:

service *(string)*
  Name of the service.

module *(string)*
  Other module to reference to.  Default is current module.

params *(object)*
  Custom parameters to append to the url.

Example:

.. literalinclude:: code/serviceUrl.js
  :language: javascript
