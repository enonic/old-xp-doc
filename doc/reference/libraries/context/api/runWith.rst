runWith
=======

This function allows to run a function within a specified context.

.. js:function:: runWith(params)

  :param object params: JSON with the parameters below.
  :returns: the content created as JSON.

**Parameters:**

context *(object)*
  Context parameters.

callback *(function)*
  Function to execute.

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
