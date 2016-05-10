.. _http_request:

HTTP Request
============

The following object is passed along with every HTTP request. The object is similar to many traditional request objects, except for two special properties:
mode and branch. These properties are specific to the XP Portal, automatically indicating the contextual branch and rendering mode.

The ``request`` object represents the HTTP request and current context for the
controller.

.. literalinclude:: code/request.json
    :language: json

method
    HTTP method of the request.

scheme
    Name of the scheme used to make this request ("http" / "https").

host
    Host name of the server to which the request was sent.

port
    Port of the server to which the request was sent.

path
    Path of the request.

url
    URL of the request.

remoteAddress
    IP address of the client that sent the request. If the `X-Forwarded-For`_ header is set, its value will override the client IP.

mode
    Portal rendering mode, one of: ``edit``, ``preview``, ``live``.

branch
    Name of the repository branch, one of: ``draft``, ``master``.

body
    Optional text value

params
    Name/value pairs with the query/form parameters from the request.

headers
    Name/value pairs with the HTTP request headers.

cookies
    Name/value pairs with the HTTP request cookies.

.. _X-Forwarded-For: http://en.wikipedia.org/wiki/X-Forwarded-For
