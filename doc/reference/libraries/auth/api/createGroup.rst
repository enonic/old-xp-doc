createGroup
===========

This function creates a group in the user store specified.

.. js:function:: createGroup(params)

  :param object params: JSON with the parameters below.
  :returns: the group created.

**Parameters:**

userStore *(string)*
  Key of the user store where the group should be created.

name *(string)*
  Group name.

displayName *(string)*
  Group display name.

**Examples:**

.. literalinclude:: code/createGroup.js
    :language: javascript

**Result:**

.. literalinclude:: code/createGroup-result.json
    :language: json
