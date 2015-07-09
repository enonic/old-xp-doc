getContent
==========

This function returns the content corresponding to the current execution context.
It is meant to be called from a page, layout or part controller.

.. js:function:: getContent(params)

  :param object params: Input parameters.
  :returns: the content as JSON.

**Example:**

.. literalinclude:: code/getContent.js
  :language: javascript

**Result:**

.. literalinclude:: code/getContent-result.json
  :language: json
