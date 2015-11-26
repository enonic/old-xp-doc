getAttachmentStream
===================

This function returns a data-stream for the specified content attachment.

.. js:function:: getAttachmentStream(params)

  :param object params: JSON with the parameters below.
  :returns: stream of the attachment data.

**Parameters:**

key *(string)*
  Path or id to the content.

name *(string)*
  Attachment name.

**Example:**

.. literalinclude:: code/getAttachmentStream.js
    :language: javascript
