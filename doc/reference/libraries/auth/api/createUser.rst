createUser
==========

This function creates a user in the user store specified.

.. js:function:: createUser(params)

  :param object params: JSON with the parameters below.
      :returns: the user created.

**Parameters:**

userStore *(string)*
  Key of the user store where the user should be created.

name *(string)*
  User's name.

displayName *(string)*
  User's display name.

email *(string)*
  User's email.

**Examples:**

.. literalinclude:: code/createUser.js
    :language: javascript

**Result:**

.. literalinclude:: code/createUser-result.json
    :language: json
