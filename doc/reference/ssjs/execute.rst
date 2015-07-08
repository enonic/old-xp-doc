.. default-domain:: js

execute
=======

This function will execute a Java script command and return any result. It is
used to allow the users to execute exposed Java script commands. See
:ref:`script-commands`.

.. js:function:: execute(name, params)

  :param string name: Name of command to execute.
  :param params object: Parameters passed down to the execute method.
  :returns: The result of the execute method.

Examples:

.. literalinclude:: code/execute.js
   :language: javascript
