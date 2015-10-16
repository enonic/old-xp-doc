Log
===

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
