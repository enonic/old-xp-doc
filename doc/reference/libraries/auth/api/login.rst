login
=====

This function verifies the credentials for a user and associates it with the current session.

.. js:function:: login(params)

  :param object params: JSON with the parameters below.
  :returns: whether the credentials were valid and the authenticated user.

**Parameters:**

user *(string)*
  The username of the user to be authenticated.

password *(string)*
  The password of the user to be authenticated.

userStore *(string)*
  The user store where the user's account is located.

**Example:**

.. literalinclude:: code/login.js
    :language: javascript

**Result:**

.. literalinclude:: code/login-result.json
    :language: json
