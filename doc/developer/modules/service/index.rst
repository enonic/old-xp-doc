Service
=======

With services you can create REST-like services without binding it to
some content. Place a ``controller.js`` file within a named folder under
the ``services`` folder and this will be accessable with a fixed url::

  */_/service/[module]/[name]

Where ``module`` is the module name (without version) and  ``name`` is the name
of the service.

Here's a simple service that increments a counter and returns it as JSON.

.. literalinclude:: code/service.js
   :language: javascript
