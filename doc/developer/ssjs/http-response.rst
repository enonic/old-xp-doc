HTTP Response
=============

The ``response`` object is the value returned by an HTTP controller - as a response to an :ref:`http_request`.

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
    URI to redirect to. If specified, the value will be set in the "Location" header and the status will be set to 303.

pageContributions
    A special filter available for sites and page components allowing page components to contribute html to the main page markup. See :ref:`page_contributions`

postProcess
    Post-processing is a special filter for sites and pages, if enabled it will reprosess a page looking for page contributions and rendering
    components in a page. (See also :ref:`page_contributions`) (default is ``true``). Set to false if you want to speed up page rendering in cases where there are no regions or page components.

applyFilters
    Whether or not to execute the filters after rendering. Set to ``false`` to skip execution of filters. (See also :ref:`response_filters`) (default is ``true``).
