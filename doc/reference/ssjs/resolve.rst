.. default-domain:: js

resolve
=======

This function resolves a fully qualified path to a local path based
on your current location. It will never check if the path exists, just
resolve it. This function supports both relative (with dot-references)
and absolute paths.

.. js:function:: resolve(path)

  :param string path: Path to resolve using current location.
  :returns: The fully qualified resource path of the location.

Examples:

.. literalinclude:: code/resolve.js
   :language: javascript
