serviceUrl
==========

This function generates a URL pointing to a service.

.. js:function:: serviceUrl(params)

  :param object params: Input parameters.
  :returns: the generated URL.

**Parameters:**

service *(string)*
  Name of the service.

application *(string)*
  Other application to reference to.  Default is current application.

type *(string)*
  URL type. Either "server" (server-relative URL) or "absolute". Default is "server"

params *(object)*
  Custom parameters to append to the url.

**Example:**

.. literalinclude:: code/serviceUrl.js
  :language: javascript
