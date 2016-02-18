.. _errors:

Error Handling
==============

Enonic XP enables you to displaying nice custom error pages for your site.

Create the following folder in your project ``src/main/resources/site/error`` and place an ``error.js`` within it.
The file follows the same pattern as controllers and filters. If certain methods are implemented and exported, they will be executed in case of errors during rendering.

If an error occurs during processing - the system looks for an ``error.js`` script within the relevant application - sites specifically it will go through all applications added to the site (in order).

If an ``error.js`` script is found, it looks for an exported method named ``handleXXX`` where ``XXX`` is the HTTP status-code of the error.
If not found, it will try to find the generic error method ``handleError`` instead.


Here is an example of an ``error.js`` file:

.. literalinclude:: code/error.js
   :language: javascript


The input parameter for the ``handleXXX`` and ``handleError`` functions is an error JSON object containing the status code, error message, Java Exception object, and the original ``request`` object:

.. literalinclude:: code/error_param.json
   :language: json

The expected returned value for the function is a ``response`` object (see :ref:`http_controllers`).

The error processing logic will try every handle-function in application order until it can get a result (not ``undefined`` or ``null``).
This means that an error function can decide to not handle a specific error and let the next one deal with it.
If no result is returned by any function, it will be eventually handled by the internal error page.

Also note that if an error occurs inside the custom-error code, then the internal error page will be rendered.
