modifyUser
==========

This function retrieves the user specified and updates it with the changes applied.

.. js:function:: modifyUser(params)

  :param object params: JSON with the parameters below.
      :returns: the updated user.

**Parameters:**

key *(string)*
  Principal key of the user to modify.

editor *(function)*
  User editor function to apply to user.
  The function will be called with the user object as a parameter, and must return an updated user object.

**Examples:**

.. literalinclude:: code/modifyUser.js
    :language: javascript


**Result:**

.. literalinclude:: code/modifyUser-result.json
    :language: json
