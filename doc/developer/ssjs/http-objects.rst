.. _apps-controller-http:

HTTP Objects
============

Since Enonic XP is made to work in the context of HTTP, these objects are available to help doing the job right:

Request
-------

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


Response
--------

The ``response`` object is the value returned by a controller handler function.
It represents the HTTP response.

.. literalinclude:: code/response.json
    :language: json

status
    HTTP response status code (default is ``200``).

body
    HTTP message body of the response that can either be a string or a JavaScript object.

contentType
    MIME type of the body (defaults to ``text/plain; charset=utf-8``).

headers
    Name/value pairs with the HTTP headers to be added to the response.

cookies
    HTTP cookies to be added to the response. Will be described in a later section.

redirect
    URI to redirect to. If specified, the value will be set in the "Location" header and the status will be set to 303 ("See other").

pageContributions
    HTML contributions that can be provided from a component to a page. Will be described in a later section.

postProcess
    Whether or not execute the post-processing step after rendering. Post-processing is necessary for page contributions and rendering
    components in a page. (See also :ref:`apps-controller-contributions`) (default is ``true``).

applyFilters
    Whether or not execute the filters after rendering. Set to ``false`` to skip execution of filters. (See also :ref:`response_filters`) (default is ``true``).


Cookies
-------

Http Cookie values can be set in responses using two different ways.

* If the value is just a string, then the cookie is created using default settings.
* If the value is an object, then it will try to set the settings. Every field is optional except value.

Here's an example of how the cookies should be set:

.. literalinclude:: code/cookies.js
    :language: javascript
