serviceUrl
==========

This generates a URL pointing to a service.

**Parameters:**

_service
  Name of the service.

_module
  Other module to reference to.  Default is current module.

*everything else*
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/serviceUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/serviceUrl-xslt.xml
   :language: xml
