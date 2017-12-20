.. _app_controller:

Application Controller
======================

An application can implement a controller to handle HTTP requests. This is done by adding a ``main.js`` JavaScript file at the root of the application (``/src/main/resources/``).

The HTTP requests are handled independent of any site or content, on a specific URL with the path ``/app/[app-id]`` (e.g. *"/app/com.enonic.app.superhero"*).

The ``main.js`` file acts as any other controller and may expose a function for each HTTP method that should be handled: GET, POST, etc.
Or an ``all`` function to handle requests with any method. (see :ref:`http_controllers`).

The function that handles the request receives the request object as a parameter and returns the response object .

The following is an example of an application controller, in ``main.js``.

.. literalinclude:: code/main-controller.js
   :language: javascript


Assets
------
The asset files of an application (see :ref:`assets`) are also available under the application controller URL.

For example, the asset in ``src/main/resources/assets/css/styles.css`` in application with name ``com.enonic.myapp`` can be requested with the URL
``/app/com.enonic.myapp/css/styles.css``.
