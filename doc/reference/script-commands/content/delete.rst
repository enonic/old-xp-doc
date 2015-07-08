content.delete
==============

This command deletes a content.

Arguments:

key *(string)*
  Path or id to the content.

branch *(string)*
  Set by portal, depending on context, to either ``draft`` or ``master``.
  May be overridden, but this is not recommended. Default is the current
  branch set in portal.

Example:

.. literalinclude:: code/delete.js
   :language: javascript
