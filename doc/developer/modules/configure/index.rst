Configuring the module
======================

Global configuration variables for the site may be defined in the config element of ``module.xml``. Values for these
settings can be filled in when you edit the site in the admin console.

.. literalinclude:: code/module.xml
   :language: xml

To use the module configuration values, the controller can read the values and use it.

.. literalinclude:: code/controller.js
   :language: javascript
