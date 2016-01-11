.. default-domain:: js
.. _CommonJS Modules Specification: http://wiki.commonjs.org/wiki/Modules/1.1

Global JavaScript objects and functions
=======================================

When using the Enonic XP serverside javascript framework, the following global functions and objects are available.

App
---

The globally available ``app`` object holds information about the contextual app it was delivered from.

.. js:attribute:: app.name
    Name of the application.

.. js:attribute:: app.version
    Version of the application.

Examples:

.. literalinclude:: code/app.js
    :language: javascript


Log
---

This gobally available ``log`` object holds the logging methods. It's one method for each log
level and takes the same number of parameters.

.. js:function:: log.debug(message, args)

    :param string message: Message to log as a debug-level message.
    :param array args: Optional arguments used in message format.

.. js:function:: log.info(message, args)

    :param string message: Message to log as an info-level message.
    :param array args: Optional arguments used in message format.

.. js:function:: log.warning(message, args)

    :param string message: Message to log as a warning-level message.
    :param array args: Optional arguments used in message format.

.. js:function:: log.error(message, args)

    :param string message: Message to log as an error-level message.
    :param array args: Optional arguments used in message format.

Examples:

.. literalinclude:: code/log.js
    :language: javascript


Resolve()
---------

The globally available function resolves a fully qualified path to a local path based
on your current location. It will never check if the path exists, just
resolve it. This function supports both relative (with dot-references)
and absolute paths.

.. js:function:: resolve(path)

  :param string path: Path to resolve using current location.
  :returns: The fully qualified resource path of the location.

Examples:

.. literalinclude:: code/resolve.js
    :language: javascript

Require()
---------

The globally available function will load a JavaScript file and return the exports as objects.
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


Exports
-------

The globally available ``exports`` keyword is used to expose funtionality from a given Javascript file (controllers, libraries etc).
This is part of the require.js spec.

Simply use the ``exports`` keyword to expose functionality from any javascript file.
