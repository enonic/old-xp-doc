.. _script-commands-attachmentUrl:

portal.attachmentUrl
====================

This command generates a URL pointing to an attachment.

Arguments:

id *(string)*
  Id to the content holding the attachment.

path*(string)*
  Path to the content holding the attachment.

name *(string)*
  Name to the attachment.

label *(string)*
  Label of the attachment. Default is ``source``.

download *(boolean)*
  Set to true if the disposition header should be set to attachment.
  Default is ``false``.

params *(object)*
  Custom parameters to append to the url.

Example:

.. literalinclude:: code/attachmentUrl.js
  :language: javascript
