content.modify
==============

This command modifies a content.

key *(string)*
  Path or id to the content.

editor *(function)*
  Editor callback function.

branch *(string)*
  Set by portal, depending on context, to either "draft" or "master". May be overridden, but this is not recommended.
  Default is the current branch set in portal.

Example:

.. literalinclude:: code/modify.js
  :language: javascript

Result:

.. literalinclude:: code/modify-result.json
  :language: json
