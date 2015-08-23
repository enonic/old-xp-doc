.. default-domain:: js
.. _CommonJS Modules Specification: http://wiki.commonjs.org/wiki/Modules/1.1

require
=======

This function will load a JavaScript file and return the exports as objects.
The function implements parts of the `CommonJS Modules Specification`_.

.. js:function:: require(path)

  :param string path: Path to the javascript to load.
  :returns: The loaded JavaScript object exports.

Examples:

.. literalinclude:: code/require.js
   :language: javascript

If the path is relative then it will start looking for the file from the local directory.
If the file is not found there, it will start looking from the `site/lib` directory.
The file extension .js is not required.