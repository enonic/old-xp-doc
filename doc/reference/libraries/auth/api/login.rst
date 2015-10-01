login
=====

This function verifies the credentials for a user and associates it with the current session.

.. js:function:: login(params)

  :param object params: JSON with the parameters below.
  :returns: whether the credentials were valid and the authenticated user.

**Parameters:**

user *(string)*
  The username or email of the user to be authenticated.

password *(string)*
  The password of the user to be authenticated.

userStore *(string)*
  The user store or list of user stores where to look the user up. Optional.
  If not specified, the user will be looked up in all existing user stores.

**Examples:**

.. literalinclude:: code/login.js
    :language: javascript

.. literalinclude:: code/login-multi.js
    :language: javascript

.. literalinclude:: code/login-all.js
    :language: javascript

**Result:**

.. literalinclude:: code/login-result.json
    :language: json
