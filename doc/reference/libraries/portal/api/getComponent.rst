getComponent
============

This function returns the component corresponding to the current execution context.
It is meant to be called from a layout or part controller.

.. js:function:: getComponent(params)

  :param object params: Input parameters.
  :returns: the component as JSON.

**Example:**

.. literalinclude:: code/getComponent.js
  :language: javascript

**Result:**

.. literalinclude:: code/getComponent-result.json
  :language: json
