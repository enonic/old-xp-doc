Request
=======

The ``request`` object represents the HTTP request and current context for the
controller.

.. literalinclude:: code/request.json
   :language: json

mode
  Rendering mode, one of: ``edit``, ``preview``, ``live``.

uri
  URI of the request.

method
  HTTP method of the request.

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

  
