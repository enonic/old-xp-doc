serviceUrl
==========

This generates a URL pointing to a service.

**Parameters:**

service
  Name of the service.

application
  Other application to reference to.  Default is current application.

type
  URL type. Either ``server`` (server-relative URL) or ``absolute``. Default is ``server``.

params
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/serviceUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/serviceUrl-xslt.xml
   :language: xml
