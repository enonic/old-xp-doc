Configuring a site
======================

Global configuration variables for a site may be defined in the config element of ``site.xml``. Values for these
settings can be filled in when you edit the site in the admin console.

.. literalinclude:: code/site.xml
   :language: xml

To use the site configuration values, the controller can read the values and use it.

.. literalinclude:: code/controller.js
   :language: javascript
