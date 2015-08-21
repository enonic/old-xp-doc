.. default-domain:: js
.. _CommonJS Modules Specification: http://wiki.commonjs.org/wiki/Modules/1.1

require
=======

This function will load a JavaScript and return the exports as object.
The function implements parts of the `CommonJS Modules Specification`_.

.. js:function:: require(path)

  :param string path: Path to the javascript to load.
  :returns: The loaded JavaScript object exports.

Examples:

.. literalinclude:: code/require.js
   :language: javascript
