render
======

This function renders a view using mustache.

.. js:function:: render(params)

  :param object params: Input parameters.
  :returns: the rendered output.

**Parameters:**

view *(string)*
  Location of the view. Use ``resolve(..)`` to resolve a view.

model *(object)*
  Model that is passed to the view.

**Example:**

.. literalinclude:: code/render.js
  :language: javascript
