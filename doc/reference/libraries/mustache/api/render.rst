render
======

This function renders a view using mustache.

.. js:function:: render(view, model)

  :param ref view: Location of the view.
  :param object model: View model.
  :returns: the rendered output.

**Parameters:**

view *(ref)*
  Location of the view. Use ``resolve(..)`` to resolve a view.

model *(object)*
  Model that is passed to the view.

**Example:**

.. literalinclude:: code/render.js
  :language: javascript
