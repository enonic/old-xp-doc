.. _apps-controller-response:

Response
========

The ``response`` object is the value returned by a controller handler function.
It represents the HTTP response.

.. literalinclude:: code/response.json
   :language: json

status
  HTTP response status code (default is ``200``).

body
  HTTP message body of the response that can either be a string or a
  JavaScript object.

contentType
  MIME type of the body (defaults to ``text/plain; charset=utf-8``).

headers
  Name/value pairs with the HTTP headers to be added to the response.

cookies
  HTTP cookies to be added to the response. Will be described in a later section.

redirect
  URI to redirect to. If specified, the value will be set in the "Location" header
  and the status will be set to 303 ("See other").

pageContributions
  HTML contributions that can be provided from a component to a page. Will
  be described in a later section.

  
