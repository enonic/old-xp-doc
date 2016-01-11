.. _site_descriptor:

Site Descriptors
================

To indicate that an application provides "site capabilities" and allow it to be added to sites, a site descriptor must be placed into the application.
Within your project, simply add a file called ``/main/src/resources/site/site.xml``. 

The site.xml file also makes use of the :ref:`schemas` concept, so you may easily define custom configuration forms for configuring the application when adding it to a site.

.. literalinclude:: code/site.xml
   :language: xml


To use the site configuration values, the controller can read the values and use it.


.. literalinclude:: code/controller.js
   :language: javascript
