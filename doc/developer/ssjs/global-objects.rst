.. default-domain:: js
.. _CommonJS Modules Specification: http://wiki.commonjs.org/wiki/Modules/1.1

Global JavaScript objects and functions
=======================================

The following global functions and objects are available in the Enonic XP framework.

App
---

The globally available ``app`` object holds information about the contextual app it was delivered from. It has the following properties:

app.name
  The name of the application, as defined in its gradle configuration.

app.version
  Version of the application, as defined in its gradle configuration.

app.config
  Values from the application's configuration file. This can be set using ``$XP_HOME/config/<app.name>.cfg``. Every time the configuration is changed the app is restarted.

Examples:

.. literalinclude:: code/app.js
    :language: javascript


Log
---

This globally available ``log`` object holds the logging methods. It's one method for each log
level and takes the same number of parameters.

.. js:function:: log.debug(message, [args])

    :param string message: Message to log as a debug-level message.
    :param array args: Optional arguments used in message format.

.. js:function:: log.info(message, [args])

    :param string message: Message to log as an info-level message.
    :param array args: Optional arguments used in message format.

.. js:function:: log.warning(message, [args])

    :param string message: Message to log as a warning-level message.
    :param array args: Optional arguments used in message format.

.. js:function:: log.error(message, [args])

    :param string message: Message to log as an error-level message.
    :param array args: Optional arguments used in message format.

Examples:

.. literalinclude:: code/log.js
    :language: javascript


Resolve()
---------

This globally available function resolves a fully qualified path to a local resource based
on the current location. It does not check if a resource exists at the specified path.
This function supports both relative (with dot-references) and absolute paths.

.. js:function:: resolve(path)

  :param string path: Path to resolve using current location.
  :returns: The fully qualified resource path of the location.

Examples:

.. literalinclude:: code/resolve.js
    :language: javascript

Require()
---------

This globally available function will load a JavaScript file and return the exports as objects.
The function implements parts of the `CommonJS Modules Specification`_.

.. js:function:: require(path)

    :param string path: Path to the JavaScript to load.
    :returns: The loaded JavaScript object exports.

Examples:

.. literalinclude:: code/require.js
    :language: javascript

If the path is relative then it will start looking for the file from the local directory.
If the file is not found there, it will start scanning in parent directories that have a /lib folder until it reaches the resources/ folder.
The file extension .js is not required.


Exports
-------

The globally available ``exports`` keyword is used to expose functionality from a given JavaScript file (controllers, libraries etc).
This is part of the require.js spec.

Simply use the ``exports`` keyword to expose functionality from any JavaScript file.

Double underscore __
--------------------

The double underscore is available in any server-side JavaScript code and is used for wrapping Java objects in a JavaScript object. Read
more about :ref:`invoking_java`.
