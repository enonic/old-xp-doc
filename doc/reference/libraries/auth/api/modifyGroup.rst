modifyGroup
===========

This function retrieves the group specified and updates it with the changes applied.

.. js:function:: modifyGroup(params)

  :param object params: JSON with the parameters below.
  :returns: the updated group.

**Parameters:**

key *(string)*
  Principal key of the group to modify.

editor *(function)*
  Group editor function to apply to group.
  The function will be called with the group object as a parameter, and must return an updated group object.

**Examples:**

.. literalinclude:: code/modifyGroup.js
    :language: javascript


**Result:**

.. literalinclude:: code/modifyGroup-result.json
    :language: json
