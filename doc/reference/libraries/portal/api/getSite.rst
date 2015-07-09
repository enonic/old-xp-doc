getSite
=======

This function returns the parent site of the content corresponding to the current execution context.
It is meant to be called from a page, layout or part controller.

.. js:function:: getSite(params)

  :param object params: Input parameters.
  :returns: the site as JSON.

**Example:**

.. literalinclude:: code/getSite.js
  :language: javascript

**Result:**

.. literalinclude:: code/getSite-result.json
  :language: json
