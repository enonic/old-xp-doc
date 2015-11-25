run
===

This function allows to run a function within a specified context.

.. js:function:: run(params)

  :param object context: JSON with the context parameters.
  :param function callback: Function to execute.
  :returns: the result of the function execution.

**Example:**

.. literalinclude:: code/runWithUser.js
  :language: javascript

**Result:**

.. literalinclude:: code/runWithUser-result.json
  :language: json

**Example:**

  .. literalinclude:: code/runWithBranch.js
    :language: javascript

  **Result:**

  .. literalinclude:: code/runWithBranch-result.json
    :language: json
