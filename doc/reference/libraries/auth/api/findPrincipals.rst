findPrincipals
==============

This function finds principals matching the specified criteria.

.. js:function:: findPrincipals(params)

  :param object params: JSON with the parameters below.
  :returns: the ``total`` number of principals matching the search, the ``count`` of principals included, and an array of ``hits`` containing the principals.

**Parameters:**

type *(string)*
  Principal type to look for, one of: ``"user"``, ``"group"`` or ``"role"``. If not specified all principal types will be included. Optional.

userStore *(string)*
  Key of the user store to look for. If not specified all user stores will be included. Optional.

start *(number)*
  First principal to return from the search results. It can be used for pagination. Optional, default is 0.

count *(number)*
  A limit on the number of principals to be returned. Optional, default is 10.

name *(string)*
  Name of the principal to look for. Optional.

searchText *(string)*
  Text to look for in any principal field. Optional.


**Examples:**

.. literalinclude:: code/findPrincipals.js
    :language: javascript

**Result:**

.. literalinclude:: code/findPrincipals-result.json
    :language: json
