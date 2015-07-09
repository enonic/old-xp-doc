attachmentUrl
=============

This generates a URL pointing to an attachment.

**Parameters:**

_id
  Id to the content holding the attachment.

_path
  Path to the content holding the attachment.

_name
  Name to the attachment.

_label
  Label of the attachment. Default is ``source``.

_download
  Set to true if the disposition header should be set to attachment.
  Default is ``false``.

*everything else*
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/attachmentUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/attachmentUrl-xslt.xml
   :language: xml
