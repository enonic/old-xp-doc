getSiteConfig
=======

This function returns the site configuration for this app in the parent site of the content corresponding to the current execution context.
It is meant to be called from a page, layout or part controller.

.. js:function:: getSiteConfig(params)

  :param object params: Input parameters.
  :returns: the site configuration as JSON.

**Example:**

.. literalinclude:: code/getSiteConfig.js
  :language: javascript

**Result:**

.. literalinclude:: code/getSiteConfig-result.json
  :language: json
