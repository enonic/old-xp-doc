attachmentUrl
=============

This generates a URL pointing to an attachment.

**Parameters:**

id
  Id to the content holding the attachment.

path
  Path to the content holding the attachment.

name
  Name to the attachment.

label
  Label of the attachment. Default is ``source``.

download
  Set to true if the disposition header should be set to attachment.
  Default is ``false``.

type
  URL type. Either ``server`` (server-relative URL) or ``absolute``. Default is ``server``.

params
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/attachmentUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/attachmentUrl-xslt.xml
   :language: xml
