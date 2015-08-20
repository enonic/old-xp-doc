Request
=======

The ``request`` object represents the HTTP request and current context for the
controller.

.. literalinclude:: code/request.json
   :language: json

method
  HTTP method of the request.

scheme
  Scheme of the request.

host
  Host of the request.

port
  Port of the request.

path
  Path of the request.

url
  URL of the request.

mode
  Rendering mode, one of: ``edit``, ``preview``, ``live``.

branch
  Name of the repository branch, one of: ``draft``, ``master``.

params
  Name/value pairs with the URI query parameters from the request.

formParams
  Name/value pairs with the form parameters submitted in the request.

headers
  Name/value pairs with the HTTP request headers.

cookies
  Name/value pairs with the HTTP request cookies.

  
