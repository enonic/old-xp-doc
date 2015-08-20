Service
=======

With services you can create REST-like services without binding it to
some content. Create a folder ``site/services/[service-name]`` and
place a ``[service-name].js`` file within this folder.
This will be accessible with a fixed url::

  */_/service/[application]/[service-name]

Where ``application`` is the application name (without version).

Here's a simple service that increments a counter and returns it as JSON.

.. literalinclude:: code/service.js
   :language: javascript
