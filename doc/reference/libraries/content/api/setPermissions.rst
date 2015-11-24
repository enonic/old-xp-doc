setPermissions
==============

This function sets permissions on a content.

.. js:function:: setPermissions(params)

  :param object params: JSON with the parameters below.
  :returns: the updated content as JSON.

**Parameters:**

key *(string)*
  Path or id to the content.

permissions *(array)*
   Array of permissions.

**Example:**

.. literalinclude:: code/setPermissions.js
  :language: javascript

**Result:**

.. literalinclude:: code/setPermissions-result.json
  :language: json
