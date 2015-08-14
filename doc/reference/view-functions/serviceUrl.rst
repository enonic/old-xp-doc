serviceUrl
==========

This generates a URL pointing to a service.

**Parameters:**

_service
  Name of the service.

_application
  Other application to reference to.  Default is current application.

_type
  URL type. Either "server" (server-relative URL) or "absolute". Default is "server"

*everything else*
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/serviceUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/serviceUrl-xslt.xml
   :language: xml
