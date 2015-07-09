serviceUrl
==========

This function generates a URL pointing to a service.

.. js:function:: serviceUrl(params)

  :param object params: Input parameters.
  :returns: the generated URL.

**Parameters:**

service *(string)*
  Name of the service.

module *(string)*
  Other module to reference to.  Default is current module.

params *(object)*
  Custom parameters to append to the url.

**Example:**

.. literalinclude:: code/serviceUrl.js
  :language: javascript
