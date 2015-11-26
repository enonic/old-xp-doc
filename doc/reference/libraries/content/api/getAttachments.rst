getAttachments
==============

This function returns all the attachments that belong to a content.

.. js:function:: getAttachments(key)

  :param string key: Path or id to the content.
  :returns: An object with all the attachments that belong to the content, where the key is the attachment name. Or null if the content cannot be found.

**Example:**

.. literalinclude:: code/getAttachments.js
   :language: javascript

**Result:**

.. literalinclude:: code/getAttachments-result.json
   :language: json
