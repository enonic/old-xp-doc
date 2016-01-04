.. _error_page:

Error Page
==========

The error page for a site can be customized by defining one or more error handling scripts.

To add an error script, create a folder ``site/error`` in the application and place an ``error.js`` file within this folder.
The file follows the same pattern as controllers and filters. If certain methods are implemented and exported, they will be executed in case of errors during rendering.

When there is an error while rendering a page, the system looks for an ``error.js`` script in all the applications configured for the site, in the order they are set on the site.
If an ``error.js`` script is found, it looks for an exported method named ``handleXXX`` where ``XXX`` is the HTTP status-code of the error.
If not found, it will try to find the generic error method ``handleError`` instead.


Here is an example of an ``error.js`` file:

.. literalinclude:: code/error.js
   :language: javascript


The input parameter for the ``handleXXX`` and ``handleError`` functions is an error JSON object containing the status code, error message, Java Exception object, and the original ``request`` object:

.. literalinclude:: code/error_param.json
   :language: json

The expected returned value for the function is a ``response`` object (see :ref:`apps-controller-http`).

The error processing logic will try every handle-function in application order until it can get a result (not ``undefined`` or ``null``).
This means that an error function can decide to not handle a specific error and let the next one deal with it.
If no result is returned by any function, it will be eventually handled by the internal error page.

Also note that if an error occurs inside the custom-error code, then the internal error page will be rendered.
